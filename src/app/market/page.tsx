
'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, Minus, BarChart3, Calendar, MapPin } from "lucide-react";

const marketPrices = [
  {
    crop: "Tomatoes",
    currentPrice: "₹45/kg",
    previousPrice: "₹42/kg",
    change: "+7.1%",
    trend: "up",
    location: "Bangalore",
    lastUpdated: "Today"
  },
  {
    crop: "Onions",
    currentPrice: "₹28/kg",
    previousPrice: "₹32/kg",
    change: "-12.5%",
    trend: "down",
    location: "Bangalore",
    lastUpdated: "Today"
  },
  {
    crop: "Potatoes",
    currentPrice: "₹35/kg",
    previousPrice: "₹35/kg",
    change: "0%",
    trend: "stable",
    location: "Bangalore",
    lastUpdated: "Today"
  },
  {
    crop: "Carrots",
    currentPrice: "₹38/kg",
    previousPrice: "₹35/kg",
    change: "+8.6%",
    trend: "up",
    location: "Bangalore",
    lastUpdated: "Today"
  },
  {
    crop: "Cabbage",
    currentPrice: "₹22/kg",
    previousPrice: "₹25/kg",
    change: "-12%",
    trend: "down",
    location: "Bangalore",
    lastUpdated: "Today"
  },
  {
    crop: "Cauliflower",
    currentPrice: "₹30/kg",
    previousPrice: "₹28/kg",
    change: "+7.1%",
    trend: "up",
    location: "Bangalore",
    lastUpdated: "Today"
  }
];

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case "up":
      return <TrendingUp className="h-5 w-5 text-green-600" />;
    case "down":
      return <TrendingDown className="h-5 w-5 text-red-600" />;
    default:
      return <Minus className="h-5 w-5 text-gray-600" />;
  }
};

const getChangeColor = (trend: string) => {
  switch (trend) {
    case "up":
      return "text-green-600";
    case "down":
      return "text-red-600";
    default:
      return "text-gray-600";
  }
};

export default function MarketPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Market <span className="text-yellow-300">Prices</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Get real-time market prices for your crops to make informed selling decisions.
          </p>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Current Market Prices</h2>
            <p className="text-gray-600">Live prices from Bangalore markets</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {marketPrices.map((item) => (
              <div key={item.crop} className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">{item.crop}</h3>
                  {getTrendIcon(item.trend)}
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Current Price:</span>
                    <span className="text-2xl font-bold text-green-700">{item.currentPrice}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Previous Price:</span>
                    <span className="text-lg">{item.previousPrice}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Change:</span>
                    <span className={`font-semibold ${getChangeColor(item.trend)}`}>
                      {item.change}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {item.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {item.lastUpdated}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Market Insights</h2>
            <p className="text-gray-600">Understanding market trends and patterns</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
                <h3 className="text-xl font-semibold">Rising Prices</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Tomatoes, carrots, and cauliflower are showing upward trends due to increased demand 
                and seasonal factors. This is a good time to sell these crops.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Tomatoes: +7.1% increase</li>
                <li>• Carrots: +8.6% increase</li>
                <li>• Cauliflower: +7.1% increase</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <TrendingDown className="h-8 w-8 text-red-600" />
                <h3 className="text-xl font-semibold">Falling Prices</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Onions and cabbage prices are declining due to increased supply and seasonal harvest. 
                Consider holding these crops if possible.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Onions: -12.5% decrease</li>
                <li>• Cabbage: -12% decrease</li>
                <li>• Potatoes: Stable prices</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Price History Chart */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Price Trends</h2>
            <p className="text-gray-600">Track price movements over time</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-md">
            <div className="text-center">
              <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Interactive Price Charts</h3>
              <p className="text-gray-600 mb-6">
                Detailed price history and trend analysis coming soon. 
                We're working on advanced charting features to help you make better decisions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-green-600 hover:bg-green-700">
                  Get Price Alerts
                </Button>
                <Button variant="outline">
                  Download Price Report
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Sell at Best Prices?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join organicFresh and get access to better markets and fair pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-gray-100" asChild>
              <Link href="/join">Join as Farmer</Link>
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
