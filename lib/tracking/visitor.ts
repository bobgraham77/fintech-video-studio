const VISITOR_KEY = 'fvs_visitor_id';

/**
 * Identifiant visiteur first-party (localStorage) — relie les events funnel
 * anonymes au lead une fois l'email capturé.
 * Ne doit être généré/lu qu'après consentement cookies.
 */
export function getVisitorId(): string | null {
  if (typeof window === 'undefined') return null;
  let id = window.localStorage.getItem(VISITOR_KEY);
  if (!id) {
    id = crypto.randomUUID();
    window.localStorage.setItem(VISITOR_KEY, id);
  }
  return id;
}
