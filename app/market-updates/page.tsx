import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { TrendingUp, BarChart2, Landmark, FileText, Annoyed } from 'lucide-react';
import AdSlot from '@/components/AdSlot';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Market Updates (Dec 2024 - Jun 2025)',
  description: 'Stay informed with the latest market updates, including SIP trends, mutual fund insights, Nifty/Bank Nifty performance, Budget 2025 implications, and RBI announcements from Finance Flash.',
};

const marketUpdatesData = [
  {
    id: '1',
    title: 'Budget 2025: Focus on Infra & Green Energy - Market Impact',
    date: 'February 1, 2025',
    summary: 'The Union Budget 2025, presented today, laid significant emphasis on infrastructure development and renewable energy, with analysts predicting a positive long-term impact on related sectors. Capital expenditure outlays have seen a notable increase.',
    category: 'Budget 2025',
    icon: FileText,
    image: '/images/market-outlook.jpg',
    aiHint: 'budget analysis',
  },
  {
    id: '2',
    title: 'SIP Investments Show Sustained Growth Post-Budget 2025',
    date: 'March 15, 2025',
    summary: 'AMFI data for February 2025 shows SIP contributions hitting a new high of ₹20,000 crore, reflecting continued retail investor confidence following positive cues from the Union Budget and stable market performance.',
    category: 'Mutual Funds',
    icon: TrendingUp,
    image: '/images/mutual-funds.jpg',
    aiHint: 'growth chart',
  },
  {
    id: '3',
    title: 'Nifty Hits New Highs in Q1 2025; Bank Nifty Shows Strength',
    date: 'April 5, 2025',
    summary: 'The Nifty 50 index crossed the 25,000 mark in late March 2025, driven by strong domestic inflows and positive global cues. Bank Nifty also demonstrated robust performance, supported by healthy credit growth figures.',
    category: 'Stock Market',
    icon: BarChart2,
    image: '/images/market-outlook.jpg',
    aiHint: 'market index',
  },
  {
    id: '4',
    title: 'RBI Holds Repo Rate Steady in April 2025 Monetary Policy',
    date: 'April 10, 2025',
    summary: 'The Reserve Bank of India\'s Monetary Policy Committee (MPC) unanimously decided to keep the repo rate unchanged at 6.5% for the seventh consecutive time, citing persistent inflationary concerns despite robust economic growth.',
    category: 'RBI Announcements',
    icon: Landmark,
    image: '/images/renewable-energy.jpg',
    aiHint: 'bank meeting',
  },
  {
    id: '5',
    title: 'Mutual Fund Returns (May 2025): Thematic Funds Shine',
    date: 'June 5, 2025',
    summary: 'Data for mutual fund performance up to May 2025 reveals that thematic funds, particularly those focused on manufacturing and infrastructure, have delivered strong returns over the past year. Diversified equity funds also posted healthy gains.',
    category: 'Mutual Funds',
    icon: Annoyed, // Note: Lucide 'Annoyed' might be placeholder, consider more relevant like 'BarChartBig' or 'TrendingUp'
    image: '/images/mutual-funds.jpg',
    aiHint: 'fund report',
  },
];

export default function MarketUpdatesPage() {
  return (
    <div className="space-y-10">
      <header className="text-center md:text-left">
        <h1 className="font-headline text-4xl font-bold text-primary mb-4">Market Updates (Dec 2024 - Jun 2025)</h1>
        <p className="text-lg text-muted-foreground">
          Key financial developments, trends, and announcements from late 2024 to mid-2025.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {marketUpdatesData.map((update, index) => (
          <Link key={update.id} href={`/market-updates/${update.id}`} className="block">
            <Card className="flex flex-col animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
              {update.image && (
                <div className="relative w-full h-40">
                  <Image
                    src={update.image}
                    alt={update.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-t-lg"
                    data-ai-hint={update.aiHint}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-center text-primary mb-2">
                  <update.icon className="h-5 w-5 mr-2" />
                  <CardTitle className="text-xl font-headline">{update.title}</CardTitle>
                </div>
                <p className="text-xs text-muted-foreground">{update.date} - {update.category}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{update.summary}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      
      <section className="py-6">
        <AdSlot id="market-updates-banner" type="banner" className="w-full" />
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">Stock Market Outlook (Mid-2025)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/90">
              As of June 2025, the Indian stock market maintains a cautiously optimistic outlook. While global macroeconomic factors present some headwinds, strong domestic demand, positive corporate earnings, and benefits from Budget 2025 initiatives are expected to provide support. Investors are advised to focus on quality stocks with robust fundamentals and maintain a diversified portfolio. Sector-specific opportunities may arise from ongoing government reforms and infrastructure projects.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
