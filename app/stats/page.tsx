import { cookies } from 'next/headers';
import { getDb } from '@/lib/db';
import { login } from './actions';
import { STATS_COOKIE, statsToken } from '@/lib/stats-auth';

export const instant = false;

type DayCount = { day: string; views: number; visitors: number };
type TypeCount = { type: string; n: number };
type UtmRow = { source: string; medium: string | null; campaign: string | null; n: number; leads: number };

const DAY_MS = 86_400_000;

async function getData(days: number) {
  const db = getDb();
  if (!db) return null;

  const [perDay, byType, utms, leadCount, funnel] = await Promise.all([
    db`
      select to_char(date_trunc('day', created_at), 'YYYY-MM-DD') as day,
             count(*)::int as views,
             count(distinct coalesce(visitor_id, session_id))::int as visitors
      from events
      where type = 'page_view'
        and created_at > now() - (${days} || ' days')::interval
      group by 1 order by 1
    ` as unknown as Promise<DayCount[]>,
    db`
      select type, count(*)::int as n
      from events
      where created_at > now() - (${days} || ' days')::interval
      group by type
    ` as unknown as Promise<TypeCount[]>,
    db`
      select coalesce(utm->>'utm_source', 'direct') as source,
             utm->>'utm_medium' as medium,
             utm->>'utm_campaign' as campaign,
             count(distinct coalesce(visitor_id, session_id))::int as n,
             count(distinct case when type = 'lead_success' then meta->>'email' end)::int as leads
      from events
      where created_at > now() - (${days} || ' days')::interval
      group by 1, 2, 3 order by n desc limit 15
    ` as unknown as Promise<UtmRow[]>,
    db`select count(*)::int as n from leads` as unknown as Promise<{ n: number }[]>,
    db`
      select
        count(distinct coalesce(visitor_id, session_id)) filter (where type = 'scroll_depth' and meta->>'depth' in ('50','75','100'))::int as scroll50,
        count(distinct coalesce(visitor_id, session_id)) filter (where type = 'vsl_progress' and meta->>'progress' in ('50','75','100'))::int as vsl50,
        count(distinct coalesce(visitor_id, session_id)) filter (where type = 'page_view')::int as visitors,
        count(distinct coalesce(visitor_id, session_id)) filter (where type = 'vsl_play')::int as vsl_plays,
        count(distinct coalesce(visitor_id, session_id)) filter (where type = 'lead_submit' or type = 'lead_success')::int as submitters,
        count(*) filter (where type = 'lead_success')::int as leads
      from events
      where created_at > now() - (${days} || ' days')::interval
    ` as unknown as Promise<
      {
        scroll50: number;
        vsl50: number;
        visitors: number;
        vsl_plays: number;
        submitters: number;
        leads: number;
      }[]
    >,
  ]);

  return {
    perDay,
    byType,
    utms,
    totalLeads: leadCount[0]?.n ?? 0,
    funnel: funnel[0],
  };
}

function todayCount(perDay: DayCount[]) {
  const today = new Date().toISOString().slice(0, 10);
  return perDay.find((d) => d.day === today) ?? { day: today, views: 0, visitors: 0 };
}

function yesterdayCount(perDay: DayCount[]) {
  const y = new Date(Date.now() - DAY_MS).toISOString().slice(0, 10);
  return perDay.find((d) => d.day === y) ?? { day: y, views: 0, visitors: 0 };
}

function Delta({ now, prev }: { now: number; prev: number }) {
  const diff = now - prev;
  if (diff === 0) return <span className="delta">stable vs hier</span>;
  return (
    <span className={`delta ${diff > 0 ? 'up' : 'down'}`}>
      {diff > 0 ? '▲' : '▼'} {Math.abs(diff)} vs hier
    </span>
  );
}

