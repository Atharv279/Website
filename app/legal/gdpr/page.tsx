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
            The General Data Protection Regulation (GDPR) is a comprehensive data protection law that came into effect on May 25, 2018. This page explains how we comply with GDPR requirements and protect your personal data.
          </p>

          <h2>2. Your Rights Under GDPR</h2>
          <p>Under GDPR, you have the following rights:</p>
          <ul>
            <li><strong>Right to Access:</strong> You can request a copy of your personal data</li>
            <li><strong>Right to Rectification:</strong> You can request correction of inaccurate data</li>
            <li><strong>Right to Erasure:</strong> You can request deletion of your personal data</li>
            <li><strong>Right to Restrict Processing:</strong> You can request limitation of data processing</li>
            <li><strong>Right to Data Portability:</strong> You can request your data in a portable format</li>
            <li><strong>Right to Object:</strong> You can object to processing of your personal data</li>
          </ul>

          <h2>3. Data We Collect</h2>
          <p>We collect the following types of personal data:</p>
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
            <li><strong>Contact Person:</strong> Sumit Sharma</li>
            <li><strong>Phone:</strong> +91 9238209183</li>
            <li><strong>Email:</strong> contact@financeflash.com</li>
            <li><strong>Address:</strong> Mumbai, Maharashtra, India</li>
          </ul>

          <h2>9. Complaints</h2>
          <p>
            If you have concerns about how we handle your personal data, you have the right to lodge a complaint with your local data protection authority.
          </p>

          <h2>10. Updates to This Policy</h2>
          <p>
            We may update this GDPR compliance statement from time to time to reflect changes in our practices or applicable law. We will notify you of any material changes.
          </p>
        </CardContent>
      </Card>
    </div>
  );
} 