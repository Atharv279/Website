import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ArticleCard from '@/components/content/article-card';
import ChartComponent from '@/components/content/chart-component';
import AdSlot from '@/components/ads/ad-slot';
import TableComponent from '@/components/content/table-component';
import InfoCardComponent from '@/components/content/info-card-component';
import { TrendingUp, Users, DollarSign, Briefcase, Newspaper, Activity, AlertTriangle } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CommentSection from '@/components/content/comment-section'; // Updated import
import { Separator } from '@/components/ui/separator';

export default function DashboardPage() {
  const articles = [
    {
      id: '1',
      title: 'Navigating Market Volatility: A Guide for Investors',
      summary: 'Learn strategies to protect your portfolio and find opportunities during uncertain economic times.',
      imageUrl: '/20250706_0249_Financial Market Analysis_simple_compose_01jze77p48egnb7s2emry00prn.png',
      imageHint: 'stock market graph',
      articleUrl: '/articles/market-volatility',
      category: 'Investing',
      date: 'July 26, 2024',
    },
    {
      id: '2',
      title: 'The Future of Digital Currencies: Beyond Bitcoin',
      summary: 'An exploration of emerging cryptocurrencies and blockchain technologies poised to reshape finance.',
      imageUrl: '/20250706_0250_Sustainable Energy Solutions_simple_compose_01jze7akqgfb3bxkm6fwzk72vq.png',
      imageHint: 'digital currency concept',
      articleUrl: '/articles/future-of-crypto',
      category: 'Technology',
      date: 'July 25, 2024',
    },
    {
      id: '3',
      title: 'Sustainable Investing: Aligning Profit with Purpose',
      summary: 'Discover how ESG (Environmental, Social, and Governance) factors are influencing investment decisions.',
      imageUrl: '/20250706_0235_Stock Trading Dashboard_simple_compose_01jze6dgeseaq8akjewp6a6x2y.png',
      imageHint: 'green energy finance',
      articleUrl: '/articles/sustainable-investing',
      category: 'ESG',
      date: 'July 24, 2024',
    },
  ];

  const liveFeedItems = [
    "Market rally continues, Dow Jones up 200 points.",
    "Tech stocks surge on positive earnings reports.",
    "Analyst Report: New AI breakthrough expected to impact chip manufacturers.",
    "Federal Reserve hints at potential interest rate adjustments next quarter.",
    "Crude oil prices stabilize after recent fluctuations.",
    "Emerging markets show strong growth potential for H2.",
    "New ESG fund launched, focusing on renewable energy projects.",
    "Cryptocurrency market sees increased volatility.",
    "IPO Alert: 'Innovatech Solutions' to go public next week.",
    "Gold prices inch higher amid global economic uncertainty.",
    "Real estate sector showing signs of cooling down in major cities.",
    "Consumer spending data for last month exceeds expectations.",
    "Unemployment figures reach a new low, boosting market confidence.",
    "Trade negotiations between major economies show progress.",
    "Biotech company 'LifeGen' announces promising trial results for new drug."
  ];


  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow p-4 md:p-6 lg:p-8 space-y-6">
        {/* Section 1: KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <InfoCardComponent title="Total Revenue" value="$45,231.89" description="+20.1% from last month" icon={DollarSign} />
          <InfoCardComponent title="Active Users" value="+2350" description="+180.1% from last month" icon={Users} />
          <InfoCardComponent title="Market Index" value="14,320.50" description="+1.2% today" icon={TrendingUp} />
          <InfoCardComponent title="Open Positions" value="3" description="2 Long, 1 Short" icon={Briefcase} />
        </div>

        {/* Section 2: Main Chart, Ad, and Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="lg:col-span-2 space-y-4 md:space-y-6">
            <ChartComponent />
            {/* Ad Section (918x431) */}
            <div className="flex justify-center">
                <AdSlot width={918} height={431} label="Large Display Ad (918x431)" />
            </div>
          </div>
          <Card className="shadow-lg h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl font-headline text-primary flex items-center">
                <Activity className="mr-2 h-5 w-5" /> Live Feed
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow overflow-hidden">
              <ScrollArea className="h-[350px] lg:h-full">
                <ul className="space-y-3 text-sm">
                  {liveFeedItems.slice(0,10).map((item, i) => ( 
                    <li key={i} className="flex items-start space-x-2 p-2 rounded-md hover:bg-muted/50">
                      <Newspaper className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span>{item} <span className="text-xs text-muted-foreground">({(i % 5) + 1} min ago)</span></span>
                    </li>
                  ))}
                </ul>
              </ScrollArea>
            </CardContent>
          </Card>
        </div>

        {/* Ad Section between Chart/Feed and Table/Alert sections */}
        <div>
            <AdSlot fullWidth height={100} label="Mid-Content Banner (Mobile)" className="md:hidden flex"/>
        </div>

        {/* Section 3: Table and Ad/Alert */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="lg:col-span-2">
            <TableComponent />
          </div>
          <div className="space-y-4 flex flex-col">
             <InfoCardComponent 
                title="System Alert" 
                value="High Trading Volume" 
                description="Platform stable. Monitoring performance." 
                icon={AlertTriangle} 
                className="border-yellow-500/50 bg-yellow-500/10 text-yellow-700 dark:text-yellow-300"
                details="Consider staggering large orders if experiencing unusual delays."
             />
            <AdSlot fullWidth height={250} label="Dashboard Square Ad" className="mt-auto" />
          </div>
        </div>

        {/* Section 4: News/Article Cards */}
        <div>
          <h2 className="text-2xl font-headline text-primary mb-4">Latest News & Insights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                summary={article.summary}
                imageUrl={article.imageUrl}
                imageHint={article.imageHint}
                articleUrl={article.articleUrl}
                category={article.category}
                date={article.date}
              />
            ))}
          </div>
        </div>
        
        {/* Ad Slot above footer */}
        <div className="mt-8">
          <AdSlot fullWidth height={250} label="Dashboard Square Ad" />
        </div>

        <Separator className="my-10 bg-border" />
        <CommentSection />

      </main>
      <Footer />
    </div>
  );
}
