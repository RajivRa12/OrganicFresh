import { Shield, FileText, CheckCircle, AlertTriangle } from "lucide-react";

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
            Please read these terms carefully before using our platform. By using organicFresh, 
            you agree to be bound by these terms.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Terms of Service</h2>
                </div>
                <p className="text-gray-600">
                  Last updated: January 2025
                </p>
              </div>

              <div className="space-y-8">
                {/* Section 1 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">1. Acceptance of Terms</h3>
                  <p className="text-gray-700 mb-3">
                    By accessing and using the organicFresh platform, you accept and agree to be bound by the terms 
                    and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-blue-800 text-sm">
                        <strong>Important:</strong> These terms apply to all users of our platform, including farmers, 
                        businesses, and visitors.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">2. Description of Service</h3>
                  <p className="text-gray-700 mb-3">
                    organicFresh is a B2B agricultural supply chain platform that connects farmers with businesses 
                    to facilitate the sale and purchase of fresh produce. Our services include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Farmer registration and verification</li>
                    <li>Quality control and certification</li>
                    <li>Market connection and sales facilitation</li>
                    <li>Logistics and delivery coordination</li>
                    <li>Payment processing and settlement</li>
                  </ul>
                </div>

                {/* Section 3 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">3. User Responsibilities</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">For Farmers:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                        <li>Provide accurate farm and crop information</li>
                        <li>Maintain quality standards for produce</li>
                        <li>Follow organic farming practices when applicable</li>
                        <li>Ensure timely delivery of orders</li>
                        <li>Maintain proper documentation and certifications</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">For Businesses:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                        <li>Provide accurate business information</li>
                        <li>Make timely payments for orders</li>
                        <li>Communicate clearly about requirements</li>
                        <li>Provide feedback on product quality</li>
                        <li>Maintain professional business relationships</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">4. Quality Standards</h3>
                  <p className="text-gray-700 mb-3">
                    We maintain strict quality standards to ensure the best experience for all users:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold mb-2 text-green-700">Quality Assurance</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Regular farm inspections</li>
                        <li>• Product quality testing</li>
                        <li>• Organic certification verification</li>
                        <li>• Safety standards compliance</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold mb-2 text-blue-700">Quality Control</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Pre-harvest quality checks</li>
                        <li>• Post-harvest handling standards</li>
                        <li>• Transportation quality maintenance</li>
                        <li>• Final delivery verification</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 5 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">5. Payment Terms</h3>
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      <strong>Payment Schedule:</strong> Farmers receive payment within 7 days of successful delivery 
                      and quality verification.
                    </p>
                    <p className="text-gray-700">
                      <strong>Payment Methods:</strong> We support various payment methods including bank transfers, 
                      UPI, and digital wallets.
                    </p>
                    <p className="text-gray-700">
                      <strong>Disputes:</strong> Any payment disputes must be reported within 48 hours of transaction 
                      completion.
                    </p>
                  </div>
                </div>

                {/* Section 6 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">6. Privacy and Data Protection</h3>
                  <p className="text-gray-700 mb-3">
                    We are committed to protecting your privacy and personal information. Our data collection 
                    and usage practices are outlined in our Privacy Policy.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <p className="text-yellow-800 text-sm">
                        <strong>Data Security:</strong> We implement industry-standard security measures to protect 
                        your information from unauthorized access, alteration, or disclosure.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 7 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">7. Dispute Resolution</h3>
                  <p className="text-gray-700 mb-3">
                    In case of disputes between users or with organicFresh, we follow a structured resolution process:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Direct Communication:</strong> Parties attempt to resolve issues directly</li>
                    <li><strong>Platform Mediation:</strong> Our team mediates the dispute</li>
                    <li><strong>Third-party Arbitration:</strong> If needed, we engage neutral arbitrators</li>
                    <li><strong>Legal Action:</strong> As a last resort, legal proceedings may be initiated</li>
                  </ol>
                </div>

                {/* Section 8 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">8. Termination</h3>
                  <p className="text-gray-700 mb-3">
                    We reserve the right to terminate or suspend access to our platform for users who:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Violate these terms and conditions</li>
                    <li>Engage in fraudulent or illegal activities</li>
                    <li>Provide false or misleading information</li>
                    <li>Fail to maintain quality standards</li>
                    <li>Engage in behavior that harms other users</li>
                  </ul>
                </div>

                {/* Section 9 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">9. Limitation of Liability</h3>
                  <p className="text-gray-700 mb-3">
                    organicFresh's liability is limited to the extent permitted by law. We are not responsible for:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Natural disasters affecting crop production</li>
                    <li>Market price fluctuations</li>
                    <li>Third-party service provider issues</li>
                    <li>User-generated content or communications</li>
                    <li>Indirect or consequential damages</li>
                  </ul>
                </div>

                {/* Section 10 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">10. Changes to Terms</h3>
                  <p className="text-gray-700 mb-3">
                    We may update these terms from time to time. Users will be notified of significant changes 
                    through our platform or email communications.
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-green-800 text-sm">
                        <strong>Continued Use:</strong> Your continued use of the platform after changes become 
                        effective constitutes acceptance of the new terms.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t pt-8">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">Contact Information</h3>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about these terms and conditions, please contact us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold text-gray-800">Address:</p>
                        <p className="text-gray-600">Jyothi Nagar, Nelamgala, Bengaluru, Karnataka, 562123</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Phone:</p>
                        <p className="text-gray-600">+91 8438327763</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Email:</p>
                        <p className="text-gray-600">legal@organicfresh.co.in</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Business Hours:</p>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Questions About Our Terms?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our legal team is here to help clarify any concerns you may have
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              <FileText className="w-5 h-5" />
              Contact Legal Team
            </a>
            <a
              href="/privacy"
              className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-green-700 transition-colors"
            >
              <Shield className="w-5 h-5" />
              Privacy Policy
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
