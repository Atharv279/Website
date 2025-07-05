import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import AdSlot from '@/components/AdSlot';
import type { Post } from '@/types';
import { CalendarDays, UserCircle, Clock, Tag } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

interface ArticleDisplayProps {
  post: Post;
}

export default function ArticleDisplay({ post }: ArticleDisplayProps) {
  const formattedDate = post.date ? format(parseISO(post.date), 'MMMM d, yyyy') : 'N/A';

  return (
    <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl dark:prose-invert mx-auto max-w-4xl animate-fade-in">
      {post.image && (
        <div className="relative w-full h-64 md:h-96 mb-8 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            style={{ objectFit: 'cover' }}
            priority // Prioritize loading for LCP
            sizes="(max-width: 768px) 100vw, 896px" // max-w-4xl approx
            data-ai-hint={post.aiHint || 'article banner'}
          />
        </div>
      )}
      <header className="mb-8 text-center">
        {post.category && (
          <Link href={`/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`} passHref>
             <Badge variant="secondary" className="mb-2 text-sm hover:bg-primary/20 transition-colors">{post.category}</Badge>
          </Link>
        )}
        <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">{post.title}</h1>
        <div className="flex flex-wrap justify-center items-center space-x-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center">
            <UserCircle className="h-4 w-4 mr-1.5" />
            <span>{post.author || 'Finance Flash Team'}</span>
          </div>
          <div className="flex items-center">
            <CalendarDays className="h-4 w-4 mr-1.5" />
            <time dateTime={post.date}>{formattedDate}</time>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1.5" />
            <span>{post.readingTime}</span>
          </div>
        </div>
      </header>

      <div
        className="prose-p:text-foreground/90 prose-headings:text-primary prose-a:text-accent prose-strong:text-foreground prose-blockquote:border-accent prose-code:text-accent-foreground prose-code:bg-accent/10 prose-code:p-1 prose-code:rounded-sm"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      {post.tags && post.tags.length > 0 && (
        <div className="mt-8 pt-4 border-t">
          <h3 className="text-sm font-semibold text-muted-foreground mb-2 flex items-center"><Tag className="w-4 h-4 mr-2"/>Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link key={tag} href={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`} passHref>
                <Badge variant="outline" className="hover:bg-accent/20 transition-colors">{tag}</Badge>
              </Link>
            ))}
          </div>
        </div>
      )}

      <div className="my-12">
        <AdSlot id={`in-article-ad-${post.slug}`} type="in-article" />
      </div>

      {/* Optional: Author bio or related articles section */}
    </article>
  );
}
