import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { getArticle, getArticles } from '@/lib/articles';
import ArticleViewTracker from './tracker';

export const instant = false;

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    keywords: article.keywords,
    openGraph: {
      type: 'article',
      title: article.title,
      description: article.description,
      publishedTime: article.date,
    },
  };
}

function formatDate(date: string) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return null;
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(parsed);
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    author: { '@type': 'Organization', name: 'AI Viral School' },
  };

  return (
    <>
      <SiteHeader
        nav={[
          { href: '/', label: 'Home' },
          { href: '/articles', label: 'Articles' },
        ]}
        cta={{ href: '/#get-started', label: 'Get started' }}
      />
      <main>
        <div className="article-body section-shell">
          <Link href="/articles" className="article-back">
            ← All articles
          </Link>
          <h1>{article.title}</h1>
          <time>{formatDate(article.date)}</time>
          <article className="article-content">
            <Markdown remarkPlugins={[remarkGfm]}>{article.content}</Markdown>
          </article>
        </div>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleViewTracker slug={slug} />
    </>
  );
}
