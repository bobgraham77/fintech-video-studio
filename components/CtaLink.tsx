'use client';

import { trackInternal } from '@/lib/tracking/trackEvent';

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
  location: string;
};

export default function CtaLink({ href, children, className, location }: Props) {
  return (
    <a
      href={href}
      className={className}
      onClick={() => trackInternal('cta_click', { location, href })}
    >
      {children}
    </a>
  );
}
