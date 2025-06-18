import { getAllPostSlugs, getPostData } from '@/lib/markdown';
import ArticleDisplay from '@/components/ArticleDisplay';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';
import type { Post } from '@/types';

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const paths = await getAllPostSlugs();
  return paths;
}

export async function generateMetadata(
  { params }: ArticlePageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPostData(params.slug);

  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }
  
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Finance Flash Team'],
      tags: post.tags,
      images: post.image ? [
        {
          url: `${process.env.NEXT_PUBLIC_BASE_URL || ''}${post.image}`, // Ensure NEXT_PUBLIC_BASE_URL is set
          width: 1200, // Example width
          height: 630, // Example height
          alt: post.title,
        },
        ...previousImages,
      ] : previousImages,
    },
    // twitter: { // Add Twitter card data if needed
    //   card: 'summary_large_image',
    //   title: post.title,
    //   description: post.description,
    //   images: post.image ? [`${process.env.NEXT_PUBLIC_BASE_URL || ''}${post.image}`] : [],
    // },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound();
  }

  return <ArticleDisplay post={post} />;
}
