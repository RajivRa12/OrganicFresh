import { Card, CardContent, CardHeader, Typography } from "@/components/mui";
import { Shield, Lock, Eye, Database, Users, AlertTriangle, CheckCircle, Globe } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            Data Protection
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Privacy <span className="text-green-700">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to protecting your privacy and ensuring the security of your 
            personal information. Learn how we collect, use, and protect your data.
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-blue-800 mb-2">Your Privacy Matters</h3>
                <p className="text-blue-700">
                  This Privacy Policy explains how organicFresh collects, uses, and protects your 
                  personal information. By using our services, you consent to the practices described herein.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Information We Collect */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <Database className="w-6 h-6 text-green-600" />
                  1. Information We Collect
                </Typography>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Personal Information:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Name, email address, and phone number</li>
                      <li>Business information and company details</li>
                      <li>Farm location and agricultural details (for farmers)</li>
                      <li>Payment and banking information</li>
                      <li>Identity verification documents</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Usage Information:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Platform usage patterns and preferences</li>
                      <li>Order history and transaction data</li>
                      <li>Communication records and support tickets</li>
                      <li>Device information and IP addresses</li>
                      <li>Cookies and tracking technologies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <Eye className="w-6 h-6 text-green-600" />
                  2. How We Use Your Information
                </Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We use your information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Providing and improving our services</li>
                  <li>Processing orders and managing transactions</li>
                  <li>Facilitating communication between farmers and businesses</li>
                  <li>Ensuring quality control and compliance</li>
                  <li>Providing customer support and resolving issues</li>
                  <li>Sending important updates and notifications</li>
                  <li>Analyzing usage patterns to enhance user experience</li>
                  <li>Complying with legal and regulatory requirements</li>
                </ul>
              </CardContent>
            </Card>

            {/* Information Sharing */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-green-600" />
                  3. Information Sharing and Disclosure
                </Typography>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    We do not sell, trade, or rent your personal information to third parties. 
                    We may share your information in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Service Providers:</strong> With trusted partners who help us deliver our services</li>
                    <li><strong>Business Partners:</strong> To facilitate transactions between farmers and businesses</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                    <li><strong>Safety and Security:</strong> To prevent fraud and ensure platform security</li>
                    <li><strong>Consent:</strong> When you explicitly authorize us to share information</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <Lock className="w-6 h-6 text-green-600" />
                  4. Data Security and Protection
                </Typography>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 mb-4">
                  We implement comprehensive security measures to protect your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Secure access controls and authentication</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Employee training on data protection practices</li>
                    <li>Incident response and breach notification procedures</li>
                    <li>Compliance with industry security standards</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <Database className="w-6 h-6 text-green-600" />
                  5. Data Retention and Deletion
                </Typography>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 mb-4">
                    We retain your information for as long as necessary to provide our services 
                    and comply with legal obligations:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Active Accounts:</strong> Throughout your relationship with us</li>
                    <li><strong>Transaction Records:</strong> 7 years for accounting and tax purposes</li>
                    <li><strong>Communication Data:</strong> 3 years for service improvement</li>
                    <li><strong>Marketing Data:</strong> Until you opt out or request deletion</li>
                    <li><strong>Legal Requirements:</strong> As required by applicable laws</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    You may request deletion of your data, subject to legal and contractual obligations.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  6. Your Rights and Choices
                </Typography>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 mb-4">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                    <li><strong>Deletion:</strong> Request removal of your data</li>
                    <li><strong>Portability:</strong> Receive your data in a portable format</li>
                    <li><strong>Restriction:</strong> Limit how we process your information</li>
                    <li><strong>Objection:</strong> Object to certain processing activities</li>
                    <li><strong>Withdrawal:</strong> Withdraw consent for data processing</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    To exercise these rights, contact us at privacy@organicfresh.co.in
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Cookies and Tracking */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <Eye className="w-6 h-6 text-green-600" />
                  7. Cookies and Tracking Technologies
                </Typography>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 mb-4">
                    We use cookies and similar technologies to enhance your experience:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li><strong>Essential Cookies:</strong> Required for platform functionality</li>
                    <li><strong>Performance Cookies:</strong> Help us improve our services</li>
                    <li><strong>Analytics Cookies:</strong> Understand usage patterns</li>
                    <li><strong>Marketing Cookies:</strong> Deliver relevant content</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    You can control cookie preferences through your browser settings.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Third-Party Services */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-green-600" />
                  8. Third-Party Services and Links
                </Typography>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 mb-4">
                    Our platform may contain links to third-party services:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Payment gateways and financial services</li>
                    <li>Logistics and delivery partners</li>
                    <li>Analytics and marketing tools</li>
                    <li>Social media platforms</li>
                    <li>External websites and resources</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    We are not responsible for the privacy practices of third-party services. 
                    Please review their privacy policies before using their services.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Children's Privacy */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  9. Children's Privacy
                </Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Our services are not intended for children under 18 years of age. 
                  We do not knowingly collect personal information from children under 18.
                </p>
                <p className="text-gray-700">
                  If we become aware that we have collected personal information from a child 
                  under 18, we will take steps to delete such information promptly.
                </p>
              </CardContent>
            </Card>

            {/* International Transfers */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <Globe className="w-6 h-6 text-green-600" />
                  10. International Data Transfers
                </Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Your information is primarily processed in India. If we transfer your data 
                  to other countries, we ensure appropriate safeguards are in place:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Adequacy decisions by relevant authorities</li>
                  <li>Standard contractual clauses</li>
                  <li>Binding corporate rules</li>
                  <li>Other approved transfer mechanisms</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Breaches */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-green-600" />
                  11. Data Breach Notification
                </Typography>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 mb-4">
                    In the event of a data breach that affects your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>We will notify you within 72 hours of becoming aware</li>
                    <li>We will provide details about the breach and affected data</li>
                    <li>We will outline steps taken to address the situation</li>
                    <li>We will provide guidance on protecting your information</li>
                    <li>We will report to relevant authorities as required by law</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Changes to Policy */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  12. Changes to This Privacy Policy
                </Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We may update this Privacy Policy from time to time. When we make changes:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>We will post the updated policy on our platform</li>
                  <li>We will notify you of significant changes via email</li>
                  <li>We will update the "Last Updated" date</li>
                  <li>Continued use constitutes acceptance of changes</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-green-600" />
                  13. Contact Us
                </Typography>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700 mb-4">
                    If you have questions about this Privacy Policy or our data practices:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Privacy Officer:</strong> privacy@organicfresh.co.in</p>
                    <p><strong>General Inquiries:</strong> info@organicfresh.co.in</p>
                    <p><strong>Phone:</strong> +91 8438327763</p>
                    <p><strong>Address:</strong> Jyothi Nagar, Nelamgala, Bengaluru, Karnataka, 562123</p>
                  </div>
                  <p className="text-gray-700 mt-4">
                    We aim to respond to all privacy-related inquiries within 48 hours.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            <strong>Last Updated:</strong> January 2025
          </p>
          <p className="text-sm text-gray-500 mt-2">
            This Privacy Policy is effective as of the date listed above.
          </p>
        </div>
      </section>
    </div>
  );
}
