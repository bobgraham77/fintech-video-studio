'use client';

import { useEffect } from 'react';
import { trackInternal } from '@/lib/tracking/trackEvent';

export default function ArticleViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    trackInternal('article_view', { slug });
  }, [slug]);
  return null;
}
