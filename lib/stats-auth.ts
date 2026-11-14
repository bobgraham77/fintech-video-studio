import { createHash } from 'node:crypto';

export const STATS_COOKIE = 'fvs_stats';

export function statsToken() {
  return createHash('sha256')
    .update(process.env.STATS_PASSWORD ?? '')
    .digest('hex');
}
