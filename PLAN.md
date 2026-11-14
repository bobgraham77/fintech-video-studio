# Plan — fintech-video-studio

## Objectif

Site de vente (accueil + VSL) adossé à du trafic payant, avec :
- tracking complet du comportement visiteur (funnel, UTM, funnel quotidien),
- section articles SEO alimentée à terme par un agent rédacteur,
- base de données et dashboard propres au projet (Neon Postgres),
- capture de leads (formulaire → Neon, emailing Resend branché plus tard).

Stack validée : **Next.js App Router + Neon Postgres + articles Markdown**.
Réutilisation : code tracking et articles copiés/adaptés depuis `proprio-malin`,
schéma events inspiré de `CloserAI-v2` (`lead_events`, ALLOWED types).

---

## Architecture cible

```
fintech-video-studio/
├── app/
│   ├── page.tsx                 # page de vente (accueil + VSL) — design actuel repris
│   ├── layout.tsx               # Tracking, consent banner, metadata globales
│   ├── video-analyze/           # page video_analyze existante (si conservée)
│   ├── articles/
│   │   ├── page.tsx             # index des articles
│   │   └── [slug]/page.tsx      # article : metadata dynamique + JSON-LD Article
│   ├── stats/page.tsx           # dashboard quotidien (protégé par mot de passe)
│   └── api/
│       ├── track/route.ts       # POST events → Neon (sendBeacon côté client)
│       └── leads/route.ts       # POST formulaire → table leads
├── content/articles/*.md        # articles (frontmatter: title, description, date, keywords)
├── lib/
│   ├── tracking/                # porté depuis proprio-malin
│   │   ├── trackEvent.ts        # dispatch → sendBeacon /api/track (+ gtag/fbq si configurés)
│   │   ├── visitor.ts           # visitor_id first-party (localStorage, post-consentement)
│   │   ├── session.ts           # id de visite éphémère (sans consentement, conforme CNIL)
│   │   └── utm.ts               # capture + persistance utm/fbclid/gclid (sessionStorage)
│   ├── consent.ts               # bannière consentement RGPD
│   ├── articles.ts              # gray-matter → liste + lecture article
│   └── db.ts                    # client Neon (@neondatabase/serverless)
├── components/Tracking.tsx      # charge GA4/Meta Pixel post-consentement + trackers internes
├── app/sitemap.ts               # pages + articles
└── scripts/generate-article.ts  # futur agent rédacteur (LLM → .md)
```

## Base de données (Neon)

```sql
create table events (
  id bigserial primary key,
  visitor_id text,
  session_id text,
  type text not null,
  meta jsonb,
  utm jsonb,
  created_at timestamptz default now()
);
create index on events (created_at);
create index on events (visitor_id);
create index on events (type);

create table leads (
  id bigserial primary key,
  email text not null,
  visitor_id text,
  utm jsonb,
  meta jsonb,
  created_at timestamptz default now()
);
create unique index on leads (email);
```

## Events trackés (MVP)

`page_view`, `vsl_play`, `vsl_progress` (25/50/75/100%), `scroll_depth`,
`cta_click`, `lead_submit`, `lead_success`, `lead_error`, `article_view`,
`article_scroll` (profondeur de lecture).

Rattachement : `visitor_id` persistant (consentement) ou `session_id`
éphémère (sans consentement). Les events anonymes sont rattachés au lead
au moment du submit via `visitor_id`.

## Dashboard /stats (MVP)

- Compteurs du jour + hier (visiteurs uniques, page_views, vsl_play, cta_click, leads)
- Courbe 14/30 jours (events par jour)
- Funnel : visites → VSL play → progression VSL → CTA → lead, avec taux
- Répartition par utm_source / utm_medium / utm_campaign
- Accès : mot de passe simple en env (`STATS_PASSWORD`), cookie signé

## Étapes

1. **Init Next.js** — create-next-app (App Router, TS, Tailwind non requis :
   on garde `styles.css` existant dans globals), portage fidèle de
   `index.html`, `script.js`, `assets/`, `video_analyze.html`.
2. **Neon** — projet Neon via MCP, `DATABASE_URL`, migration des tables.
3. **Tracking** — portage `lib/tracking/*`, `consent`, `Tracking.tsx`,
   `/api/track`. Variables GA4 / Meta Pixel optionnelles.
4. **Leads** — `/api/leads` : insert + rattachement visitor_id + event
   `lead_success`. Resend branché plus tard.
5. **Articles** — `content/articles`, `lib/articles.ts`, pages index +
   `[slug]`, metadata/OG, JSON-LD, `sitemap.ts`, `robots.txt`.
6. **Dashboard /stats**.
7. **Déploiement** — Vercel + variables d'env + domaine.

## Plus tard (hors MVP)

- Agent rédacteur : `scripts/generate-article.ts` (LLM → .md avec
  frontmatter SEO, ciblage mot-clé), cron ou run manuel.
- Emailing Resend (séquence post-lead).
- A/B testing pages, pixels additionnels (TikTok, LinkedIn).
- Enrichissement dashboard : coût pub, sessions détaillées, rétention.
```
