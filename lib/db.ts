import { neon } from '@neondatabase/serverless';

/**
 * Client Neon (HTTP, serverless). Nécessite DATABASE_URL.
 * Retourne null si non configuré → les endpoints dégradent en no-op.
 */
export function getDb() {
  const url = process.env.DATABASE_URL;
  if (!url) return null;
  return neon(url);
}
