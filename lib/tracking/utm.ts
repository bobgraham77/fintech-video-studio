'use client';

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'matchtype',
  'device',
  'fbclid',
  'gclid',
];
const STORAGE_KEY = 'fvs_utm';

/**
 * Lit les UTM/fbclid/gclid depuis l'URL courante.
 */
export function collectUtmFromUrl(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const params = new URLSearchParams(window.location.search);
  const collected: Record<string, string> = {};
  params.forEach((value, key) => {
    if (UTM_KEYS.includes(key)) collected[key] = value;
  });
  return collected;
}

/**
 * Persiste les UTM de la première visite (sessionStorage).
 */
export function persistUtm(utm: Record<string, string>) {
  if (typeof window === 'undefined' || Object.keys(utm).length === 0) return;
  try {
    const existing = sessionStorage.getItem(STORAGE_KEY);
    if (!existing) sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utm));
  } catch {
    // sessionStorage indisponible — non bloquant
  }
}

/**
 * UTM courants = merge URL sur persistés, clé par clé.
 */
export function getUtm(): Record<string, string> {
  let stored: Record<string, string> = {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    stored = raw ? JSON.parse(raw) : {};
  } catch {
    // sessionStorage indisponible — non bloquant
  }
  return { ...stored, ...collectUtmFromUrl() };
}
