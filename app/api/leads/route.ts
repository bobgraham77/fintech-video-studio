import { type NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * POST /api/leads — capture email (formulaire page de vente).
 * Upsert sur email, rattache le visitor_id pour relier les events
 * anonymes du funnel, et journalise lead_success.
 */
export async function POST(req: NextRequest) {
  const db = getDb();
  if (!db) {
    return NextResponse.json(
      { error: 'Base non configurée' },
      { status: 503 },
    );
  }

  const body = await req.json().catch(() => null);
  const email =
    typeof body?.email === 'string' ? body.email.trim().toLowerCase() : null;
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Email invalide' }, { status: 400 });
  }

  const visitorId =
    typeof body.visitorId === 'string' ? body.visitorId : null;
  const utm = body.utm && typeof body.utm === 'object' ? body.utm : {};

  try {
    await db`
      insert into leads (email, visitor_id, utm)
      values (${email}, ${visitorId}, ${JSON.stringify(utm)})
      on conflict (email) do update
      set visitor_id = coalesce(leads.visitor_id, excluded.visitor_id),
          utm = case when leads.utm = '{}'::jsonb then excluded.utm else leads.utm end
    `;
    await db`
      insert into events (visitor_id, type, meta, utm)
      values (
        ${visitorId},
        'lead_success',
        ${JSON.stringify({ email, source: 'sales_page' })},
        ${JSON.stringify(utm)}
      )
    `;
  } catch (error) {
    console.error('[leads] insert failed', error);
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
