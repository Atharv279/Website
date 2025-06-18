import { MetadataRoute } from 'next';
import { getSortedPostsData, getAllLegalPageSlugs } from '@/lib/markdown';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages = [
    '', // Homepage
    '/articles',
    '/market-updates', 
  ].map(route => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));

  const posts = await getSortedPostsData();
  const articlePages = posts.map(post => ({
    url: `${BASE_URL}/articles/${post.slug}`,
    lastModified: new Date(post.date).toISOString(), // Use article date if available
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const legalSlugs = await getAllLegalPageSlugs();
  const legalPages = legalSlugs.map(slugInfo => ({
    url: `${BASE_URL}/${slugInfo.params.page}`,
    lastModified: new Date().toISOString(), // Or fetch lastModified from markdown if available
    changeFrequency: 'yearly',
    priority: 0.5,
  }));

  return [...staticPages, ...articlePages, ...legalPages] as MetadataRoute.Sitemap;
}
