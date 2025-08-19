import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Let's <span className="text-green-700">Connect</span> and <span className="text-yellow-600">Collaborate</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your fresh produce supply? We're here to help you get started.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Our Location</h3>
                    <p className="text-gray-600">
                      Jyothi Nagar, Nelamgala, Bengaluru, Karnataka, 562123
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone Number</h3>
                    <p className="text-gray-600">+91 8438327763</p>
                    <p className="text-sm text-green-600 mt-1">Available 9 AM - 6 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email Address</h3>
                    <p className="text-gray-600">info@organicfresh.co.in</p>
                    <p className="text-sm text-green-600 mt-1">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-100 rounded-lg border border-green-200">
                <p className="text-sm text-green-800">
                  <strong>💡 Pro Tip:</strong> Call us between 9 AM - 6 PM for immediate assistance and best deals!
                </p>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-lg border border-green-200 p-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-semibold text-gray-900">Send us a Message</h2>
                </div>
                <div>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="What is this about?"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-3 px-6 rounded-md font-medium hover:bg-green-700 transition-colors duration-200"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Find Us</h2>
            <p className="text-gray-600">Visit our office in Bengaluru</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map Coming Soon</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Jyothi Nagar, Nelamgala, Bengaluru, Karnataka, 562123
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Quick answers to common questions</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">How quickly do you respond to inquiries?</h3>
              <p className="text-gray-600">We typically respond to all inquiries within 24 hours. For urgent matters, calling us directly is the fastest way to get assistance.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">What are your business hours?</h3>
              <p className="text-gray-600">We're open Monday through Friday from 9 AM to 6 PM, and Saturday from 9 AM to 2 PM. We're closed on Sundays.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">Do you offer services outside of Bengaluru?</h3>
              <p className="text-gray-600">Yes! While our main office is in Bengaluru, we serve clients across Karnataka and are expanding to other states. Contact us to discuss your specific location and requirements.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-3">Can I schedule a meeting to discuss my business needs?</h3>
              <p className="text-gray-600">Absolutely! We welcome in-person meetings and consultations. Please call us to schedule an appointment that works for both parties.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Let's discuss how organicFresh can transform your business</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+918438327763"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
            <a
              href="mailto:info@organicfresh.co.in"
              className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-green-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
