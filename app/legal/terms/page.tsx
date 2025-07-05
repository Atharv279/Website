// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | FinVista',
  description: 'Terms and conditions for using FinVista services.',
};

export default function TermsOfService() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="text-2xl font-semibold leading-none tracking-tight">Terms of Service</div>
          <p className="text-sm text-muted-foreground">Last updated: March 15, 2025</p>
        </div>
        <div className="p-6 pt-0 prose prose-lg max-w-none">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using FinVista's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
          </p>

          <h2>2. Use of Services</h2>
          <h3>2.1 Eligibility</h3>
          <p>To use our services, you must:</p>
          <ul>
            <li>Be at least 18 years old</li>
            <li>Have the legal capacity to enter into binding contracts</li>
            <li>Not be prohibited from using the services under applicable laws</li>
          </ul>

          <h3>2.2 Account Registration</h3>
          <p>When you create an account with us, you must provide accurate and complete information. You are responsible for maintaining the security of your account.</p>

          <h2>3. Financial Information and Advice</h2>
          <p>
            The information provided on our platform is for general informational purposes only and should not be considered as financial advice. We recommend consulting with qualified financial professionals before making any investment decisions.
          </p>

          <h2>4. User Responsibilities</h2>
          <p>As a user of our services, you agree to:</p>
          <ul>
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account</li>
            <li>Not share your account credentials</li>
            <li>Not use our services for any illegal purposes</li>
            <li>Not attempt to interfere with or disrupt our services</li>
          </ul>

          <h2>5. Intellectual Property</h2>
          <p>
            All content, features, and functionality of our services are owned by FinVista and are protected by international copyright, trademark, and other intellectual property laws.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            FinVista shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
          </p>

          <h2>7. Modifications to Services</h2>
          <p>
            We reserve the right to modify or discontinue, temporarily or permanently, our services with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of our services.
          </p>

          <h2>8. Termination</h2>
          <p>
            We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.
          </p>

          <h2>10. Changes to Terms</h2>
          <p>
            We reserve the right to modify these terms at any time. We will notify users of any changes by updating the "Last updated" date of these terms.
          </p>

          <h2>11. Contact Information</h2>
          <p>
            For any questions about these Terms, please contact us at:
          </p>
          <ul>
            <li>Email: legal@finvista.com</li>
            <li>Phone: +91 1800-123-4567</li>
            <li>Address: FinVista Tower, 123 Business Park, Mumbai, Maharashtra 400001</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 