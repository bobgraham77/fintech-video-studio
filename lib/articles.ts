import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const articlesDir = path.join(process.cwd(), 'content', 'articles');

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  keywords?: string[];
};

export type Article = ArticleMeta & { content: string };

type Frontmatter = {
  title?: string;
  description?: string;
  date?: string;
  keywords?: string[] | string;
};

function parseArticleFile(filename: string) {
  const raw = fs.readFileSync(path.join(articlesDir, filename), 'utf8');
  const { data, content } = matter(raw);
  const frontmatter = data as Frontmatter;
  const keywords = Array.isArray(frontmatter.keywords)
    ? frontmatter.keywords
    : typeof frontmatter.keywords === 'string'
      ? frontmatter.keywords.split(',').map((k) => k.trim())
      : undefined;

  return {
    slug: filename.replace(/\.md$/, ''),
    title: frontmatter.title ?? '',
    description: frontmatter.description ?? '',
    date: frontmatter.date ?? '',
    keywords,
    content,
  };
}

export function getArticles(): ArticleMeta[] {
  if (!fs.existsSync(articlesDir)) return [];

  return fs
    .readdirSync(articlesDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const { slug, title, description, date, keywords } =
        parseArticleFile(file);
      return { slug, title, description, date, keywords };
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getArticle(slug: string): Article | null {
  const filename = `${slug}.md`;
  if (!fs.existsSync(path.join(articlesDir, filename))) return null;

  return parseArticleFile(filename);
}
