import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
// SidebarProvider is no longer used
import AppShell from '@/components/layout/AppShell';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9002'),
  title: {
    default: 'Finance Flash - Your Daily Financial Insights',
    template: '%s | Finance Flash',
  },
  description: 'Get the latest finance-related text articles, images, charts, and market updates including SIPs, mutual funds, and stock tips. Stay informed with Finance Flash.',
  keywords: ['finance', 'investing', 'stocks', 'mutual funds', 'SIP', 'market updates', 'financial articles'],
  openGraph: {
    title: 'Finance Flash - Your Daily Financial Insights',
    description: 'Stay updated with the latest financial news, articles, and market analysis.',
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:9002',
    siteName: 'Finance Flash',
    images: [
      {
        url: '/20250706_0249_Financial Market Analysis_simple_compose_01jze77p48egnb7s2emry00prn.png',
        width: 800,
        height: 400,
        alt: 'Finance Flash',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finance Flash - Your Daily Financial Insights',
    description: 'Stay updated with the latest financial news, articles, and market analysis.',
    images: ['/20250706_0249_Financial Market Analysis_simple_compose_01jze77p48egnb7s2emry00prn.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {/* SidebarProvider removed */}
        <AppShell>{children}</AppShell>
        <Toaster />
      </body>
    </html>
  );
}
