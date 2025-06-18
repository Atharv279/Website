
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, UserCircle, Clock } from 'lucide-react';
import type { Post } from '@/types';
import { format, parseISO } from 'date-fns';

interface ArticleCardProps {
  post: Omit<Post, 'contentHtml' | 'readingTime'>; // Slug is now part of this
}

export default function ArticleCard({ post }: ArticleCardProps) {
  const formattedDate = post.date ? format(parseISO(post.date), 'MMMM d, yyyy') : 'N/A';

  return (
    <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out animate-fade-in">
      <Link href={`/articles/${post.slug}`} passHref className="block">
        {post.image && (
          <div className="relative w-full h-48">
            <Image
              src={post.image}
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-t-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={post.aiHint || 'finance article'}
            />
          </div>
        )}
      </Link>
      <CardHeader className="p-4">
        {post.category && <Badge variant="outline" className="mb-2 w-fit">{post.category}</Badge>}
        <Link href={`/articles/${post.slug}`} passHref>
          <CardTitle className="font-headline text-xl hover:text-primary transition-colors">{post.title}</CardTitle>
        </Link>
        <CardDescription className="mt-2 text-sm text-muted-foreground line-clamp-3">{post.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        {/* Additional content can go here if needed */}
      </CardContent>
      <CardFooter className="p-4 border-t text-xs text-muted-foreground flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
        <div className="flex items-center">
          <UserCircle className="h-4 w-4 mr-1.5" />
          <span>{post.author || 'Finance Flash Team'}</span>
        </div>
        <div className="flex items-center">
          <CalendarDays className="h-4 w-4 mr-1.5" />
          <time dateTime={post.date}>{formattedDate}</time>
        </div>
      </CardFooter>
    </Card>
  );
}