export default async function StatsPage({
  searchParams,
}: {
  searchParams: Promise<{ jours?: string; error?: string }>;
}) {
  const store = await cookies();
  const authed =
    process.env.STATS_PASSWORD &&
    store.get(STATS_COOKIE)?.value === statsToken();
  const params = await searchParams;

  if (!authed) {
    return (
      <div className="stats-page">
        <form className="stats-login" action={login}>
          <h1>Stats</h1>
          {params.error === '1' && (
            <p className="lead-error">Mot de passe incorrect.</p>
          )}
          <input
            type="password"
            name="password"
            placeholder="Mot de passe"
            autoFocus
            required
          />
          <button className="button button-primary" type="submit">
            Entrer
          </button>
        </form>
      </div>
    );
  }

  const days = [7, 14, 30].includes(Number(params.jours))
    ? Number(params.jours)
    : 14;
  const data = await getData(days);

  if (!data) {
    return (
      <div className="stats-page">
        <h1>Stats</h1>
        <p className="sub">DATABASE_URL non configurée.</p>
      </div>
    );
  }

  const today = todayCount(data.perDay);
  const yesterday = yesterdayCount(data.perDay);
  const count = (t: string) =>
    data.byType.find((r) => r.type === t)?.n ?? 0;

  const f = data.funnel ?? {
    scroll50: 0,
    vsl50: 0,
    visitors: 0,
    vsl_plays: 0,
    submitters: 0,
    leads: 0,
  };
  const funnel = [
    { label: 'Visiteurs', n: f.visitors },
    { label: 'Scroll 50%', n: f.scroll50 },
    { label: 'VSL play', n: f.vsl_plays },
    { label: 'VSL 50%', n: f.vsl50 },
    { label: 'Form submit', n: f.submitters },
    { label: 'Leads', n: f.leads },
  ];
  const funnelMax = Math.max(funnel[0].n, 1);

  const maxViews = Math.max(...data.perDay.map((d) => d.views), 1);

  return (
    <div className="stats-page">
      <h1>Funnel — AI Springboard</h1>
      <p className="sub">
        {days} derniers jours ·{' '}
        {[7, 14, 30].map((d) => (
          <a
            key={d}
            href={`/stats?jours=${d}`}
            style={{
              color: d === days ? 'var(--cyan)' : 'var(--muted)',
              marginRight: 12,
            }}
          >
            {d}j
          </a>
        ))}
        · {data.totalLeads} leads au total
      </p>

      <div className="stats-grid">
        <div className="stat-card">
          <small>Visiteurs aujourd&apos;hui</small>
          <strong>{today.visitors}</strong>
          <Delta now={today.visitors} prev={yesterday.visitors} />
        </div>
        <div className="stat-card">
          <small>Pages vues aujourd&apos;hui</small>
          <strong>{today.views}</strong>
          <Delta now={today.views} prev={yesterday.views} />
        </div>
        <div className="stat-card">
          <small>VSL plays ({days}j)</small>
          <strong>{count('vsl_play')}</strong>
        </div>
        <div className="stat-card">
          <small>Leads ({days}j)</small>
          <strong>{count('lead_success')}</strong>
        </div>
        <div className="stat-card">
          <small>Conv. visite → lead</small>
          <strong>
            {count('page_view') > 0
              ? `${((count('lead_success') / count('page_view')) * 100).toFixed(1)}%`
              : '—'}
          </strong>
        </div>
      </div>

      <div className="stats-panel">
        <h2>Pages vues par jour</h2>
        <div className="day-bars">
          {data.perDay.map((d) => (
            <div className="day-bar" key={d.day} title={`${d.day} — ${d.views} vues, ${d.visitors} visiteurs`}>
              <i style={{ height: `${(d.views / maxViews) * 100}%` }} />
              <small>{d.day.slice(5)}</small>
            </div>
          ))}
        </div>
      </div>

      <div className="stats-panel">
        <h2>Funnel</h2>
        {funnel.map((f) => (
          <div className="funnel-row" key={f.label}>
            <span className="f-label">{f.label}</span>
            <div className="funnel-bar" style={{ width: `${(f.n / funnelMax) * 100}%` }}>
              <span />
            </div>
            <span className="f-val">
              {f.n}{' '}
              {funnel[0].n > 0 && f.n > 0
                ? `· ${((f.n / funnel[0].n) * 100).toFixed(0)}%`
                : ''}
            </span>
          </div>
        ))}
      </div>

      <div className="stats-panel">
        <h2>Sources (UTM)</h2>
        <table className="stats-table">
          <thead>
            <tr>
              <th>Source</th>
              <th>Medium</th>
              <th>Campagne</th>
              <th>Visiteurs</th>
              <th>Leads</th>
            </tr>
          </thead>
          <tbody>
            {data.utms.map((u, i) => (
              <tr key={i}>
                <td>{u.source}</td>
                <td>{u.medium ?? '—'}</td>
                <td>{u.campaign ?? '—'}</td>
                <td>{u.n}</td>
                <td>{u.leads}</td>
              </tr>
            ))}
            {data.utms.length === 0 && (
              <tr>
                <td colSpan={5}>Aucune donnée.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="stats-panel">
        <h2>Events par type</h2>
        <table className="stats-table">
          <thead>
            <tr>
              <th>Type</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {data.byType.map((t) => (
              <tr key={t.type}>
                <td>{t.type}</td>
                <td>{t.n}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
