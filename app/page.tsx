import { getSortedPostsData } from '@/lib/markdown';
import ArticleCard from '@/components/ArticleCard';
import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { TrendingUp, Building, LineChart, Newspaper, Shield } from 'lucide-react';
import CommentSection from '@/components/CommentSection';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Finance Flash. Discover the latest financial articles, market insights, and investment tips to help you navigate the world of finance.',
};

const marketHighlightsData = [
  {
    id: 'mh1',
    title: 'Market Outlook Q2 2025: Cautious Optimism',
    summary: 'Post-Budget 2025 rally shows signs of consolidation. RBI\'s stance on inflation and global cues are key factors influencing market direction in mid-2025.',
    icon: TrendingUp,
    image: '/images/market-outlook.jpg',
    aiHint: 'market graph',
  },
  {
    id: 'mh2',
    title: 'Sector Spotlight: Renewables & Infra Gain Post-Budget 2025',
    summary: 'Significant allocations and policy support in Budget 2025 have boosted investor sentiment in renewable energy and infrastructure sectors.',
    icon: Building,
    image: '/images/renewable-energy.jpg',
    aiHint: 'renewable energy',
  },
  {
    id: 'mh3',
    title: 'Mutual Fund Returns (YTD May 2025): Small & Mid-Caps Lead',
    summary: 'Broad market participation seen, with small and mid-cap funds delivering notable returns. SIP inflows continue to be robust, reflecting investor confidence.',
    icon: LineChart,
    image: '/images/mutual-funds.jpg',
    aiHint: 'fund chart',
  },
];

const featuredCategoriesData = [
  {
    id: 'fc1',
    title: 'Budget 2025 Analysis',
    description: 'Deep dives into the implications of the latest Union Budget.',
    icon: Newspaper,
    href: '/category/budget-2025',
  },
  {
    id: 'fc2',
    title: 'RBI Policy Updates',
    description: 'Understanding recent announcements from the Reserve Bank of India.',
    icon: Shield,
    href: '/category/rbi-policy',
  },
  {
    id: 'fc3',
    title: 'Stock Market Outlook 2025',
    description: 'Expert views and predictions for key market indices and sectors.',
    icon: TrendingUp,
    href: '/category/stock-market-outlook',
  },
];

export default async function HomePage() {
  const allPosts = await getSortedPostsData();
  const recentPosts = allPosts.slice(0, 6);

  return (
    <div className="space-y-16">
      <section className="text-center py-8 md:py-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-4 animate-fade-in">
          Welcome to Finance Flash
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Your daily source for trusted financial news, insightful articles, and actionable market updates for Dec 2024 - Jun 2025.
          Stay informed, invest wisely.
        </p>
      </section>

      <section>
        <h2 className="font-headline text-3xl font-semibold text-foreground mb-8 text-center md:text-left">
          Recent Articles
        </h2>
        {recentPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {recentPosts.map((post, index) => (
              <div key={post.slug} className="animate-fade-in" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
                <ArticleCard post={post} />
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground py-8">No articles found. Check back soon!</p>
        )}
         <div className="text-center mt-8">
            <Link href="/articles" passHref>
              <Button variant="outline">View All Articles</Button>
            </Link>
          </div>
      </section>

      <section className="py-6">
        <AdSlot id="home-after-articles" type="banner" className="w-full my-6" />
      </section>

      <section>
        <h2 className="font-headline text-3xl font-semibold text-foreground mb-8 text-center md:text-left">
          Market Highlights (Dec 2024 - Jun 2025)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {marketHighlightsData.map((highlight, index) => (
            <Card key={highlight.id} className="animate-fade-in" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
              <div className="relative w-full h-32">
                <Image
                  src={highlight.image}
                  alt={highlight.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-t-lg"
                  data-ai-hint={highlight.aiHint}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-primary mb-1">
                  <highlight.icon className="h-5 w-5 mr-2" />
                  <CardTitle className="text-lg font-headline">{highlight.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{highlight.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="text-center mt-8">
            <Link href="/market-updates" passHref>
              <Button variant="outline">View All Market Updates</Button>
            </Link>
          </div>
      </section>

      <section className="py-6">
        <AdSlot id="home-after-highlights" type="banner" className="w-full my-6" />
      </section>

      <section>
        <h2 className="font-headline text-3xl font-semibold text-foreground mb-8 text-center md:text-left">
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featuredCategoriesData.map((category, index) => (
             <Link key={category.id} href={category.href} passHref>
              <Card className="hover:shadow-lg transition-shadow duration-200 animate-fade-in h-full flex flex-col" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
                <CardHeader className="flex-row items-center gap-4">
                  <category.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="text-xl font-headline">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-8">
        <CommentSection />
      </section>
    </div>
  );
}
