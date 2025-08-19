import { Users, Award, MapPin, Clock, Briefcase, GraduationCap, Heart, Globe } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-50 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">
            Join Our Team
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Build the <span className="text-green-700">Future</span> of <span className="text-yellow-600">Agriculture</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join organicFresh and be part of a mission to transform India's agricultural landscape 
            through technology, innovation, and sustainable practices.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Join organicFresh?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're not just building a company - we're building a movement that will change 
              how agriculture works in India.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Purpose-Driven Work</h3>
              <p className="text-gray-600">
                Every day, you'll contribute to empowering farmers and building 
                a more sustainable food system.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                <Globe className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">National Impact</h3>
              <p className="text-gray-600">
                Work on solutions that will benefit millions of farmers 
                across India and beyond.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                <Award className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Growth & Learning</h3>
              <p className="text-gray-600">
                Rapidly growing company with opportunities for career advancement 
                and skill development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore opportunities to join our dynamic team and make a real difference
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Position 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-green-700 mb-2">Senior Software Engineer</h3>
                  <p className="text-gray-600 mb-3">
                    Build scalable web applications and mobile apps that power our agricultural platform.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Full-time
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Bengaluru (Hybrid)
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      3-5 years
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="bg-green-600 text-white px-6 py-2 rounded-md font-medium hover:bg-green-700 transition-colors">
                    Apply Now
                  </button>
                  <span className="text-sm text-gray-500 text-center">Posted 2 days ago</span>
                </div>
              </div>
            </div>

            {/* Position 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">Agricultural Operations Manager</h3>
                  <p className="text-gray-600 mb-3">
                    Lead our field operations team and ensure quality standards across all farming partnerships.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Full-time
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Karnataka (Field-based)
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      5-8 years
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
                    Apply Now
                  </button>
                  <span className="text-sm text-gray-500 text-center">Posted 1 week ago</span>
                </div>
              </div>
            </div>

            {/* Position 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-purple-700 mb-2">Business Development Executive</h3>
                  <p className="text-gray-600 mb-3">
                    Expand our business network and build partnerships with restaurants, retailers, and food processors.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Full-time
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Multiple Cities
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      2-4 years
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="bg-purple-600 text-white px-6 py-2 rounded-md font-medium hover:bg-purple-700 transition-colors">
                    Apply Now
                  </button>
                  <span className="text-sm text-gray-500 text-center">Posted 3 days ago</span>
                </div>
              </div>
            </div>

            {/* Position 4 */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-orange-700 mb-2">Data Analyst</h3>
                  <p className="text-gray-600 mb-3">
                    Analyze market trends, farmer data, and supply chain metrics to drive business decisions.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      Full-time
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Bengaluru (Remote-friendly)
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      1-3 years
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="bg-orange-600 text-white px-6 py-2 rounded-md font-medium hover:bg-orange-700 transition-colors">
                    Apply Now
                  </button>
                  <span className="text-sm text-gray-500 text-center">Posted 5 days ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Culture & Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We foster a culture of innovation, collaboration, and impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Collaborative Environment</h3>
                  <p className="text-gray-600">
                    We believe in the power of teamwork and encourage open communication 
                    across all levels of the organization.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Continuous Learning</h3>
                  <p className="text-gray-600">
                    We invest in your growth with training programs, mentorship, 
                    and opportunities to work on cutting-edge technologies.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Work-Life Balance</h3>
                  <p className="text-gray-600">
                    We understand the importance of personal time and offer 
                    flexible working arrangements and wellness programs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Recognition & Rewards</h3>
                  <p className="text-gray-600">
                    We celebrate achievements and provide competitive compensation, 
                    including equity options for long-term commitment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits & Perks</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We take care of our team with comprehensive benefits and exciting perks
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-6 text-center">
              <h3 className="font-semibold mb-2">Health & Wellness</h3>
              <p className="text-sm text-gray-600">Comprehensive health insurance, gym memberships, and wellness programs</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <h3 className="font-semibold mb-2">Learning & Development</h3>
              <p className="text-sm text-gray-600">Conference attendance, online courses, and skill development budgets</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <h3 className="font-semibold mb-2">Flexible Work</h3>
              <p className="text-sm text-gray-600">Remote work options, flexible hours, and generous PTO</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <h3 className="font-semibold mb-2">Team Building</h3>
              <p className="text-sm text-gray-600">Regular team events, offsites, and social activities</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <h3 className="font-semibold mb-2">Financial Benefits</h3>
              <p className="text-sm text-gray-600">Competitive salary, equity options, and performance bonuses</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center">
              <h3 className="font-semibold mb-2">Impact & Purpose</h3>
              <p className="text-sm text-gray-600">Work that makes a real difference in farmers' lives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Application Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple and transparent process to join our team
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h3 className="font-semibold mb-2">Apply</h3>
                <p className="text-sm text-gray-600">Submit your application through our portal</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h3 className="font-semibold mb-2">Review</h3>
                <p className="text-sm text-gray-600">Our team reviews your application</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h3 className="font-semibold mb-2">Interview</h3>
                <p className="text-sm text-gray-600">Technical and cultural fit discussions</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <h3 className="font-semibold mb-2">Offer</h3>
                <p className="text-sm text-gray-600">Welcome to the organicFresh family!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join us in building the future of agriculture in India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 bg-white text-green-700 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
              <Users className="w-5 h-5" />
              View All Positions
            </button>
            <button className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-green-700 transition-colors">
              <GraduationCap className="w-5 h-5" />
              Internship Program
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
