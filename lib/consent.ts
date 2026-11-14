export const CONSENT_KEY = 'fvs-consent';
export const CONSENT_EVENT = 'fvs-consent-changed';

export type Consent = 'accepted' | 'rejected';

export function getConsent(): Consent | null {
  if (typeof window === 'undefined') return null;
  const value = window.localStorage.getItem(CONSENT_KEY);
  return value === 'accepted' || value === 'rejected' ? value : null;
}

export function setConsent(consent: Consent) {
  window.localStorage.setItem(CONSENT_KEY, consent);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: consent }));
}
