import { getLegalPageData, getAllLegalPageSlugs } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface LegalPageProps {
  params: {
    page: string; // e.g., 'privacy-policy'
  };
}

export async function generateStaticParams() {
  const paths = await getAllLegalPageSlugs();
  return paths;
}

export async function generateMetadata({ params }: LegalPageProps): Promise<Metadata> {
  const pageData = await getLegalPageData(params.page);
  if (!pageData) {
    return { title: 'Page Not Found' };
  }
  return {
    title: pageData.title,
    description: `Read the ${pageData.title} for Finance Flash.`,
  };
}

export default async function LegalPageDisplay({ params }: LegalPageProps) {
  const pageData = await getLegalPageData(params.page);

  if (!pageData) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto py-8 md:py-12 px-4">
      <header className="mb-8 text-center">
        <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary">
          {pageData.title}
        </h1>
      </header>
      <div
        className="prose prose-sm sm:prose lg:prose-lg dark:prose-invert mx-auto prose-p:text-foreground/90 prose-headings:text-primary prose-a:text-accent prose-strong:text-foreground"
        dangerouslySetInnerHTML={{ __html: pageData.contentHtml }}
      />
    </div>
  );
}
