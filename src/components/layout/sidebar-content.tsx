import type { FC } from 'react';
import Link from 'next/link';
import AdSlot from '@/components/ads/ad-slot';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const SidebarContent: FC = () => {
  const latestArticles = [
    { id: '1', title: 'Top 5 Investment Strategies for Q3', href: '/articles/top-5-investments' },
    { id: '2', title: 'Understanding Cryptocurrency Volatility', href: '/articles/crypto-volatility' },
    { id: '3', title: 'Real Estate Market Trends in 2024', href: '/articles/real-estate-2024' },
    { id: '4', title: 'Retirement Planning: A Comprehensive Guide', href: '/articles/retirement-planning' },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-primary font-headline">Latest Articles</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {latestArticles.map((article, index) => (
              <li key={article.id}>
                <Link href={article.href} className="block hover:text-primary transition-colors text-sm">
                  {article.title}
                </Link>
                {index < latestArticles.length - 1 && <Separator className="my-2 bg-border" />}
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl text-primary font-headline">Advertisement</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <AdSlot fullWidth height={150} label="Wide Sidebar Banner" />
        </CardContent>
      </Card>
    </div>
  );
};

export default SidebarContent;
