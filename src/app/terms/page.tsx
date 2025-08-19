import { Card, CardContent, CardHeader, Typography } from "@/components/mui";
import { Shield, FileText, AlertTriangle, CheckCircle } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            Legal Information
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Terms and <span className="text-green-700">Conditions</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Please read these terms carefully before using our services. 
            By using organicFresh, you agree to be bound by these terms.
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-yellow-800 mb-2">Important Notice</h3>
                <p className="text-yellow-700">
                  These terms and conditions govern your use of organicFresh services. 
                  By accessing or using our platform, you acknowledge that you have read, 
                  understood, and agree to be bound by these terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Acceptance of Terms */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  1. Acceptance of Terms
                </Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  By accessing and using the organicFresh platform, website, mobile application, 
                  or any related services, you accept and agree to be bound by the terms and 
                  provision of this agreement.
                </p>
                <p className="text-gray-700">
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </CardContent>
            </Card>

            {/* Service Description */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  2. Service Description
                </Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  organicFresh provides a B2B platform that connects farmers with businesses 
                  for the procurement and distribution of fresh agricultural produce. Our services include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Farmer onboarding and verification</li>
                  <li>Quality control and product inspection</li>
                  <li>Logistics and delivery services</li>
                  <li>Payment processing and financial services</li>
                  <li>Market access and business development support</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-green-600" />
                  3. User Responsibilities
                </Typography>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg mb-2">For Farmers:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Provide accurate information during registration</li>
                      <li>Maintain quality standards for all produce</li>
                      <li>Adhere to delivery timelines and specifications</li>
                      <li>Follow sustainable farming practices</li>
                      <li>Maintain proper documentation and certifications</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">For Businesses:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Provide accurate business information</li>
                      <li>Make timely payments as per agreed terms</li>
                      <li>Provide clear specifications for orders</li>
                      <li>Maintain proper storage conditions for received produce</li>
                      <li>Report quality issues within specified timeframes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quality Standards */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  4. Quality Standards and Compliance
                </Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  organicFresh maintains strict quality standards to ensure the safety and 
                  freshness of all products. All produce must meet:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Food safety regulations and standards</li>
                  <li>Organic certification requirements (where applicable)</li>
                  <li>Quality parameters set by our quality control team</li>
                  <li>Packaging and labeling requirements</li>
                  <li>Transportation and storage guidelines</li>
                </ul>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  5. Payment Terms and Conditions
                </Typography>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Payment terms are agreed upon during order placement and may vary based on 
                    business relationship and order volume.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Standard payment terms: 7-15 days from delivery</li>
                    <li>Accepted payment methods: Bank transfer, UPI, digital wallets</li>
                    <li>Late payments may incur additional charges</li>
                    <li>Disputes must be reported within 24 hours of delivery</li>
                    <li>Refunds processed according to our refund policy</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Delivery and Logistics */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-green-600" />
                  6. Delivery and Logistics
                </Typography>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    We strive to provide reliable and timely delivery services while maintaining 
                    product quality throughout the transportation process.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Delivery within 12 hours for local orders</li>
                    <li>Temperature-controlled transportation for perishable items</li>
                    <li>Real-time tracking and delivery updates</li>
                    <li>Flexible delivery slots based on business requirements</li>
                    <li>Delivery charges may apply based on location and order size</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  7. Intellectual Property Rights
                </Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  All content, trademarks, logos, and intellectual property on the organicFresh 
                  platform are owned by organicFresh Ventures and are protected by applicable laws.
                </p>
                <p className="text-gray-700">
                  Users may not reproduce, distribute, or create derivative works without 
                  explicit written permission from organicFresh.
                </p>
              </CardContent>
            </Card>

            {/* Privacy and Data Protection */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  8. Privacy and Data Protection
                </Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We are committed to protecting your privacy and personal information. 
                  Our data collection and usage practices are outlined in our Privacy Policy.
                </p>
                <p className="text-gray-700">
                  By using our services, you consent to the collection and use of your 
                  information as described in our Privacy Policy.
                </p>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <AlertTriangle className="w-6 h-6 text-green-600" />
                  9. Limitation of Liability
                </Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  organicFresh shall not be liable for any indirect, incidental, special, 
                  consequential, or punitive damages arising from your use of our services.
                </p>
                <p className="text-gray-700">
                  Our total liability shall not exceed the amount paid by you for the 
                  specific service in question.
                </p>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-green-600" />
                  10. Termination of Services
                </Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Either party may terminate this agreement with written notice. 
                  Upon termination:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>All outstanding orders must be fulfilled</li>
                  <li>Outstanding payments must be settled</li>
                  <li>Access to platform services will be revoked</li>
                  <li>Data retention policies will apply</li>
                </ul>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  11. Governing Law and Dispute Resolution
                </Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  These terms shall be governed by and construed in accordance with the 
                  laws of India. Any disputes shall be resolved through:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Good faith negotiations between parties</li>
                  <li>Mediation through a neutral third party</li>
                  <li>Arbitration in accordance with Indian law</li>
                  <li>Court proceedings in Bangalore, Karnataka (if necessary)</li>
                </ul>
              </CardContent>
            </Card>

            {/* Changes to Terms */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  12. Changes to Terms and Conditions
                </Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  organicFresh reserves the right to modify these terms at any time. 
                  Changes will be effective immediately upon posting on our platform.
                </p>
                <p className="text-gray-700">
                  Continued use of our services after changes constitutes acceptance 
                  of the modified terms.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-green-600" />
                  13. Contact Information
                </Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  For questions about these terms and conditions, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email:</strong> legal@organicfresh.co.in</p>
                  <p><strong>Phone:</strong> +91 8438327763</p>
                  <p><strong>Address:</strong> Jyothi Nagar, Nelamgala, Bengaluru, Karnataka, 562123</p>
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
            These terms and conditions are effective as of the date listed above.
          </p>
        </div>
      </section>
    </div>
  );
}
