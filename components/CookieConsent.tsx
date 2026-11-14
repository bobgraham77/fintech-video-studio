'use client';

import { useSyncExternalStore } from 'react';
import {
  CONSENT_EVENT,
  type Consent,
  getConsent,
  setConsent,
} from '@/lib/consent';

function subscribe(onChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onChange);
  window.addEventListener('storage', onChange);
  return () => {
    window.removeEventListener(CONSENT_EVENT, onChange);
    window.removeEventListener('storage', onChange);
  };
}

/**
 * Bandeau de consentement cookies (CNIL/RGPD).
 * Refuser est aussi simple qu'accepter ; le choix est stocké en localStorage
 * et notifie Tracking via un event pour charger les pixels à la volée.
 */
export default function CookieConsent() {
  const consent = useSyncExternalStore(subscribe, getConsent, () => null);

  if (consent !== null) return null;

  function choose(c: Consent) {
    setConsent(c);
  }

  return (
    <div className="consent-banner">
      <div className="consent-card">
        <p>
          We use cookies to measure audience and campaign effectiveness. You
          can accept or refuse — your choice can be changed anytime by clearing
          your browser storage.
        </p>
        <div className="consent-actions">
          <button
            type="button"
            className="button button-outline"
            onClick={() => choose('rejected')}
          >
            Refuse
          </button>
          <button
            type="button"
            className="button button-primary"
            onClick={() => choose('accepted')}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
