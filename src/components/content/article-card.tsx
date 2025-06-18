import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  title: string;
  summary: string;
  imageUrl?: string;
  imageHint?: string; 
  articleUrl: string;
  category?: string;
  date?: string;
}

const ArticleCard: FC<ArticleCardProps> = ({ title, summary, imageUrl, imageHint, articleUrl, category, date }) => {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {imageUrl && (
        <div className="relative w-full h-48 sm:h-56">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            data-ai-hint={imageHint || "finance business"}
          />
        </div>
      )}
      <CardHeader>
        {category && date && (
          <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-1">
            <span>{category.toUpperCase()}</span>
            <span>&bull;</span>
            <span>{date}</span>
          </div>
        )}
        <CardTitle className="text-2xl font-headline text-primary leading-tight">
          <Link href={articleUrl} className="hover:underline">
            {title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/80 leading-relaxed">
          {summary}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild variant="link" className="text-primary p-0 h-auto">
          <Link href={articleUrl}>
            Read More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
