import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | FinVista',
  description: 'Important disclaimers regarding the use of FinVista services and information.',
};

export default function Disclaimer() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-headline">Disclaimer</CardTitle>
          <p className="text-sm text-muted-foreground">Last updated: March 15, 2025</p>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none">
          <h2>1. No Financial Advice</h2>
          <p>
            The information provided on FinVista is for general informational purposes only and should not be considered as financial advice. We are not financial advisors, and the content on our platform does not constitute professional financial advice.
          </p>

          <h2>2. Investment Risks</h2>
          <p>
            All investments carry risk, and past performance is not indicative of future results. The value of investments can go up as well as down, and you may lose some or all of your invested capital. You should carefully consider your investment objectives, risks, and costs before making any investment decisions.
          </p>

          <h2>3. Market Information</h2>
          <p>
            While we strive to provide accurate and up-to-date market information, we make no representations or warranties about the accuracy, completeness, or reliability of any information on our platform. Market conditions can change rapidly, and information may become outdated quickly.
          </p>

          <h2>4. Third-Party Content</h2>
          <p>
            Our platform may contain content from third-party sources. We do not endorse, verify, or guarantee the accuracy of such content. Users should independently verify any information before making decisions based on it.
          </p>

          <h2>5. Technical Issues</h2>
          <p>
            We do not guarantee that our services will be uninterrupted or error-free. Technical issues, maintenance, or other factors may affect the availability of our services at any time.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, FinVista and its affiliates shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services or information.
          </p>

          <h2>7. External Links</h2>
          <p>
            Our platform may contain links to external websites. We are not responsible for the content, privacy policies, or practices of any third-party websites. Users should review the terms and conditions of any external websites they visit.
          </p>

          <h2>8. Regulatory Compliance</h2>
          <p>
            While we strive to comply with applicable laws and regulations, the information on our platform may not be suitable for all jurisdictions. Users are responsible for ensuring compliance with local laws and regulations.
          </p>

          <h2>9. Changes to Disclaimer</h2>
          <p>
            We reserve the right to modify this disclaimer at any time. We will notify users of any changes by updating the "Last updated" date.
          </p>

          <h2>10. Contact Information</h2>
          <p>
            If you have any questions about this disclaimer, please contact us at:
          </p>
          <ul>
            <li>Email: legal@finvista.com</li>
            <li>Phone: +91 1800-123-4567</li>
            <li>Address: FinVista Tower, 123 Business Park, Mumbai, Maharashtra 400001</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 