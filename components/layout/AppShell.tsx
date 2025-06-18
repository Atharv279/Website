'use client'; // Make it a client component

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';

// These are the slugs for the legal pages that have their own layout defined in (legal)/layout.tsx
const legalPageSlugs = [
  'about-us',
  'privacy-policy',
  'contact-us',
  'disclaimer',
  'terms-and-conditions',
];

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname(); // e.g., "/about-us", "/articles/my-post"

  // Extract the first segment of the path, or the full path if no further segments
  // This handles cases like "/privacy-policy" directly.
  // For paths like "/", currentSlug will be ""
  // For paths like "/articles", currentSlug will be "articles"
  // For paths like "/articles/foo", currentSlug will still be "articles" if we only take the first segment
  // However, legal pages are direct children of root, e.g. /about-us.
  const currentTopLevelSlug = pathname.split('/')[1] || '';

  const isLegalPage = legalPageSlugs.includes(currentTopLevelSlug);

  if (isLegalPage) {
    // LegalPagesLayout (rendered as children here) will provide its own Header and Footer
    return <>{children}</>;
  }

  // Default AppShell structure for all other pages
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex flex-1">
        {/* AppSidebar removed */}
        {/* SidebarInset removed, main content now directly in flex container */}
        <main className="flex-1 p-4 md:p-6 lg:p-8 animate-fade-in">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
