import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Truck, Leaf, Award, ShoppingBag } from "lucide-react";
import Image from "next/image";

const businessFeatures = [
  {
    icon: Leaf,
    title: "Farm-Fresh Sourcing",
    description: "Direct connections with farmers and FPOs for the freshest produce"
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "12-hour delivery guarantee with 99.99% fulfillment rate"
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Rigorous quality checks to meet your business standards"
  },
  {
    icon: ShoppingBag,
    title: "Comprehensive Range",
    description: "Seasonal and exotic produce available year-round"
  }
];

const businessTypes = [
  "Supermarkets",
  "Quick Commerce Platforms", 
  "Retail Chains",
  "HORECA (Hotels, Restaurants, Cafes)",
  "Modern Trade",
  "Distributors"
];

export default function BusinessPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            For <span className="text-yellow-300">Business</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            The largest B2B fresh produce distributor connecting businesses directly to farms
          </p>
          <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100" asChild>
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose organicFresh for Your Business?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We deliver farm-fresh fruits and vegetables tailored to meet the dynamic needs of modern businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessFeatures.map((feature) => (
              <div key={feature.title} className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
                <feature.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">We Serve All Business Types</h2>
            <p className="text-gray-600">From small retailers to large chains</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {businessTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <h3 className="text-lg font-semibold">{type}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Supply Chain?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join hundreds of businesses that trust organicFresh
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-gray-100" asChild>
              <Link href="/contact">Contact Sales Team</Link>
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
