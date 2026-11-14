import type { Metadata } from 'next';
import Link from 'next/link';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { getArticles } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'Articles',
  description:
    'Guides and insights on explainer videos, conversion and product storytelling for fintech and B2B SaaS teams.',
};

function formatDate(date: string) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return null;
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(parsed);
}

export default function ArticlesPage() {
  const articles = getArticles();

  return (
    <>
      <SiteHeader
        nav={[{ href: '/', label: 'Home' }]}
        cta={{ href: '/#get-started', label: 'Get started' }}
      />
      <main className="articles-page section-shell">
        <p className="eyebrow">Insights</p>
        <h1>Articles</h1>
        <p>On video, conversion and explaining complex products.</p>

        {articles.length === 0 ? (
          <p>The first articles are coming soon.</p>
        ) : (
          <ul className="article-grid">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link
                  href={`/articles/${article.slug}`}
                  className="article-card"
                >
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                  <time>{formatDate(article.date)}</time>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
      <SiteFooter />
    </>
  );
}
