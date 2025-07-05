import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-primary">Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-foreground/80">
            <p><strong>Last Updated: July 27, 2024</strong></p>
            <p>Welcome to FinanceFlash. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
            
            <h2>Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
            <ul>
              <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and demographic information, that you voluntarily give to us when you leave comments or contact us.</li>
              <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
              <li><strong>Cookies and Web Beacons:</strong> We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help customize the Site and improve your experience.</li>
            </ul>

            <h2>Use of Your Information</h2>
            <p>We use the collected information for various purposes:</p>
            <ul>
              <li>Administer comments and respond to inquiries.</li>
              <li>Analyze usage and trends to improve our website and services.</li>
              <li>Deliver targeted advertising, coupons, newsletters, and other information regarding promotions and the Site to you (with your consent, where required).</li>
            </ul>

            <h2>Advertising</h2>
            <p>We may use third-party advertising companies to serve ads when you visit the Site. These companies may use information (not including your name, address, email address, or telephone number) about your visits to this and other websites in order to provide advertisements about goods and services of interest to you.</p>
            <p>If you would like more information about this practice and to know your choices about not having this information used by these companies, please see: <a href="http://www.networkadvertising.org/managing/opt_out.asp" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">http://www.networkadvertising.org/managing/opt_out.asp</a></p>
            
            <h2>Third-Party Websites</h2>
            <p>The Site may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the Site, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information.</p>

            <h2>Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <ul>
              <li><strong>Contact Person:</strong> Sumit Sharma</li>
              <li><strong>Phone:</strong> +91 9238209183</li>
              <li><strong>Email:</strong> contact@financeflash.com</li>
              <li><strong>Address:</strong> Mumbai, Maharashtra, India</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
