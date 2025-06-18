import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// This layout uses the main Header and Footer. It was intentionally not using AppShell.
// The RootLayout no longer provides SidebarProvider.
export default function LegalPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header /> 
      <main className="flex-1 container mx-auto px-4 py-8 sm:px-6 lg:px-8 animate-fade-in">
        {children}
      </main>
      <Footer />
    </div>
  );
}
