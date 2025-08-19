import { RefreshCw, CheckCircle, AlertTriangle, Clock, FileText, Phone } from "lucide-react";

export default function RefundPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            Refund Policy
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Refund <span className="text-green-700">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We strive to ensure complete satisfaction with our services. Learn about our refund 
            policies and procedures for different scenarios.
          </p>
        </div>
      </section>

      {/* Refund Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <RefreshCw className="w-8 h-8 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Refund Policy</h2>
                </div>
                <p className="text-gray-600">
                  Last updated: January 2025
                </p>
              </div>

              <div className="space-y-8">
                {/* Section 1 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">1. General Refund Principles</h3>
                  <p className="text-gray-700 mb-3">
                    At organicFresh, we are committed to providing high-quality services and products. 
                    Our refund policy is designed to be fair and transparent for all users.
                  </p>
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-green-800 text-sm">
                        <strong>Customer Satisfaction:</strong> We prioritize customer satisfaction and 
                        will work to resolve any issues before considering refunds.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">2. Service Fee Refunds</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">Platform Registration Fees:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                        <li>Full refund within 7 days if no services have been used</li>
                        <li>50% refund within 30 days if minimal services used</li>
                        <li>No refund after 30 days of registration</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">Premium Service Fees:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                        <li>Pro-rated refunds based on unused service period</li>
                        <li>Processing fee of ₹100 may apply</li>
                        <li>Refund processed within 5-7 business days</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">3. Product Quality Issues</h3>
                  <p className="text-gray-700 mb-3">
                    If you receive products that don't meet our quality standards:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold mb-2 text-red-700">Immediate Issues</h4>
                      <ul className="text-sm text-red-800 space-y-1">
                        <li>• Damaged during transport</li>
                        <li>• Spoiled or expired products</li>
                        <li>• Incorrect quantities</li>
                        <li>• Quality below standards</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold mb-2 text-green-700">Resolution</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Full refund or replacement</li>
                        <li>• No questions asked</li>
                        <li>• Priority processing</li>
                        <li>• Apology and compensation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">4. Refund Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Report the Issue</h4>
                        <p className="text-gray-700 text-sm">
                          Contact our support team within 24 hours of receiving the product or service
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Investigation</h4>
                        <p className="text-gray-700 text-sm">
                          Our team will investigate the issue and may request photos or additional information
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Resolution</h4>
                        <p className="text-gray-700 text-sm">
                          We'll provide a refund, replacement, or credit based on the situation
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Processing</h4>
                        <p className="text-gray-700 text-sm">
                          Refunds are processed within 5-7 business days to your original payment method
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 5 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">5. Non-Refundable Items</h3>
                  <p className="text-gray-700 mb-3">
                    The following items and services are generally non-refundable:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Completed Services</p>
                        <p className="text-gray-700 text-sm">
                          Services that have been fully delivered and completed as agreed
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Custom Orders</p>
                        <p className="text-gray-700 text-sm">
                          Products or services specifically prepared for your requirements
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Digital Products</p>
                        <p className="text-gray-700 text-sm">
                          Reports, analytics, or digital content that has been accessed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 6 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">6. Refund Timeline</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold mb-2 text-blue-700">Processing Time</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Credit/Debit Cards: 5-7 business days</li>
                        <li>• UPI Transfers: 2-3 business days</li>
                        <li>• Bank Transfers: 3-5 business days</li>
                        <li>• Digital Wallets: 1-2 business days</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold mb-2 text-green-700">Factors Affecting Time</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Payment method used</li>
                        <li>• Bank processing times</li>
                        <li>• Issue complexity</li>
                        <li>• Documentation required</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 7 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">7. Cancellation Policy</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">Order Cancellations:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                        <li>Free cancellation up to 24 hours before delivery</li>
                        <li>50% refund for cancellations within 12 hours</li>
                        <li>No refund for cancellations within 6 hours</li>
                        <li>Emergency cancellations handled case-by-case</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">Service Cancellations:</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                        <li>Full refund if cancelled before service begins</li>
                        <li>Pro-rated refund for partial services</li>
                        <li>Administrative fee may apply</li>
                        <li>Written notice required for cancellation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 8 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">8. Dispute Resolution</h3>
                  <p className="text-gray-700 mb-3">
                    If you disagree with our refund decision:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Direct Discussion:</strong> Speak with our customer service team</li>
                    <li><strong>Management Review:</strong> Escalate to senior management</li>
                    <li><strong>Third-Party Mediation:</strong> Engage neutral mediator if needed</li>
                    <li><strong>Legal Action:</strong> As a last resort, pursue legal remedies</li>
                  </ol>
                </div>

                {/* Section 9 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">9. Special Circumstances</h3>
                  <div className="space-y-3">
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <p className="text-yellow-800 text-sm">
                          <strong>Force Majeure:</strong> Natural disasters, government actions, or other 
                          events beyond our control may affect refund policies.
                        </p>
                      </div>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <p className="text-blue-800 text-sm">
                          <strong>Long-term Customers:</strong> Loyal customers may receive special 
                          consideration for refund requests outside normal policy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t pt-8">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">Contact Information</h3>
                  <p className="text-gray-700 mb-4">
                    For refund requests or questions about this policy, please contact us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold text-gray-800">Refund Department:</p>
                        <p className="text-gray-600">refunds@organicfresh.co.in</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Phone Support:</p>
                        <p className="text-gray-600">+91 8438327763</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Address:</p>
                        <p className="text-gray-600">Jyothi Nagar, Nelamgala, Bengaluru, Karnataka, 562123</p>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">Response Time:</p>
                        <p className="text-gray-600">Within 24 hours</p>
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
          <h2 className="text-3xl font-bold mb-4">Need Help with a Refund?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our customer service team is here to help resolve any issues
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Contact Support
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
