import type { Metadata } from 'next';
import { DM_Mono, Manrope } from 'next/font/google';
import CookieConsent from '@/components/CookieConsent';
import Tracking from '@/components/Tracking';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'AI Viral School | Turn Tech Into Trust',
    template: '%s — AI Viral School',
  },
  description:
    'AI Viral School creates premium AI-assisted explainer videos for fintech and B2B SaaS teams. Turn complex software into clear, high-converting video in 7 days.',
  openGraph: {
    siteName: 'AI Viral School',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmMono.variable}`}>
      <body>
        {children}
        <Tracking />
        <CookieConsent />
      </body>
    </html>
  );
}
