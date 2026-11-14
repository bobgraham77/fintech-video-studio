import type { MetadataRoute } from 'next';
import { getArticles } from '@/lib/articles';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  const articlePaths: MetadataRoute.Sitemap = getArticles().map((article) => ({
    url: new URL(`/articles/${article.slug}`, baseUrl).toString(),
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: new URL('/video-analyze', baseUrl).toString(),
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: new URL('/articles', baseUrl).toString(),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    ...articlePaths,
  ];
}
