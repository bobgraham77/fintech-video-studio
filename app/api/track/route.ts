import { type NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

/**
 * POST /api/track — journalise un event de funnel dans Neon.
 * Client : sendBeacon { type, meta?, utm?, visitorId?, sessionId?, email? }.
 * Sans DATABASE_URL configurée : no-op (204), jamais bloquant côté client.
 */
const ALLOWED = new Set([
  'page_view',
  'scroll_depth',
  'vsl_play',
  'vsl_progress',
  'cta_click',
  'lead_submit',
  'lead_success',
  'lead_error',
  'article_view',
  'scan_submit',
]);

export async function POST(req: NextRequest) {
  const db = getDb();
  if (!db) return new NextResponse(null, { status: 204 });

  const body = await req.json().catch(() => null);
  if (!body || typeof body.type !== 'string' || !ALLOWED.has(body.type)) {
    return new NextResponse(null, { status: 204 });
  }

  const visitorId =
    typeof body.visitorId === 'string' ? body.visitorId : null;
  const sessionId =
    typeof body.sessionId === 'string' ? body.sessionId : null;
  const email =
    typeof body.email === 'string' ? body.email.trim().toLowerCase() : null;
  const meta = body.meta && typeof body.meta === 'object' ? body.meta : {};
  const utm = body.utm && typeof body.utm === 'object' ? body.utm : {};

  try {
    await db`
      insert into events (visitor_id, session_id, type, meta, utm)
      values (
        ${visitorId},
        ${sessionId},
        ${body.type},
        ${JSON.stringify({ ...meta, ...(email ? { email } : {}) })},
        ${JSON.stringify(utm)}
      )
    `;
  } catch (error) {
    console.error('[track] insert failed', error);
  }

  return new NextResponse(null, { status: 204 });
}
