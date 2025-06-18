
import { getSortedPostsData } from '@/lib/markdown';
import ArticleCard from '@/components/ArticleCard';
import type { Metadata } from 'next';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'All Articles',
  description: 'Browse all financial articles on Finance Flash. Explore topics like investing, stock market, personal finance, and more.',
};

export default async function ArticlesPage() {
  const allPosts = await getSortedPostsData();

  return (
    <div className="space-y-10">
      <header className="text-center md:text-left">
        <h1 className="font-headline text-4xl font-bold text-primary mb-4">All Articles</h1>
        <p className="text-lg text-muted-foreground">
          Explore our comprehensive collection of financial insights and analyses.
        </p>
      </header>

      <section className="py-2">
        <AdSlot id="articles-list-banner" type="banner" className="w-full my-6" />
      </section>

      {allPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {allPosts.map((post, index) => (
             <div key={post.slug} className="animate-fade-in" style={{ animationDelay: `${0.1 * index}s` }}>
              <ArticleCard post={post} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground py-10">No articles available at the moment. Please check back later.</p>
      )}
    </div>
  );
}
