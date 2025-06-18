import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GDPR Compliance | FinVista',
  description: 'Information about FinVista\'s compliance with the General Data Protection Regulation (GDPR).',
};

export default function GDPRCompliance() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-headline">GDPR Compliance</CardTitle>
          <p className="text-sm text-muted-foreground">Last updated: March 15, 2025</p>
        </CardHeader>
        <CardContent className="prose prose-lg max-w-none">
          <h2>1. Introduction</h2>
          <p>
            FinVista is committed to protecting the privacy and security of your personal data. This GDPR Compliance statement explains how we comply with the General Data Protection Regulation (GDPR) and your rights under this regulation.
          </p>

          <h2>2. Your Rights Under GDPR</h2>
          <p>Under the GDPR, you have the following rights:</p>
          <ul>
            <li>Right to be informed about how your data is processed</li>
            <li>Right of access to your personal data</li>
            <li>Right to rectification of inaccurate data</li>
            <li>Right to erasure (right to be forgotten)</li>
            <li>Right to restrict processing</li>
            <li>Right to data portability</li>
            <li>Right to object to processing</li>
            <li>Rights related to automated decision making and profiling</li>
          </ul>

          <h2>3. How We Process Your Data</h2>
          <h3>3.1 Legal Basis for Processing</h3>
          <p>We process your personal data on the following legal bases:</p>
          <ul>
            <li>With your consent</li>
            <li>To fulfill our contractual obligations</li>
            <li>To comply with legal obligations</li>
            <li>For our legitimate interests</li>
          </ul>

          <h3>3.2 Data We Collect</h3>
          <p>We may collect and process the following types of personal data:</p>
          <ul>
            <li>Contact information (name, email, phone number)</li>
            <li>Account information</li>
            <li>Usage data and preferences</li>
            <li>Device and browser information</li>
            <li>Location data (if applicable)</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including:
          </p>
          <ul>
            <li>Encryption of personal data</li>
            <li>Regular security assessments</li>
            <li>Access controls and authentication</li>
            <li>Staff training on data protection</li>
          </ul>

          <h2>5. Data Transfers</h2>
          <p>
            We may transfer your personal data to countries outside the European Economic Area (EEA). When we do so, we ensure appropriate safeguards are in place to protect your data.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements.
          </p>

          <h2>7. Your Rights in Practice</h2>
          <p>To exercise your rights, you can:</p>
          <ul>
            <li>Access your account settings to update your information</li>
            <li>Contact our Data Protection Officer</li>
            <li>Submit a data subject access request</li>
            <li>Request data deletion or portability</li>
          </ul>

          <h2>8. Data Protection Officer</h2>
          <p>
            We have appointed a Data Protection Officer (DPO) who can be contacted at:
          </p>
          <ul>
            <li>Email: dpo@finvista.com</li>
            <li>Phone: +91 1800-123-4567</li>
            <li>Address: FinVista Tower, 123 Business Park, Mumbai, Maharashtra 400001</li>
          </ul>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this GDPR Compliance statement from time to time. We will notify you of any changes by posting the new statement on this page and updating the "Last updated" date.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have any questions about our GDPR compliance or your rights, please contact us at:
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