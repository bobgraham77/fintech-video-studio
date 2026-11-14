'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { STATS_COOKIE, statsToken } from '@/lib/stats-auth';

export async function login(formData: FormData) {
  const password = String(formData.get('password') ?? '');
  if (!process.env.STATS_PASSWORD || password !== process.env.STATS_PASSWORD) {
    redirect('/stats?error=1');
  }
  const store = await cookies();
  store.set(STATS_COOKIE, statsToken(), {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30,
    path: '/stats',
  });
  redirect('/stats');
}
