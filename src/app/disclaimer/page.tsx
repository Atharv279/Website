import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function DisclaimerPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-headline text-primary">Disclaimer</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-foreground/80">
            <p><strong>Last Updated: July 27, 2024</strong></p>
            <p>The information provided by FinanceFlash ("we," "us," or "our") on this website (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</p>
            
            <h2>Not Financial Advice</h2>
            <p>The information on this Site is not intended as, and shall not be understood or construed as, financial advice. The information contained on this Site is not a substitute for financial advice from a professional who is aware of the facts and circumstances of your individual situation.</p>
            <p>We have done our best to ensure that the information provided on this Site and the resources available for download are accurate and provide valuable information. Regardless of anything to the contrary, nothing available on or through this Site should be understood as a recommendation that you should not consult with a financial professional to address your particular information. We expressly recommend that you seek advice from a professional.</p>

            <h2>External Links Disclaimer</h2>
            <p>The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.</p>
            <p>WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.</p>

            <h2>Affiliate Disclaimer</h2>
            <p>This Site may contain links to affiliate websites, and we receive an affiliate commission for any purchases made by you on the affiliate website using such links. Our affiliates include [List your affiliate programs here, e.g., Google AdSense, Amazon Associates, etc.].</p>
            <p>We are a participant in the Google AdSense program, an advertising program designed to provide a means for sites to earn advertising fees by displaying advertising. As part of this program, Google uses cookies to serve ads based on a user's prior visits to your website or other websites.</p>

            <h2>Testimonials Disclaimer</h2>
            <p>The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences.</p>
            
            <p>Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
