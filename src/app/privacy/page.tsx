import { Shield, Lock, Eye, Database, Users, Bell, FileText } from "lucide-react";
export default function PrivacyPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            Privacy & Security
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Privacy <span className="text-green-700">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to protecting your privacy and ensuring the security of your personal information. 
            This policy explains how we collect, use, and safeguard your data.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Privacy Policy</h2>
                </div>
                <p className="text-gray-600">
                  Last updated: January 2025
                </p>
              </div>

              <div className="space-y-8">
                {/* Section 1 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">1. Information We Collect</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">Personal Information:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                        <li>Name and contact details (phone, email, address)</li>
                        <li>Business information and credentials</li>
                        <li>Farm details and crop information</li>
                        <li>Payment and financial information</li>
                        <li>Identity verification documents</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">Usage Information:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                        <li>Platform activity and interactions</li>
                        <li>Order history and preferences</li>
                        <li>Device and browser information</li>
                        <li>Location data (when relevant)</li>
                        <li>Communication records</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">2. How We Use Your Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold mb-2 text-green-700">Service Provision</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Process registrations and orders</li>
                        <li>• Facilitate transactions</li>
                        <li>• Provide customer support</li>
                        <li>• Manage quality control</li>
                        <li>• Coordinate logistics</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold mb-2 text-blue-700">Platform Improvement</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Analyze usage patterns</li>
                        <li>• Enhance user experience</li>
                        <li>• Develop new features</li>
                        <li>• Ensure platform security</li>
                        <li>• Optimize performance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">3. Information Sharing</h3>
                  <p className="text-gray-700 mb-3">
                    We do not sell, trade, or rent your personal information to third parties. 
                    We may share information only in the following circumstances:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
                    <li><strong>Service Providers:</strong> With trusted partners who help us operate our platform</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                    <li><strong>Business Partners:</strong> To facilitate transactions between farmers and businesses</li>
                    <li><strong>Safety & Security:</strong> To prevent fraud and ensure platform security</li>
                  </ul>
                </div>

                {/* Section 4 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">4. Data Security</h3>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-4">
                    <div className="flex items-start gap-3">
                      <Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-blue-800 text-sm">
                        <strong>Security Measures:</strong> We implement industry-standard security protocols 
                        including encryption, secure servers, and regular security audits.
                      </p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">Technical Safeguards:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• SSL/TLS encryption for data transmission</li>
                        <li>• Secure data centers with access controls</li>
                        <li>• Regular security updates and patches</li>
                        <li>• Multi-factor authentication</li>
                        <li>• Intrusion detection systems</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">Organizational Safeguards:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Employee training on data protection</li>
                        <li>• Access controls and permissions</li>
                        <li>• Regular security assessments</li>
                        <li>• Incident response procedures</li>
                        <li>• Compliance monitoring</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 5 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">5. Data Retention</h3>
                  <p className="text-gray-700 mb-3">
                    We retain your information only for as long as necessary to provide our services 
                    and comply with legal obligations:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Database className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Active Accounts:</p>
                        <p className="text-gray-700 text-sm">Data retained while your account is active</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Legal Requirements:</p>
                        <p className="text-gray-700 text-sm">Financial records retained for 7 years</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Eye className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Analytics Data:</p>
                        <p className="text-gray-700 text-sm">Aggregated data retained for 3 years</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 6 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">6. Your Rights</h3>
                  <p className="text-gray-700 mb-4">
                    You have the following rights regarding your personal information:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Eye className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-800">Access & Review</p>
                          <p className="text-gray-700 text-sm">View and download your data</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-800">Correction</p>
                          <p className="text-gray-700 text-sm">Update inaccurate information</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Lock className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-800">Deletion</p>
                          <p className="text-gray-700 text-sm">Request data removal</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Bell className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-gray-800">Opt-out</p>
                          <p className="text-gray-700 text-sm">Unsubscribe from communications</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 7 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">7. Cookies and Tracking</h3>
                  <p className="text-gray-700 mb-3">
                    We use cookies and similar technologies to enhance your experience:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-gray-800">Essential Cookies:</h4>
                      <p className="text-gray-700 text-sm">
                        Required for platform functionality, security, and basic operations
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-gray-800">Analytics Cookies:</h4>
                      <p className="text-gray-700 text-sm">
                        Help us understand how users interact with our platform
                      </p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-gray-800">Preference Cookies:</h4>
                      <p className="text-gray-700 text-sm">
                        Remember your settings and preferences for a better experience
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 8 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">8. Third-Party Services</h3>
                  <p className="text-gray-700 mb-3">
                    Our platform may integrate with third-party services. These services have their own 
                    privacy policies, and we are not responsible for their practices:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Payment gateways and processors</li>
                    <li>Analytics and monitoring tools</li>
                    <li>Communication and notification services</li>
                    <li>Maps and location services</li>
                    <li>Social media platforms</li>
                  </ul>
                </div>

                {/* Section 9 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">9. Children's Privacy</h3>
                  <p className="text-gray-700 mb-3">
                    Our platform is not intended for children under 18 years of age. We do not knowingly 
                    collect personal information from children. If you believe we have collected such 
                    information, please contact us immediately.
                  </p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <p className="text-yellow-800 text-sm">
                        <strong>Age Verification:</strong> We require users to confirm they are 18 or older 
                        during registration.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 10 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">10. International Transfers</h3>
                  <p className="text-gray-700 mb-3">
                    Your information may be transferred to and processed in countries other than your own. 
                    We ensure appropriate safeguards are in place to protect your data during such transfers.
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                    <div className="flex items-start gap-3">
                      <Lock className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-green-800 text-sm">
                        <strong>Data Protection:</strong> We comply with applicable data protection laws 
                        and implement appropriate security measures.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 11 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">11. Changes to This Policy</h3>
                  <p className="text-gray-700 mb-3">
                    We may update this privacy policy from time to time. We will notify you of any 
                    significant changes through our platform or email communications.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <div className="flex items-start gap-3">
                      <Bell className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-blue-800 text-sm">
                        <strong>Notification:</strong> You will be informed of policy changes at least 
                        30 days before they become effective.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t pt-8">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">Contact Us</h3>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about this privacy policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold text-gray-800">Privacy Officer:</p>
                        <p className="text-gray-600">privacy@organicfresh.co.in</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">General Contact:</p>
                        <p className="text-gray-600">+91 8438327763</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Address:</p>
                        <p className="text-gray-600">Jyothi Nagar, Nelamgala, Bengaluru, Karnataka, 562123</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Response Time:</p>
                        <p className="text-gray-600">Within 48 hours</p>
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
          <h2 className="text-3xl font-bold mb-4">Have Privacy Concerns?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our privacy team is here to address your questions and concerns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              <Users className="w-5 h-5" />
              Contact Privacy Team
            </a>
            <a
              href="/terms"
              className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-green-700 transition-colors"
            >
              <FileText className="w-5 h-5" />
              View Terms
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
