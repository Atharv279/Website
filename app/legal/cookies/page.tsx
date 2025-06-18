import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | FinVista',
  description: 'Information about how FinVista uses cookies and similar technologies.',
};

export default function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-headline">Cookie Policy</CardTitle>
          <p className="text-sm text-muted-foreground">Last updated: March 15, 2025</p>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none">
          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by enabling us to monitor which pages you find useful and which you do not.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>We use cookies for the following purposes:</p>
          <ul>
            <li>Essential cookies: Required for the website to function properly</li>
            <li>Analytics cookies: Help us understand how visitors interact with our website</li>
            <li>Functionality cookies: Remember your preferences and settings</li>
            <li>Marketing cookies: Used to track visitors across websites</li>
          </ul>

          <h2>3. Types of Cookies We Use</h2>
          <h3>3.1 Essential Cookies</h3>
          <p>These cookies are necessary for the website to function and cannot be switched off in our systems.</p>

          <h3>3.2 Analytics Cookies</h3>
          <p>We use Google Analytics to help us understand how our website is being used. These cookies may track things such as how long you spend on the site and the pages that you visit.</p>

          <h3>3.3 Functionality Cookies</h3>
          <p>These cookies allow the website to remember choices you make and provide enhanced, more personal features.</p>

          <h3>3.4 Marketing Cookies</h3>
          <p>These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.</p>

          <h2>4. Managing Cookies</h2>
          <p>
            Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your experience of our website. To learn more about cookies and how to manage them, visit <a href="https://www.aboutcookies.org" className="text-primary hover:underline">www.aboutcookies.org</a>.
          </p>

          <h2>5. Third-Party Cookies</h2>
          <p>
            In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements on and through the website, and so on.
          </p>

          <h2>6. Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about our Cookie Policy, please contact us at:
          </p>
          <ul>
            <li>Email: privacy@finvista.com</li>
            <li>Phone: +91 1800-123-4567</li>
            <li>Address: FinVista Tower, 123 Business Park, Mumbai, Maharashtra 400001</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 