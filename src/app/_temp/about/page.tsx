import { Leaf, Users, Award, Target, Heart, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            About Us
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Our Story of <span className="text-green-700">Growth</span> and <span className="text-yellow-600">Innovation</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From humble beginnings to becoming a trusted partner for thousands of farmers and businesses across India.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To bridge the gap between farmers and markets, ensuring fair compensation for agricultural producers 
                while delivering fresh, quality produce to businesses and consumers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Leaf className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Sustainable Farming</h3>
                    <p className="text-gray-600">Promoting eco-friendly agricultural practices</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Community Building</h3>
                    <p className="text-gray-600">Creating strong networks of farmers and businesses</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                To become India's most trusted and innovative agricultural supply chain platform, 
                revolutionizing how fresh produce reaches from farm to table.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Market Leadership</h3>
                    <p className="text-gray-600">Leading the digital transformation of agriculture</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg">Global Reach</h3>
                    <p className="text-gray-600">Expanding our impact beyond borders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide every decision we make and every action we take.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We believe in transparent, honest relationships with all our stakeholders - 
                farmers, businesses, and employees.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for the highest quality in everything we do, from sourcing produce 
                to customer service delivery.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of partnerships and work closely with farmers, 
                businesses, and communities to create mutual success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From a small startup to a trusted name in agricultural supply chain management.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2020
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Foundation</h3>
                  <p className="text-gray-600">
                    organicFresh was founded with a vision to revolutionize the agricultural supply chain 
                    and create better opportunities for farmers across India.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2021
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">First 100 Farmers</h3>
                  <p className="text-gray-600">
                    We successfully onboarded our first 100 farmers and established partnerships 
                    with local businesses in Bengaluru.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2022
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Expansion</h3>
                  <p className="text-gray-600">
                    Expanded operations to multiple districts in Karnataka, serving over 500 farmers 
                    and 100+ business clients.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2023
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Digital Platform</h3>
                  <p className="text-gray-600">
                    Launched our comprehensive digital platform, making it easier for farmers 
                    and businesses to connect and transact.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2024
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Market Leadership</h3>
                  <p className="text-gray-600">
                    Became the leading B2B fresh produce platform in Karnataka, serving 2000+ farmers 
                    and 500+ business partners.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2025
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Future Forward</h3>
                  <p className="text-gray-600">
                    Continuing our expansion across India, with plans to serve 10,000+ farmers 
                    and 2000+ businesses by year-end.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the passionate individuals driving organicFresh's mission to transform agriculture.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rajiv Kumar</h3>
              <p className="text-green-600 font-medium mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Agricultural expert with 15+ years of experience in supply chain management 
                and farmer empowerment initiatives.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Award className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Priya Sharma</h3>
              <p className="text-green-600 font-medium mb-3">Head of Operations</p>
              <p className="text-gray-600 text-sm">
                Operations specialist focused on building efficient supply chains 
                and ensuring quality standards across all touchpoints.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Target className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Amit Patel</h3>
              <p className="text-green-600 font-medium mb-3">Head of Technology</p>
              <p className="text-gray-600 text-sm">
                Tech innovator driving digital transformation in agriculture 
                through cutting-edge platforms and solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of the agricultural revolution that's transforming India's farming landscape.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/join"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              <Users className="w-5 h-5" />
              Join as Farmer
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-green-700 transition-colors"
            >
              <Award className="w-5 h-5" />
              Partner with Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
