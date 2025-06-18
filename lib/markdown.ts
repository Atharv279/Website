import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import type { Post, LegalPage } from '@/types';

const postsDirectory = path.join(process.cwd(), 'content/posts');
const legalDirectory = path.join(process.cwd(), 'content/legal');

function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200;
  const numberOfWords = text.split(/\s/g).length;
  const minutes = numberOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);
  return `${readTime} min read`;
}

export async function getSortedPostsData(): Promise<Omit<Post, 'contentHtml' | 'readingTime' | 'slug'>[]> {
  try {
    const fileNames = await fs.readdir(postsDirectory);
    const allPostsDataPromises = fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      if (!matterResult.data.title || !matterResult.data.date) {
        return null;
      }

      return {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        author: matterResult.data.author,
        description: matterResult.data.description,
        category: matterResult.data.category,
        tags: matterResult.data.tags || [],
        image: matterResult.data.image,
        aiHint: matterResult.data.aiHint, // Extract aiHint
      } as Omit<Post, 'contentHtml' | 'readingTime' | 'slug'>;
    });

    const allPostsDataWithNulls = await Promise.all(allPostsDataPromises);
    
    const validPostsData = allPostsDataWithNulls.filter(
      (post): post is Omit<Post, 'contentHtml' | 'readingTime' | 'slug'> => post !== null
    );

    return validPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
  } catch (error) {
    console.error("Error reading posts directory:", error);
    return [];
  }
}

export async function getAllPostSlugs() {
  try {
    const fileNames = await fs.readdir(postsDirectory);
    return fileNames.map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, ''),
        },
      };
    });
  } catch (error) {
    console.error("Error reading post slugs:", error);
    return [];
  }
}

export async function getPostData(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    if (!matterResult.data.title || !matterResult.data.date) {
        return null;
    }

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
    const readingTime = calculateReadingTime(matterResult.content);

    return {
      slug,
      contentHtml,
      readingTime,
      title: matterResult.data.title,
      date: matterResult.data.date,
      author: matterResult.data.author || 'Finance Flash Team',
      description: matterResult.data.description || '',
      category: matterResult.data.category || 'Uncategorized',
      tags: matterResult.data.tags || [],
      image: matterResult.data.image,
      aiHint: matterResult.data.aiHint, // Extract aiHint
    };
  } catch (error) {
    return null; 
  }
}


export async function getLegalPageData(slug: string): Promise<LegalPage | null> {
  const fullPath = path.join(legalDirectory, `${slug}.md`);
  try {
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    if (!matterResult.data.title) {
        return null;
    }

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: matterResult.data.title as string,
      contentHtml,
    };
  } catch (error) {
    return null;
  }
}

export async function getAllLegalPageSlugs() {
  try {
    const fileNames = await fs.readdir(legalDirectory);
    return fileNames.map((fileName) => {
      return {
        params: {
          page: fileName.replace(/\.md$/, ''),
        },
      };
    });
  } catch (error) {
    console.error("Error reading legal page slugs:", error);
    return [];
  }
}

export async function getAllCategories(): Promise<string[]> {
  const posts = await getSortedPostsData();
  const categories = new Set(posts.map(post => post.category).filter(Boolean) as string[]);
  return Array.from(categories);
}

export async function getAllTags(): Promise<string[]> {
  const posts = await getSortedPostsData();
  const tags = new Set(posts.flatMap(post => post.tags).filter(Boolean) as string[]);
  return Array.from(tags);
}
