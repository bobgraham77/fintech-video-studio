let ephemeralId: string | null = null;

/**
 * Identifiant de visite éphémère : généré une fois par chargement de page,
 * gardé en mémoire uniquement — jamais persisté (ni localStorage ni cookie).
 * Mort avec l'onglet : permet de relier les events funnel d'une même visite
 * sans consentement cookies (mesure d'audience anonyme, conforme CNIL).
 */
export function getEphemeralSessionId(): string | null {
  if (typeof window === 'undefined') return null;
  if (!ephemeralId) ephemeralId = crypto.randomUUID();
  return ephemeralId;
}
