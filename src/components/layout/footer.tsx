import type { FC } from 'react';
import Link from 'next/link';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted text-muted-foreground py-8 mt-12">
      <div className="container mx-auto px-4 text-center">
        <div className="space-y-2 mb-4">
          <p className="text-sm">Contact: info@financeflash.example.com</p>
          <div className="flex justify-center space-x-4">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-primary transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
        <p className="text-xs">
          &copy; {currentYear} FinanceFlash. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          Financial information provided is for informational purposes only and should not be considered financial advice.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
