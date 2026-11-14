# Changelog

## 2026-11-14 — MVP

### Stack
- Migration du site statique (HTML/CSS/JS) vers **Next.js 16** (App Router, TypeScript)
- Page de vente `/` et page `/video-analyze` portées à l'identique
- Base **Neon Postgres** dédiée (projet `fintech-video-studio`, eu-central-1) :
  tables `events` et `leads` (`db/schema.sql`)

### Tracking (adapté de proprio-malin)
- `lib/tracking/` : `visitor_id` first-party post-consentement, `session_id`
  éphémère sans consentement (CNIL), persistance UTM/fbclid/gclid
- `components/Tracking.tsx` : `page_view` interne, `scroll_depth` (25/50/75/100),
  pixels GA4 + Meta chargés uniquement après consentement
- `POST /api/track` → Neon. Events : `page_view`, `scroll_depth`, `vsl_play`,
  `vsl_progress`, `cta_click`, `lead_submit`, `lead_success`, `lead_error`,
  `article_view`, `scan_submit`
- Bandeau consentement RGPD (`components/CookieConsent.tsx`)

### Leads
- `POST /api/leads` : upsert email + rattachement `visitor_id` + event
  `lead_success`. Formulaire intégré à la page de vente (`components/LeadForm.tsx`)
- VSL : tracking play + progression 25/50/75/100 (`components/VslVideo.tsx`)

### Articles SEO (markdown comme proprio-malin)
- `content/articles/*.md` + `lib/articles.ts` (gray-matter)
- Pages `/articles` et `/articles/[slug]` : metadata dynamique, keywords,
  OpenGraph type article, JSON-LD `Article`, `generateStaticParams`
- `app/sitemap.ts` et `app/robots.ts` (`/stats` et `/api/` disallow)

### Dashboard
- `/stats` protégé par mot de passe (`STATS_PASSWORD`, cookie httpOnly 30j) :
  compteurs jour vs hier, courbe pages vues 7/14/30j, funnel
  visiteurs → scroll 50% → VSL play → VSL 50% → submit → lead,
  répartition UTM (visiteurs + leads par source/medium/campagne),
  events par type

### Config
- `.env.example` : `DATABASE_URL`, `STATS_PASSWORD`, `NEXT_PUBLIC_BASE_URL`,
  `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_META_PIXEL_ID`
- `PLAN.md` : architecture et roadmap (Resend, agent rédacteur, A/B testing)
