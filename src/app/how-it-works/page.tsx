import { Card, CardContent, CardHeader, Typography } from "@/components/mui";
import { Leaf, Truck, Users, CheckCircle, ArrowRight, Star } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            How It Works
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Simple <span className="text-green-700">Process</span>, <span className="text-yellow-600">Big Results</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how organicFresh connects farmers directly to businesses, creating a seamless supply chain 
            that benefits everyone involved.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The organicFresh Ecosystem</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We've simplified the complex agricultural supply chain into three simple steps: 
              <strong> Source → Quality Check → Deliver</strong>
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Source</h3>
              <p className="text-gray-600">
                We connect directly with verified farmers and FPOs across India, 
                ensuring the freshest produce from trusted sources.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Quality Check</h3>
              <p className="text-gray-600">
                Every product undergoes rigorous quality control at our facilities 
                before being approved for delivery.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Deliver</h3>
              <p className="text-gray-600">
                Fresh produce is delivered to businesses within hours, 
                maintaining quality and freshness throughout the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Farmers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works for Farmers</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Join our network and transform your farming business with better prices, 
              reliable markets, and continuous support.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Register & Onboard</h3>
                    <p className="text-gray-600">
                      Fill out our simple registration form or call us directly. 
                      Our team will visit your farm for verification and quality assessment.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Get Market Orders</h3>
                    <p className="text-gray-600">
                      Receive regular orders from our business network. 
                      We'll provide you with detailed specifications and delivery timelines.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Harvest & Deliver</h3>
                    <p className="text-gray-600">
                      Harvest your produce according to our quality standards and 
                      deliver to our collection centers or arrange pickup.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Receive Payment</h3>
                    <p className="text-gray-600">
                      Get paid within 7 days of delivery. We offer transparent pricing 
                      and multiple payment options including UPI and bank transfers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-green-200">
              <h3 className="text-2xl font-bold mb-6 text-green-700">Farmer Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Better prices (20-30% higher than market)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Guaranteed market access</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Training and support programs</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Timely payments</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Quality improvement guidance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Businesses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works for Businesses</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Get fresh, quality produce delivered to your doorstep with our 
              streamlined ordering and delivery process.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg border border-green-200 order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-6 text-green-700">Business Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Fresh produce delivered within 12 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Consistent quality and supply</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Competitive pricing</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Flexible ordering options</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Place Your Order</h3>
                    <p className="text-gray-600">
                      Order through our website, mobile app, or call our sales team. 
                      Specify your requirements, quantities, and delivery preferences.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                    <p className="text-gray-600">
                      Our quality team inspects and approves all produce before dispatch. 
                      We ensure only the best quality reaches your business.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                    <p className="text-gray-600">
                      Fresh produce is delivered to your location within 12 hours. 
                      We offer flexible delivery slots to suit your business hours.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">
                      Our team provides continuous support, regular check-ins, 
                      and helps optimize your procurement strategy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powered by Technology</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our digital platform ensures transparency, efficiency, and real-time tracking 
              throughout the entire supply chain process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-green-600" />
                </div>
                <Typography variant="h6" component="h3">Real-time Tracking</Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Track your orders from farm to delivery with our advanced 
                  logistics management system.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <Typography variant="h6" component="h3">Digital Dashboard</Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Access your account, view orders, and manage deliveries 
                  through our user-friendly digital platform.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <Typography variant="h6" component="h3">Quality Monitoring</Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Monitor quality metrics and receive alerts for any 
                  quality-related issues in real-time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg opacity-90 mb-8">
            Join thousands of farmers and businesses who are already benefiting from the organicFresh platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Join as Farmer
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-green-700 transition-colors">
              Partner with Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
