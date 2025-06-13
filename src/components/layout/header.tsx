import type { FC } from 'react';
import Link from 'next/link';
import AdSlot from '@/components/ads/ad-slot';
import { BarChart3 } from 'lucide-react';

const Header: FC = () => {
  return (
    <header className="bg-card shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
            <BarChart3 size={32} aria-hidden="true" />
            <h1 className="text-3xl font-headline font-bold">
              FinanceFlash
            </h1>
          </Link>
          <div className="hidden sm:block">
             <AdSlot width={728} height={90} label="Top Banner Ad" className="max-w-full" />
          </div>
        </div>
        <div className="sm:hidden mt-4 flex justify-center">
            <AdSlot width={320} height={100} label="Mobile Banner Ad" className="max-w-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;
