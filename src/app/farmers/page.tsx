import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, UserPlus, BarChart, Tractor, Award, Users } from "lucide-react";
import Image from "next/image";

const farmerBenefits = [
  {
    icon: Award,
    title: "Fair Pricing",
    description: "Transparent pricing models that ensure farmers receive fair compensation for their produce"
  },
  {
    icon: BarChart,
    title: "Market Access",
    description: "Reliable and regular market opportunities through our direct business-to-business connections"
  },
  {
    icon: UserPlus,
    title: "Training & Support",
    description: "Ongoing training sessions to improve productivity, crop quality, and best agricultural practices"
  },
  {
    icon: Users,
    title: "Community Network",
    description: "Join a network of 5000+ successful farmers and share knowledge and experiences"
  }
];

const onboardingSteps = [
  "Register your farm details",
  "Submit required documents",
  "Quality assessment visit",
  "Training session completion",
  "Start selling your produce"
];

export default function FarmersPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            For <span className="text-yellow-300">Farmers</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Join our growing network of successful farmers and benefit from our comprehensive support system
          </p>
          <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100" asChild>
            <Link href="/join">Join Our Network</Link>
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Join organicFresh?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to empowering farmers with technology and support they need to thrive
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {farmerBenefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4 p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <benefit.icon className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Simple Onboarding Process</h2>
            <p className="text-gray-600">Get started in just 5 easy steps</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              {onboardingSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-3">
                    {index + 1}
                  </div>
                  <p className="text-sm text-gray-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600">Hear from our successful farmers</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-semibold">Ramesh K, Kolar</h3>
              </div>
              <p className="text-gray-600 italic">
                "organicFresh has revolutionized how I sell my produce. The process is transparent, and I get fair prices for my hard work. My income has increased by 40% since joining."
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-semibold">Sita Devi, Malur</h3>
              </div>
              <p className="text-gray-600 italic">
                "The platform is so easy to use, and the regular payments are a huge plus. I've recommended it to all my fellow farmers. The training sessions have improved my crop quality significantly."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Farming Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join 5000+ successful farmers today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-gray-100" asChild>
              <Link href="/join">Join Our Network</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
