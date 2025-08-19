import { Card, CardContent, CardHeader, Typography } from "@/components/mui";
import { RefreshCw, CheckCircle, AlertTriangle, Clock, DollarSign, Shield, FileText, Users } from "lucide-react";

export default function RefundPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            Customer Satisfaction
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Refund <span className="text-green-700">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We stand behind the quality of our products. Our transparent refund policy 
            ensures your complete satisfaction with every purchase.
          </p>
        </div>
      </section>

      {/* Policy Overview */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg text-blue-800 mb-2">Our Commitment</h3>
                <p className="text-blue-700">
                  At organicFresh, we are committed to delivering the highest quality fresh produce. 
                  If you're not completely satisfied with your order, we'll make it right with our 
                  comprehensive refund and replacement policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Eligibility */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">When Refunds Are Available</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer refunds and replacements in the following situations to ensure 
              your complete satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow border-green-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <Typography variant="h6" component="h3" className="text-xl">Quality Issues</Typography>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Damaged or spoiled produce</li>
                  <li>Products not meeting quality standards</li>
                  <li>Incorrect product specifications</li>
                  <li>Packaging defects affecting freshness</li>
                  <li>Temperature control failures during delivery</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow border-green-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <Typography variant="h6" component="h3" className="text-xl">Service Issues</Typography>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Late deliveries beyond promised timeframe</li>
                  <li>Incorrect order quantities</li>
                  <li>Missing items from order</li>
                  <li>Delivery to wrong location</li>
                  <li>Poor customer service experience</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Refund Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How to Request a Refund</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to request a refund or replacement for your order.
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
                    <h3 className="text-xl font-semibold mb-2">Report the Issue</h3>
                    <p className="text-gray-600">
                      Contact us within 24 hours of delivery to report quality issues 
                      or service problems.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Provide Details</h3>
                    <p className="text-gray-600">
                      Share order details, photos of issues, and specific problems 
                      you encountered.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Assessment</h3>
                    <p className="text-gray-600">
                      Our team will assess the issue and determine the appropriate 
                      resolution within 4 hours.
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
                    <h3 className="text-xl font-semibold mb-2">Resolution</h3>
                    <p className="text-gray-600">
                      Choose between a full refund, partial refund, replacement, 
                      or credit for future orders.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Processing</h3>
                    <p className="text-gray-600">
                      Refunds are processed within 3-5 business days, while 
                      replacements are delivered within 24 hours.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Follow-up</h3>
                    <p className="text-gray-600">
                      We'll follow up to ensure you're satisfied with the resolution 
                      and address any remaining concerns.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Refund Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Types of Refunds & Replacements</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We offer flexible solutions to address different types of issues 
              and ensure your satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <Typography variant="h6" component="h3">Full Refund</Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  100% refund for completely unsatisfactory orders or major quality issues.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <RefreshCw className="w-8 h-8 text-green-600" />
                </div>
                <Typography variant="h6" component="h3">Replacement</Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Fresh replacement products delivered within 24 hours for quality issues.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <Typography variant="h6" component="h3">Partial Refund</Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Partial refund for minor issues or when only part of the order is affected.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock className="w-8 h-8 text-green-600" />
                </div>
                <Typography variant="h6" component="h3">Credit Note</Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Credit for future orders when immediate refund isn't preferred.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Refund Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Refund Processing Timeline</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We process refunds quickly to ensure you receive your money back 
              as soon as possible.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardHeader>
                <Typography variant="h5" component="h3" className="text-2xl text-center">Processing Timeframes</Typography>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-lg mb-2">Issue Assessment</h4>
                      <p className="text-2xl font-bold text-green-600">4 Hours</p>
                      <p className="text-sm text-gray-600 mt-1">Maximum time to evaluate</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-lg mb-2">Refund Processing</h4>
                      <p className="text-2xl font-bold text-green-600">3-5 Days</p>
                      <p className="text-sm text-gray-600 mt-1">Bank processing time</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-lg mb-2">Replacement Delivery</h4>
                      <p className="text-2xl font-bold text-green-600">24 Hours</p>
                      <p className="text-sm text-gray-600 mt-1">For quality issues</p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-lg mb-4">Factors Affecting Processing Time:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                      <li>Payment method used (UPI, bank transfer, digital wallets)</li>
                      <li>Bank processing times and policies</li>
                      <li>Issue complexity and investigation requirements</li>
                      <li>Documentation completeness</li>
                      <li>Business hours and response times</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Exclusions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What's Not Covered</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Understanding the limitations of our refund policy helps set proper 
              expectations for all parties.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 hover:shadow-lg transition-shadow border-red-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                  <Typography variant="h6" component="h3" className="text-xl">Policy Exclusions</Typography>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Issues reported after 24 hours of delivery</li>
                  <li>Personal taste preferences or subjective quality</li>
                  <li>Damage caused by improper storage after delivery</li>
                  <li>Orders cancelled after processing begins</li>
                  <li>Force majeure events beyond our control</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="p-6 hover:shadow-lg transition-shadow border-red-200">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-red-600" />
                  <Typography variant="h6" component="h3" className="text-xl">Non-Refundable Items</Typography>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Delivery charges for completed deliveries</li>
                  <li>Custom packaging or special handling fees</li>
                  <li>Express delivery charges for urgent orders</li>
                  <li>Administrative or processing fees</li>
                  <li>Third-party service charges</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardHeader>
                <Typography variant="h6" component="h3" className="flex items-center gap-3 text-xl">
                  <Users className="w-6 h-6 text-green-600" />
                  Need Help with a Refund?
                </Typography>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Our customer support team is here to help you with any refund requests 
                    or questions about our policy.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Contact Methods:</h4>
                      <div className="space-y-2 text-gray-700">
                        <p><strong>Phone:</strong> +91 8438327763</p>
                        <p><strong>Email:</strong> support@organicfresh.co.in</p>
                        <p><strong>WhatsApp:</strong> +91 8438327763</p>
                        <p><strong>Live Chat:</strong> Available on our website</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Business Hours:</h4>
                      <div className="space-y-2 text-gray-700">
                        <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                        <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
                        <p><strong>Sunday:</strong> Closed</p>
                        <p><strong>Emergency:</strong> 24/7 for urgent issues</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-green-100 rounded-lg border border-green-200">
                    <p className="text-sm text-green-800">
                      <strong>💡 Pro Tip:</strong> For faster resolution, please have your order number, 
                      photos of the issue, and specific problem description ready when contacting us.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our refund policy and process.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <CardHeader>
                <Typography variant="h6" component="h3" className="text-lg">How long do I have to report an issue?</Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  You must report quality issues within 24 hours of delivery. 
                  Service issues should be reported immediately.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardHeader>
                <Typography variant="h6" component="h3" className="text-lg">What payment methods are refunded?</Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We refund to the original payment method used for the order. 
                  Bank transfers may take 3-5 business days.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardHeader>
                <Typography variant="h6" component="h3" className="text-lg">Can I get a replacement instead of a refund?</Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! We offer fresh replacements for quality issues, typically 
                  delivered within 24 hours.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-6">
              <CardHeader>
                <Typography variant="h6" component="h3" className="text-lg">What if I'm not satisfied with the resolution?</Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Contact our escalation team. We're committed to finding a 
                  solution that meets your satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg opacity-90 mb-8">
            Our customer support team is ready to help you with any questions 
            about our refund policy or assistance with your order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              Contact Support
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-green-700 transition-colors">
              View Terms & Conditions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
