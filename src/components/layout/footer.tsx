import Link from 'next/link';
import { Mail, Shield, Info, FileText, Linkedin, Twitter, Facebook } from 'lucide-react';
import type { NavItem } from '@/types';

const legalNavItems: NavItem[] = [
  { href: '/about-us', label: 'About Us', icon: Info },
  { href: '/privacy-policy', label: 'Privacy Policy', icon: Shield },
  { href: '/contact-us', label: 'Contact Us', icon: Mail },
  { href: '/disclaimer', label: 'Disclaimer', icon: FileText },
  { href: '/terms-and-conditions', label: 'Terms & Conditions', icon: FileText },
];

const socialLinks = [
  { href: '#', label: 'LinkedIn', icon: Linkedin },
  { href: '#', label: 'Twitter', icon: Twitter },
  { href: '#', label: 'Facebook', icon: Facebook },
];


export default function Footer() {
  return (
    <footer className="border-t bg-background/80">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-headline text-lg font-semibold text-primary">Finance Flash</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Your daily source for financial insights, market updates, and investment knowledge.
            </p>
            <div className="mt-4 flex space-x-4">
              {socialLinks.map((link) => (
                <Link key={link.label} href={link.href} passHref>
                  <span className="text-muted-foreground hover:text-primary transition-colors" aria-label={link.label}>
                    <link.icon className="h-5 w-5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-headline text-md font-semibold text-foreground">Quick Links</h4>
            <ul className="mt-2 space-y-1">
              <li><Link href="/articles" className="text-sm text-muted-foreground hover:text-primary transition-colors">Articles</Link></li>
              <li><Link href="/market-updates" className="text-sm text-muted-foreground hover:text-primary transition-colors">Market Updates</Link></li>
              <li><Link href="/sitemap.xml" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline text-md font-semibold text-foreground">Legal</h4>
            <ul className="mt-2 space-y-1">
              {legalNavItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                    {item.icon && <item.icon className="mr-2 h-4 w-4 flex-shrink-0" />}
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Finance Flash. All rights reserved.</p>
          <p className="mt-1">
            Disclaimer: Information on this site is for educational purposes only and not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
