import { Card, CardContent, CardHeader, Typography } from "@/components/mui";
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
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <Typography variant="h6" component="h3">Integrity</Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We believe in transparent, honest relationships with all our stakeholders - 
                  farmers, businesses, and employees.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-green-600" />
                </div>
                <Typography variant="h6" component="h3">Excellence</Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our operations, 
                  from sourcing to delivery to customer service.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <Typography variant="h6" component="h3">Collaboration</Typography>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We believe in the power of partnerships and collaborative efforts 
                  to create sustainable solutions for all.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the passionate individuals driving organicFresh towards its mission.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="w-12 h-12 text-green-600" />
              </div>
              <Typography variant="h6" component="h3">CEO & Founder</Typography>
              <CardContent>
                <p className="text-gray-600 mb-2">Leading the vision and strategic direction</p>
                <p className="text-sm text-green-600 font-medium">15+ years in agriculture</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Leaf className="w-12 h-12 text-green-600" />
              </div>
              <Typography variant="h6" component="h3">Head of Operations</Typography>
              <CardContent>
                <p className="text-gray-600 mb-2">Managing day-to-day operations</p>
                <p className="text-sm text-green-600 font-medium">12+ years in supply chain</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-24 h-24 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Award className="w-12 h-12 text-green-600" />
              </div>
              <Typography variant="h6" component="h3">Head of Technology</Typography>
              <CardContent>
                <p className="text-gray-600 mb-2">Driving digital innovation</p>
                <p className="text-sm text-green-600 font-medium">10+ years in tech</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-lg opacity-90">
              The real difference we've made in the lives of farmers and businesses.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-300 mb-2">5000+</div>
              <div className="text-green-200">Farmers Empowered</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-300 mb-2">1000+</div>
              <div className="text-green-200">Business Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-300 mb-2">₹50Cr+</div>
              <div className="text-green-200">Farmer Income Generated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-300 mb-2">15+</div>
              <div className="text-green-200">States Covered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
