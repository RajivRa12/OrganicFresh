import { Truck, MapPin, Clock, Package, Shield, Phone, Mail } from "lucide-react";

export default function ShippingPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            Shipping & Delivery
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Shipping <span className="text-green-700">Details</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fast, reliable, and temperature-controlled delivery to ensure your fresh produce 
            reaches you in perfect condition.
          </p>
        </div>
      </section>

      {/* Shipping Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="w-8 h-8 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Shipping Information</h2>
                </div>
                <p className="text-gray-600">
                  Last updated: January 2025
                </p>
              </div>

              <div className="space-y-8">
                {/* Section 1 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">1. Delivery Areas</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold mb-2 text-green-700">Primary Coverage</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Bengaluru Metropolitan Area</li>
                        <li>• Mysuru and surrounding districts</li>
                        <li>• Mandya and Ramanagara</li>
                        <li>• Tumakuru and Chitradurga</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold mb-2 text-blue-700">Expanding Coverage</h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Hubli-Dharwad region</li>
                        <li>• Mangaluru and coastal areas</li>
                        <li>• Belagavi and northern districts</li>
                        <li>• Other major cities in Karnataka</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">2. Delivery Timeframes</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Standard Delivery</h4>
                        <p className="text-gray-700 text-sm">
                          Within 12-24 hours from order confirmation
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Express Delivery</h4>
                        <p className="text-gray-700 text-sm">
                          Within 6-8 hours (additional charges apply)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-800">Scheduled Delivery</h4>
                        <p className="text-gray-700 text-sm">
                          Choose your preferred delivery time slot
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">3. Shipping Costs</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-gray-800">Free Shipping</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Orders above ₹5,000</li>
                        <li>• Premium members</li>
                        <li>• Bulk orders (above 100kg)</li>
                        <li>• First-time customers</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-gray-800">Standard Shipping</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Orders ₹2,000 - ₹5,000: ₹150</li>
                        <li>• Orders below ₹2,000: ₹200</li>
                        <li>• Remote areas: Additional ₹50-100</li>
                        <li>• Express delivery: +₹300</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">4. Packaging & Handling</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">Temperature Control</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Insulated containers</li>
                        <li>• Ice packs for perishables</li>
                        <li>• Temperature monitoring</li>
                        <li>• Climate-controlled vehicles</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">Protective Packaging</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Sturdy boxes and crates</li>
                        <li>• Cushioning materials</li>
                        <li>• Moisture-resistant wrapping</li>
                        <li>• Secure sealing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 5 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">5. Order Tracking</h3>
                  <p className="text-gray-700 mb-3">
                    Stay informed about your delivery with our comprehensive tracking system:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Package className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Order Confirmation</p>
                        <p className="text-gray-700 text-sm">
                          Immediate confirmation with order details and estimated delivery time
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Truck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Pickup Notification</p>
                        <p className="text-gray-700 text-sm">
                          Alert when your order is picked up from the farm
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Real-time Updates</p>
                        <p className="text-gray-700 text-sm">
                          Live tracking with GPS coordinates and delivery status
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">Delivery Confirmation</p>
                        <p className="text-gray-700 text-sm">
                          Photo confirmation and signature upon delivery
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 6 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">6. Delivery Instructions</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">Business Hours</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                        <li>Monday - Friday: 6:00 AM - 8:00 PM</li>
                        <li>Saturday: 6:00 AM - 6:00 PM</li>
                        <li>Sunday: 8:00 AM - 4:00 PM</li>
                        <li>Holidays: Limited service available</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-gray-800">Special Requirements</h4>
                      <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                        <li>Provide clear delivery address and landmarks</li>
                        <li>Specify preferred delivery time slots</li>
                        <li>Mention any access restrictions or gate codes</li>
                        <li>Ensure someone is available to receive the order</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 7 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">7. Delivery Issues</h3>
                  <div className="space-y-3">
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
                      <div className="flex items-start gap-3">
                        <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <p className="text-red-800 text-sm">
                          <strong>Failed Deliveries:</strong> If delivery cannot be completed, 
                          we'll attempt redelivery within 24 hours at no additional cost.
                        </p>
                      </div>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                      <div className="flex items-start gap-3">
                        <Clock className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <p className="text-yellow-800 text-sm">
                          <strong>Delays:</strong> In case of unavoidable delays, we'll notify 
                          you immediately and provide updated delivery estimates.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 8 */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-700">8. International Shipping</h3>
                  <p className="text-gray-700 mb-3">
                    Currently, we focus on domestic delivery within Karnataka. International shipping 
                    services are under development and will be available soon.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <p className="text-blue-800 text-sm">
                        <strong>Future Plans:</strong> We're working on expanding our delivery network 
                        to other states and eventually international markets.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t pt-8">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">Contact Information</h3>
                  <p className="text-gray-700 mb-4">
                    For shipping questions or delivery support, please contact us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold text-gray-800">Shipping Department:</p>
                        <p className="text-gray-600">shipping@organicfresh.co.in</p>
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
                        <p className="text-gray-600">Within 2 hours</p>
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
          <h2 className="text-3xl font-bold mb-4">Questions About Shipping?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our logistics team is here to help with all delivery-related queries
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
              <Mail className="w-5 h-5" />
              View Terms
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
