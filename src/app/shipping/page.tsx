import { Card, CardContent, CardHeader, Typography } from "@/components/mui";
import { Truck, MapPin, Clock, Package, Shield, AlertTriangle, CheckCircle, DollarSign } from "lucide-react";

export default function ShippingPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            Delivery Information
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Shipping & <span className="text-green-700">Delivery</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fast, reliable, and temperature-controlled delivery to ensure your fresh produce 
            reaches you in perfect condition, every time.
          </p>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Delivery Coverage</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We currently serve Bangalore and surrounding areas with plans to expand 
              to other major cities across India.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <Typography variant="h6" component="h3">Local Delivery</Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  <strong>Bangalore City & Metro Area</strong>
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Central Bangalore</li>
                  <li>• Electronic City</li>
                  <li>• Whitefield</li>
                  <li>• Sarjapur Road</li>
                  <li>• Outer Ring Road</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Truck className="w-8 h-8 text-green-600" />
                </div>
                <Typography variant="h6" component="h3">Extended Coverage</Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  <strong>Bangalore Rural & Nearby Cities</strong>
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Nelamangala</li>
                  <li>• Doddaballapur</li>
                  <li>• Devanahalli</li>
                  <li>• Ramanagara</li>
                  <li>• Magadi</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Package className="w-8 h-8 text-green-600" />
                </div>
                <Typography variant="h6" component="h3">Coming Soon</Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  <strong>Expansion Plans</strong>
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Mysore</li>
                  <li>• Chennai</li>
                  <li>• Hyderabad</li>
                  <li>• Mumbai</li>
                  <li>• Delhi NCR</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Our Delivery Works</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From farm to your doorstep in just a few simple steps, ensuring 
              freshness and quality throughout the journey.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Order Placement</h3>
                    <p className="text-gray-600">
                      Place your order through our platform, specifying delivery preferences, 
                      quantities, and delivery time slots.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Check</h3>
                    <p className="text-gray-600">
                      Our quality team inspects all produce before dispatch, ensuring 
                      only the best quality reaches you.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Packaging & Dispatch</h3>
                    <p className="text-gray-600">
                      Products are carefully packaged in temperature-controlled containers 
                      and dispatched for delivery.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Real-time Tracking</h3>
                    <p className="text-gray-600">
                      Track your delivery in real-time through our platform, 
                      with updates at every stage.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Delivery</h3>
                    <p className="text-gray-600">
                      Fresh produce delivered to your doorstep within the promised timeframe, 
                      maintaining optimal temperature conditions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Quality Verification</h3>
                    <p className="text-gray-600">
                      Verify the quality of received products and report any issues 
                      within 24 hours for immediate resolution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Delivery Options & Timings</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Choose the delivery option that best suits your business needs 
              and schedule.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-8 h-8 text-green-600" />
                  <Typography variant="h6" component="h3" className="text-xl">Standard Delivery</Typography>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Delivery within 12 hours</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <DollarSign className="w-4 h-4" />
                    <span>Free for orders above ₹5,000</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>Available in all covered areas</span>
                  </div>
                  <p className="text-gray-600 mt-4">
                    Perfect for regular business operations with flexible delivery windows.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Truck className="w-8 h-8 text-green-600" />
                  <Typography variant="h6" component="h3" className="text-xl">Express Delivery</Typography>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Delivery within 4 hours</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <DollarSign className="w-4 h-4" />
                    <span>Additional ₹200 charge</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>Limited to core Bangalore areas</span>
                  </div>
                  <p className="text-gray-600 mt-4">
                    Ideal for urgent orders and last-minute requirements.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Package className="w-8 h-8 text-green-600" />
                  <Typography variant="h6" component="h3" className="text-xl">Scheduled Delivery</Typography>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Choose your preferred time slot</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <DollarSign className="w-4 h-4" />
                    <span>Standard delivery rates apply</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>Available in all covered areas</span>
                  </div>
                  <p className="text-gray-600 mt-4">
                    Perfect for businesses with specific delivery time requirements.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                  <Typography variant="h6" component="h3" className="text-xl">Bulk Delivery</Typography>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>24-48 hours advance notice</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <DollarSign className="w-4 h-4" />
                    <span>Discounted rates for large orders</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>Available in all covered areas</span>
                  </div>
                  <p className="text-gray-600 mt-4">
                    Cost-effective solution for large-scale procurement needs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Charges */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Delivery Charges & Policies</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with no hidden costs. Delivery charges are based on 
              distance, order size, and delivery option selected.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardHeader>
                <Typography variant="h5" component="h3" className="text-2xl text-center">Delivery Charge Structure</Typography>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-lg mb-2">Local Delivery</h4>
                      <p className="text-2xl font-bold text-green-600">₹0 - ₹150</p>
                      <p className="text-sm text-gray-600 mt-1">0-25 km radius</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-lg mb-2">Extended Area</h4>
                      <p className="text-2xl font-bold text-green-600">₹150 - ₹300</p>
                      <p className="text-sm text-gray-600 mt-1">25-50 km radius</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-lg mb-2">Rural Areas</h4>
                      <p className="text-2xl font-bold text-green-600">₹300 - ₹500</p>
                      <p className="text-sm text-gray-600 mt-1">50+ km radius</p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-lg mb-4">Free Delivery Conditions:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>Orders above ₹5,000 (local delivery)</li>
                      <li>Orders above ₹10,000 (extended area)</li>
                      <li>Orders above ₹15,000 (rural areas)</li>
                      <li>Premium business partners (monthly volume > ₹50,000)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quality Assurance During Delivery</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We maintain strict quality standards throughout the delivery process 
              to ensure your produce arrives in perfect condition.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Temperature Control</h3>
              <p className="text-gray-600 text-sm">
                Maintained optimal temperature throughout the journey using 
                specialized refrigerated vehicles.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure Packaging</h3>
              <p className="text-gray-600 text-sm">
                Products are carefully packaged to prevent damage and maintain 
                freshness during transportation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality Checks</h3>
              <p className="text-gray-600 text-sm">
                Multiple quality inspections at pickup, during transit, and 
                before final delivery.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Real-time Monitoring</h3>
              <p className="text-gray-600 text-sm">
                GPS tracking and temperature monitoring throughout the delivery 
                process for complete transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3 text-xl">
                  <AlertTriangle className="w-6 h-6 text-yellow-600" />
                  Important Delivery Information
                </Typography>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Delivery Time Slots:</h4>
                      <p className="text-gray-600">Morning: 8:00 AM - 12:00 PM | Afternoon: 2:00 PM - 6:00 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Advance Notice Required:</h4>
                      <p className="text-gray-600">Minimum 4 hours for standard delivery, 24 hours for bulk orders</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Quality Verification:</h4>
                      <p className="text-gray-600">Please verify product quality within 24 hours of delivery</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Contact Information:</h4>
                      <p className="text-gray-600">Delivery team: +91 8438327763 | Support: support@organicfresh.co.in</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Delivery Service?</h2>
          <p className="text-lg opacity-90 mb-8">
            Join hundreds of businesses that trust organicFresh for reliable, 
            fast, and quality-assured delivery of fresh produce.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Start Ordering Now
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-green-700 transition-colors">
              Contact Sales Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
