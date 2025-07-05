import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import type { Post, LegalPage } from '../../types';

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
      try {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = await fs.readFile(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        // Validate required fields
        if (!matterResult.data.title || !matterResult.data.date) {
          console.warn(`Skipping ${fileName}: Missing required fields (title or date)`);
          return null;
        }

        // Ensure all fields are strings
        const title = String(matterResult.data.title);
        const date = String(matterResult.data.date);
        const author = matterResult.data.author ? String(matterResult.data.author) : 'Finance Flash Team';
        const description = matterResult.data.description ? String(matterResult.data.description) : '';
        const category = matterResult.data.category ? String(matterResult.data.category) : 'Uncategorized';
        const tags = Array.isArray(matterResult.data.tags) ? matterResult.data.tags.map(String) : [];
        const image = matterResult.data.image ? String(matterResult.data.image) : undefined;
        const aiHint = matterResult.data.aiHint ? String(matterResult.data.aiHint) : undefined;

        return {
          slug,
          title,
          date,
          author,
          description,
          category,
          tags,
          image,
          aiHint,
        } as Omit<Post, 'contentHtml' | 'readingTime' | 'slug'>;
      } catch (error) {
        console.error(`Error processing ${fileName}:`, error);
        return null;
      }
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
        console.warn(`Skipping ${slug}: Missing required fields (title or date)`);
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
      title: String(matterResult.data.title),
      date: String(matterResult.data.date),
      author: matterResult.data.author ? String(matterResult.data.author) : 'Finance Flash Team',
      description: matterResult.data.description ? String(matterResult.data.description) : '',
      category: matterResult.data.category ? String(matterResult.data.category) : 'Uncategorized',
      tags: Array.isArray(matterResult.data.tags) ? matterResult.data.tags.map(String) : [],
      image: matterResult.data.image ? String(matterResult.data.image) : undefined,
      aiHint: matterResult.data.aiHint ? String(matterResult.data.aiHint) : undefined,
    };
  } catch (error) {
    console.error(`Error processing post ${slug}:`, error);
    return null; 
  }
}


export async function getLegalPageData(slug: string): Promise<LegalPage | null> {
  const fullPath = path.join(legalDirectory, `${slug}.md`);
  try {
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    if (!matterResult.data.title) {
        console.warn(`Skipping legal page ${slug}: Missing title`);
        return null;
    }

    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();

    return {
      slug,
      title: String(matterResult.data.title),
      contentHtml,
    };
  } catch (error) {
    console.error(`Error processing legal page ${slug}:`, error);
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
