import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import AdSlot from '@/components/ads/ad-slot';
import CommentSection from '@/components/content/comment-section'; // Updated import
import { Separator } from '@/components/ui/separator';

// This is a placeholder. In a real app, you'd fetch content based on the slug.
const getArticleData = (slug: string) => {
  const articles: { [key: string]: any } = {
    'market-volatility': {
      title: 'Navigating Market Volatility: A Guide for Investors',
      category: 'Investing',
      date: 'July 26, 2024',
      imageUrl: 'https://placehold.co/800x400.png',
      imageHint: 'stock market chart',
      content: `
        <p>The financial markets are inherently volatile, with periods of calm often punctuated by sharp upswings or downturns. Understanding how to navigate this volatility is crucial for any investor looking to protect their capital and potentially capitalize on opportunities. This guide provides strategies and insights to help you manage risk and make informed decisions during uncertain economic times.</p>
        <h2>Understanding Market Volatility</h2>
        <p>Market volatility refers to the rate at which the price of a security increases or decreases for a given set of returns. It is often measured by the standard deviation of returns. Higher volatility means that a security's price can change dramatically over a short time period in either direction.</p>
        <p>Several factors can contribute to market volatility, including:</p>
        <ul>
          <li><strong>Economic Data Releases:</strong> Reports on inflation, employment, GDP growth, and retail sales can significantly impact market sentiment.</li>
          <li><strong>Geopolitical Events:</strong> Political instability, wars, and international trade disputes can create uncertainty and drive market fluctuations.</li>
          <li><strong>Interest Rate Changes:</strong> Central bank policies, particularly changes in interest rates, have a direct effect on borrowing costs and investment attractiveness.</li>
          <li><strong>Market Sentiment:</strong> Investor psychology, often driven by news headlines and social media, can lead to herd behavior and exacerbate market swings.</li>
        </ul>
        <h2>Strategies for Managing Volatility</h2>
        <p>While you can't control market volatility, you can control how you react to it. Here are some strategies:</p>
        <ol>
          <li><strong>Diversification:</strong> Spreading your investments across different asset classes (stocks, bonds, real estate, commodities) and geographic regions can help mitigate risk. When one asset class performs poorly, another may perform well, smoothing out your overall returns.</li>
          <li><strong>Long-Term Perspective:</strong> Market downturns are a natural part of the investment cycle. Investors with a long-term horizon (5+ years) are generally better positioned to ride out short-term volatility. Avoid making impulsive decisions based on short-term market movements.</li>
          <li><strong>Dollar-Cost Averaging:</strong> Investing a fixed amount of money at regular intervals, regardless of market conditions, can help reduce the impact of volatility. You buy more shares when prices are low and fewer shares when prices are high.</li>
          <li><strong>Rebalancing Your Portfolio:</strong> Periodically review and adjust your portfolio to ensure it aligns with your target asset allocation. This may involve selling assets that have performed well and buying those that have underperformed.</li>
          <li><strong>Hedging Strategies:</strong> For more sophisticated investors, options or other derivatives can be used to hedge against potential losses. However, these strategies come with their own risks and complexities.</li>
        </ol>
        <h2>Conclusion</h2>
        <p>Navigating market volatility requires a disciplined approach, a clear understanding of your risk tolerance, and a long-term investment strategy. By diversifying your portfolio, maintaining a long-term perspective, and avoiding emotional decision-making, you can better position yourself to weather market storms and achieve your financial goals.</p>
      `,
    },
    'future-of-crypto': {
        title: 'The Future of Digital Currencies: Beyond Bitcoin',
        category: 'Technology',
        date: 'July 25, 2024',
        imageUrl: 'https://placehold.co/800x400.png',
        imageHint: 'cryptocurrency network',
        content: `
        <p>Bitcoin may have been the pioneer, but the world of digital currencies is rapidly expanding. This article delves into what lies beyond Bitcoin, exploring emerging cryptocurrencies, decentralized finance (DeFi), non-fungible tokens (NFTs), and the evolving regulatory landscape. </p>
        <h2>The Expanding Ecosystem</h2>
        <p>Altcoins, DeFi, NFTs, and central bank digital currencies (CBDCs) are all shaping the future of finance.</p>
        <p>Key trends to watch include:</p>
        <ul>
            <li>Increased institutional adoption.</li>
            <li>Regulatory clarity and frameworks.</li>
            <li>Scalability solutions for blockchain networks.</li>
            <li>The rise of Web3 and decentralized applications (dApps).</li>
        </ul>
        <p>The journey is just beginning, and the transformative potential of digital currencies is immense.</p>
      `
    },
    'sustainable-investing': {
        title: 'Sustainable Investing: Aligning Profit with Purpose',
        category: 'ESG',
        date: 'July 24, 2024',
        imageUrl: 'https://placehold.co/800x400.png',
        imageHint: 'eco friendly investment',
        content: `
        <p>Sustainable investing, which incorporates Environmental, Social, and Governance (ESG) factors, is no longer a niche strategy. It's becoming mainstream as investors recognize that companies with strong ESG practices may be better positioned for long-term success.</p>
        <h2>What are ESG Factors?</h2>
        <p>ESG criteria help assess a company's impact and sustainability.</p>
        <ul>
            <li><strong>Environmental:</strong> Climate change, resource depletion, waste management, pollution.</li>
            <li><strong>Social:</strong> Labor practices, human rights, customer satisfaction, data privacy.</li>
            <li><strong>Governance:</strong> Board composition, executive pay, shareholder rights, business ethics.</li>
        </ul>
        <p>Aligning your investments with your values can lead to both financial returns and positive societal impact.</p>
      `
    },
    'top-5-investments': {
        title: 'Top 5 Investment Strategies for Q3',
        category: 'Investing',
        date: 'July 23, 2024',
        imageUrl: 'https://placehold.co/800x400.png',
        imageHint: 'investment portfolio',
        content: `
        <p>As we head into the third quarter, savvy investors are looking for the best strategies. This article outlines five key approaches to consider for your portfolio.</p>
        <p>Strategies include focusing on growth stocks, value investing, dividend stocks, emerging markets, and alternative investments.</p>
      `
    },
    'crypto-volatility': {
        title: 'Understanding Cryptocurrency Volatility',
        category: 'Cryptocurrency',
        date: 'July 22, 2024',
        imageUrl: 'https://placehold.co/800x400.png',
        imageHint: 'bitcoin chart fluctuation',
        content: `
        <p>Cryptocurrencies are known for their price swings. This piece explores the factors driving crypto volatility and how investors can approach this dynamic market.</p>
        <p>Market sentiment, regulatory news, technological developments, and adoption rates all play a role.</p>
      `
    },
     'real-estate-2024': {
        title: 'Real Estate Market Trends in 2024',
        category: 'Real Estate',
        date: 'July 21, 2024',
        imageUrl: 'https://placehold.co/800x400.png',
        imageHint: 'modern houses',
        content: `
        <p>The real estate market is constantly evolving. Here's a look at the key trends shaping residential and commercial property investments in 2024.</p>
        <p>Interest rates, housing supply, remote work, and urbanization are critical factors.</p>
      `
    },
    'retirement-planning': {
        title: 'Retirement Planning: A Comprehensive Guide',
        category: 'Personal Finance',
        date: 'July 20, 2024',
        imageUrl: 'https://placehold.co/800x400.png',
        imageHint: 'couple planning retirement',
        content: `
        <p>Planning for retirement is one of the most important financial journeys. This guide covers essential steps, from setting goals to choosing investment vehicles.</p>
        <p>Topics include 401(k)s, IRAs, Social Security, and healthcare costs in retirement.</p>
      `
    }
  };
  return articles[slug] || null;
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleData(params.slug);

  if (!article) {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Article Not Found</h1>
          <p className="text-foreground/80">The article you are looking for does not exist or has been moved.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <article>
          <Card className="shadow-xl">
            {article.imageUrl && (
              <div className="relative w-full h-64 md:h-96 rounded-t-lg overflow-hidden">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  data-ai-hint={article.imageHint}
                  priority 
                />
              </div>
            )}
            <CardHeader className="pt-6">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                <span>{article.category.toUpperCase()}</span>
                <span>&bull;</span>
                <span>{article.date}</span>
              </div>
              <CardTitle className="text-3xl lg:text-4xl font-headline text-primary leading-tight">
                {article.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div 
                className="prose prose-lg max-w-none text-foreground/90 prose-headings:text-primary prose-headings:font-headline prose-a:text-primary hover:prose-a:underline prose-strong:text-foreground prose-ul:list-disc prose-ol:list-decimal"
                dangerouslySetInnerHTML={{ __html: article.content }} 
              />
            </CardContent>
          </Card>
        </article>
        
        <Separator className="my-10 bg-border" />

        <div className="my-10 flex justify-center">
            <AdSlot width={728} height={90} label="Below Article Ad (Desktop)" className="hidden md:flex"/>
            <AdSlot width={300} height={250} label="Below Article Ad (Mobile)" className="md:hidden flex"/>
        </div>

        <CommentSection />
      </main>
      <Footer />
    </div>
  );
}

// Optional: Generate static paths if you know all slugs beforehand
// export async function generateStaticParams() {
//   const articleSlugs = ['market-volatility', 'future-of-crypto', 'sustainable-investing', /* ... more slugs */];
//   return articleSlugs.map((slug) => ({
//     slug: slug,
//   }));
// }
