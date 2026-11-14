'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';
import {
  useEffect,
  useRef,
  useSyncExternalStore,
} from 'react';
import { CONSENT_EVENT, type Consent, getConsent } from '@/lib/consent';
import { trackInternal } from '@/lib/tracking/trackEvent';
import { collectUtmFromUrl, persistUtm } from '@/lib/tracking/utm';

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

/**
 * Charge GA4 et Meta Pixel uniquement après consentement explicite (CNIL/RGPD).
 * Le tracking interne (/api/track) reste toujours actif : anonyme tant que
 * le consentement n'est pas donné (id de visite éphémère, mémoire seule).
 */
function subscribeConsent(onChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onChange);
  return () => window.removeEventListener(CONSENT_EVENT, onChange);
}

export default function Tracking() {
  const consent = useSyncExternalStore<Consent | null>(
    subscribeConsent,
    getConsent,
    () => null,
  );

  return (
    <>
      <InternalPageTracker />
      <ScrollDepthTracker />
      {consent !== 'accepted' ? null : (
        <>
          <RouteChangeTracker />
          {GA4_ID && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
                strategy="lazyOnload"
              />
              <Script id="ga4-init" strategy="lazyOnload">
                {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_ID}', { send_page_view: true });`}
              </Script>
            </>
          )}
          {META_PIXEL_ID && (
            <Script id="meta-pixel" strategy="lazyOnload">
              {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
            </Script>
          )}
        </>
      )}
    </>
  );
}

/**
 * page_view interne, tiré sur chaque route y compris la première.
 * Persiste aussi les UTM d'arrivée (sessionStorage) pour l'attribution.
 */
function InternalPageTracker() {
  const pathname = usePathname();

  useEffect(() => {
    persistUtm(collectUtmFromUrl());
    trackInternal('page_view', { path: pathname });
  }, [pathname]);

  return null;
}

/**
 * Profondeur de scroll (25/50/75/100%), une fois par palier et par page.
 */
function ScrollDepthTracker() {
  const pathname = usePathname();
  const fired = useRef(new Set<number>());

  useEffect(() => {
    fired.current = new Set();
    const thresholds = [25, 50, 75, 100];

    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const pct = Math.round((window.scrollY / max) * 100);
      for (const t of thresholds) {
        if (pct >= t && !fired.current.has(t)) {
          fired.current.add(t);
          trackInternal('scroll_depth', { depth: t, path: pathname });
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  return null;
}

/**
 * Navigation SPA : les PageView des pixels tiers doivent être tirés
 * manuellement. Le premier rendu est ignoré car l'init envoie déjà
 * le PageView initial.
 */
function RouteChangeTracker() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.fbq?.('track', 'PageView');
    if (GA4_ID) {
      window.gtag?.('config', GA4_ID, { page_path: pathname });
    }
  }, [pathname]);

  return null;
}
