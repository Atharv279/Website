import Link from 'next/link';
import Logo from '../icons/Logo';
import AdSlot from '@/components/AdSlot';
import { Button } from '../ui/button';
// SidebarTrigger is no longer used
import { Home, Newspaper, TrendingUp } from 'lucide-react'; // Removed unused icons
import type { NavItem } from '../../types';

const mainNavItems: NavItem[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/articles', label: 'Articles', icon: Newspaper },
  { href: '/market-updates', label: 'Market Updates', icon: TrendingUp },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          {/* SidebarTrigger removed */}
          <Link href="/" passHref>
            <Logo />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          {mainNavItems.map((item) => (
            <Button key={item.label} variant="ghost" asChild>
              <Link href={item.href} className="flex items-center text-foreground/80 hover:text-primary transition-colors">
                {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>

        {/* Placeholder for potential user auth button */}
        {/* <Button variant="outline" size="icon">
          <UserCircle className="h-5 w-5" />
          <span className="sr-only">User Account</span>
        </Button> */}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-2">
        <AdSlot id="top-banner-ad" type="banner" className="w-full" />
      </div>
    </header>
  );
} 