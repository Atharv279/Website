// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | FinVista',
  description: 'Our commitment to protecting your privacy and personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <div className="text-2xl font-semibold leading-none tracking-tight">Privacy Policy</div>
          <p className="text-sm text-muted-foreground">Last updated: March 15, 2025</p>
        </div>
        <div className="p-6 pt-0 prose prose-lg max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Welcome to FinVista ("we," "our," or "us"). We are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>2.1 Personal Information</h3>
          <p>We may collect the following types of personal information:</p>
          <ul>
            <li>Name and contact information</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>IP address and device information</li>
            <li>Usage data and analytics</li>
            <li>Financial information (when required for services)</li>
          </ul>

          <h3>2.2 Non-Personal Information</h3>
          <p>We also collect non-personal information such as:</p>
          <ul>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Time and date of visits</li>
            <li>Pages viewed</li>
            <li>Time spent on pages</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the collected information for various purposes:</p>
          <ul>
            <li>To provide and maintain our services</li>
            <li>To notify you about changes to our services</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information to improve our services</li>
            <li>To monitor the usage of our services</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
          </p>

          <h2>5. Your Rights</h2>
          <p>Under applicable data protection laws, you have the following rights:</p>
          <ul>
            <li>Right to access your personal data</li>
            <li>Right to rectification of inaccurate data</li>
            <li>Right to erasure of your data</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
          </ul>

          <h2>6. Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>

          <h2>7. Third-Party Services</h2>
          <p>
            We may employ third-party companies and individuals to facilitate our services, provide services on our behalf, perform service-related services, or assist us in analyzing how our services are used.
          </p>

          <h2>8. Children's Privacy</h2>
          <p>
            Our services are not intended for use by children under the age of 18. We do not knowingly collect personal information from children under 18.
          </p>

          <h2>9. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <ul>
            <li><strong>Contact Person:</strong> Sumit Sharma</li>
            <li><strong>Phone:</strong> +91 9238209183</li>
            <li><strong>Email:</strong> contact@financeflash.com</li>
            <li><strong>Address:</strong> Mumbai, Maharashtra, India</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 