import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Leaf, Calendar, MapPin, TrendingUp, Info } from "lucide-react";
import Image from "next/image";

const crops = [
  {
    name: "Tomatoes",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=400&auto=format&fit=crop",
    season: "Year-round",
    regions: ["Karnataka", "Maharashtra", "Tamil Nadu"],
    currentPrice: "₹45/kg",
    description: "Fresh, red tomatoes perfect for cooking and salads. Available in various sizes and qualities."
  },
  {
    name: "Onions",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?q=80&w=400&auto=format&fit=crop",
    season: "Kharif & Rabi",
    regions: ["Karnataka", "Maharashtra", "Gujarat"],
    currentPrice: "₹28/kg",
    description: "Premium quality onions with excellent storage properties. Available in red and white varieties."
  },
  {
    name: "Potatoes",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=400&auto=format&fit=crop",
    season: "Rabi",
    regions: ["Uttar Pradesh", "West Bengal", "Bihar"],
    currentPrice: "₹35/kg",
    description: "High-quality potatoes suitable for various culinary uses. Excellent for chips and cooking."
  },
  {
    name: "Carrots",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=400&auto=format&fit=crop",
    season: "Winter",
    regions: ["Karnataka", "Maharashtra", "Himachal Pradesh"],
    currentPrice: "₹38/kg",
    description: "Sweet and crunchy carrots rich in nutrients. Perfect for salads and cooking."
  },
  {
    name: "Cabbage",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=400&auto=format&fit=crop",
    season: "Winter",
    regions: ["Karnataka", "Maharashtra", "West Bengal"],
    currentPrice: "₹22/kg",
    description: "Fresh green cabbage heads perfect for coleslaw and cooking. Excellent storage life."
  },
  {
    name: "Cauliflower",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=400&auto=format&fit=crop",
    season: "Winter",
    regions: ["Karnataka", "Maharashtra", "Himachal Pradesh"],
    currentPrice: "₹30/kg",
    description: "Premium white cauliflower heads. Perfect for curries and side dishes."
  }
];

export default function CropsPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-yellow-300">Crops</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Discover our wide range of fresh, high-quality fruits and vegetables sourced directly from trusted farmers.
          </p>
        </div>
      </section>

      {/* Crops Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Fresh Produce Collection</h2>
            <p className="text-gray-600">Quality assured crops from our network of farmers</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crops.map((crop) => (
              <div key={crop.name} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative">
                  <Image
                    src={crop.image}
                    width={400}
                    height={300}
                    alt={crop.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {crop.currentPrice}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{crop.name}</h3>
                  <p className="text-gray-600 mb-4">{crop.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span>Season: {crop.season}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>Regions: {crop.regions.join(", ")}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-700">{crop.currentPrice}</span>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Quality Assurance</h2>
            <p className="text-gray-600">Our commitment to delivering the best produce</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh from Farm</h3>
              <p className="text-gray-600">
                All produce is harvested fresh and delivered within 24 hours to ensure maximum freshness.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Standards</h3>
              <p className="text-gray-600">
                Rigorous quality checks ensure only the best produce reaches our customers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Info className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Traceability</h3>
              <p className="text-gray-600">
                Complete traceability from farm to table for transparency and quality assurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Availability */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Seasonal Availability</h2>
            <p className="text-gray-600">Plan your procurement based on seasonal availability</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Kharif Season (June-October)</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Onions</li>
                <li>• Tomatoes</li>
                <li>• Green vegetables</li>
                <li>• Seasonal fruits</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-green-700">Rabi Season (November-March)</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Potatoes</li>
                <li>• Onions</li>
                <li>• Cabbage</li>
                <li>• Cauliflower</li>
                <li>• Carrots</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Fresh Produce for Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us to discuss your requirements and get the best prices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-gray-100" asChild>
              <Link href="/contact">Get In Touch</Link>
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
