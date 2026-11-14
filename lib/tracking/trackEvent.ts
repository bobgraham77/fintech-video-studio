'use client';

import { getConsent } from '@/lib/consent';
import { getEphemeralSessionId } from '@/lib/tracking/session';
import { getUtm } from '@/lib/tracking/utm';
import { getVisitorId } from '@/lib/tracking/visitor';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/**
 * Dispatche un event vers le tracking interne (/api/track → Neon).
 * Avec consentement : visitor_id persistant ; sans consentement : id de
 * visite éphémère (mémoire seule) → étapes d'une même visite reliées,
 * aucune persistance inter-sessions.
 */
export function trackInternal(
  name: string,
  params: Record<string, unknown> = {},
  opts?: { email?: string },
) {
  if (typeof window === 'undefined') return;
  const payload: Record<string, unknown> = {
    type: name,
    meta: { ...params, path: window.location.pathname },
    utm: getUtm(),
  };
  if (getConsent() === 'accepted') {
    const vid = getVisitorId();
    if (vid) payload.visitorId = vid;
  } else {
    const sid = getEphemeralSessionId();
    if (sid) payload.sessionId = sid;
  }
  if (opts?.email) payload.email = opts.email;
  try {
    navigator.sendBeacon('/api/track', JSON.stringify(payload));
  } catch {
    // tracking interne : best-effort, jamais bloquant
  }
}

export function trackEvent(
  name: string,
  params: Record<string, unknown> = {},
  opts?: { email?: string },
) {
  if (typeof window === 'undefined') return;

  // Shim officiel gtag : si la lib n'est pas encore chargée (lazyOnload),
  // les events sont empilés dans dataLayer et envoyés à son init.
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args);
    };
  }
  window.gtag('event', name, params);

  window.fbq?.('trackCustom', name, params);

  trackInternal(name, params, opts);
}

/**
 * Event de conversion lead : standard `Lead` côté Meta Pixel,
 * `lead_success` + `generate_lead` côté GA4.
 */
export function trackLead(params: Record<string, unknown> = {}) {
  trackEvent('lead_success', params);
  window.gtag?.('event', 'generate_lead', params);
  if (typeof window !== 'undefined') {
    window.fbq?.('track', 'Lead', params);
  }
}
