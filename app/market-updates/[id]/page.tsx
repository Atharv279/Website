import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { TrendingUp, BarChart2, Landmark, FileText, Annoyed, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

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
    content: `The Union Budget 2025 has set a new benchmark for infrastructure development and green energy initiatives in India. Finance Minister's announcement of a ₹15 lakh crore infrastructure push has sent positive signals across the market.

Key Infrastructure Highlights:
• National Infrastructure Pipeline (NIP) expansion to ₹150 lakh crore
• Dedicated Green Energy Corridor with ₹25,000 crore allocation
• Smart Cities Mission 2.0 with focus on sustainable urban development
• Enhanced focus on rural infrastructure with ₹2.5 lakh crore allocation

Market Impact:
The infrastructure and renewable energy sectors are expected to see significant growth in the coming quarters. Major beneficiaries include:
• Construction and engineering companies
• Renewable energy players
• Power transmission and distribution companies
• Urban development and smart city solution providers

Investment Opportunities:
1. Infrastructure Development Funds
2. Green Energy Bonds
3. Smart City Infrastructure Projects
4. Rural Development Initiatives

Market analysts predict a 15-20% growth in infrastructure-related stocks over the next 12 months, with renewable energy companies potentially seeing even higher returns.`,
    keyPoints: [
      '₹15 lakh crore infrastructure push announced',
      'New Green Energy Corridor with ₹25,000 crore allocation',
      'Smart Cities Mission 2.0 launched',
      'Rural infrastructure gets ₹2.5 lakh crore boost'
    ],
    marketData: {
      niftyInfra: '+3.2%',
      renewableIndex: '+4.5%',
      constructionIndex: '+2.8%'
    }
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
    content: `The mutual fund industry continues to witness robust growth in Systematic Investment Plan (SIP) contributions, with February 2025 data showing a record-breaking ₹20,000 crore in monthly SIP inflows. This marks a significant milestone in India's retail investment landscape.

Growth Drivers:
• Increased financial literacy among retail investors
• Stable market performance post-Budget 2025
• Enhanced digital platforms for investment
• Growing middle-class participation

Sector-wise Distribution:
1. Equity Funds: 65% of total SIP contributions
2. Hybrid Funds: 20%
3. Debt Funds: 10%
4. Others: 5%

Key Trends:
• Rising participation from Tier 2 and Tier 3 cities
• Increased adoption of digital investment platforms
• Growing preference for thematic funds
• Higher allocation to ESG-focused funds

Future Outlook:
Analysts predict SIP contributions to cross ₹25,000 crore by the end of 2025, driven by:
• Continued market stability
• Enhanced investor education initiatives
• Improved digital infrastructure
• Growing awareness of long-term wealth creation`,
    keyPoints: [
      'Record ₹20,000 crore monthly SIP contributions',
      '65% allocation to equity funds',
      'Growing participation from smaller cities',
      'Expected to cross ₹25,000 crore by year-end'
    ],
    marketData: {
      equityFunds: '+5.2%',
      hybridFunds: '+3.8%',
      debtFunds: '+2.1%'
    }
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

export default function MarketUpdateDetailPage({ params }: { params: { id: string } }) {
  const update = marketUpdatesData.find((u) => u.id === params.id);
  if (!update) return notFound();

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <Link href="/market-updates" className="inline-block mb-6">
        <Button variant="ghost" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Updates
        </Button>
      </Link>

      <Card className="mb-8">
        {update.image && (
          <div className="relative w-full h-80">
            <Image
              src={update.image}
              alt={update.title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-t-lg"
              data-ai-hint={update.aiHint}
              sizes="100vw"
            />
          </div>
        )}
        <CardHeader>
          <div className="flex items-center text-primary mb-2">
            <update.icon className="h-5 w-5 mr-2" />
            <CardTitle className="text-3xl font-headline">{update.title}</CardTitle>
          </div>
          <p className="text-sm text-muted-foreground">{update.date} - {update.category}</p>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-lg text-foreground/90 mb-6">{update.summary}</CardDescription>
          
          {update.keyPoints && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Key Highlights</h3>
              <ul className="space-y-2">
                {update.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {update.marketData && (
            <div className="mb-8 p-4 bg-muted rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Market Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(update.marketData).map(([key, value]) => (
                  <div key={key} className="p-3 bg-background rounded-md">
                    <p className="text-sm text-muted-foreground">{key.replace(/([A-Z])/g, ' $1').trim()}</p>
                    <p className="text-lg font-semibold text-primary">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {update.content && (
            <div className="prose prose-lg max-w-none">
              {update.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">{paragraph}</p>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
} 