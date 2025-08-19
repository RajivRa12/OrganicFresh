
'use client';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CloudSun, CloudRain, Sun, Wind, Thermometer, Droplets, Calendar } from "lucide-react";

const weatherData = [
  {
    day: "Today",
    date: "Dec 15, 2024",
    condition: "Partly Cloudy",
    icon: CloudSun,
    high: "28°C",
    low: "18°C",
    humidity: "65%",
    wind: "12 km/h",
    description: "Good weather for outdoor farming activities"
  },
  {
    day: "Tomorrow",
    date: "Dec 16, 2024",
    condition: "Sunny",
    icon: Sun,
    high: "30°C",
    low: "19°C",
    humidity: "55%",
    wind: "8 km/h",
    description: "Excellent conditions for harvesting and field work"
  },
  {
    day: "Day After",
    date: "Dec 17, 2024",
    condition: "Light Rain",
    icon: CloudRain,
    high: "26°C",
    low: "17°C",
    humidity: "80%",
    wind: "15 km/h",
    description: "Light showers expected, good for crops"
  }
];

const farmingTips = [
  {
    condition: "Sunny Weather",
    tips: [
      "Best time for harvesting and field preparation",
      "Water crops early morning or evening",
      "Apply fertilizers in the morning",
      "Check for pest infestations"
    ]
  },
  {
    condition: "Rainy Weather",
    tips: [
      "Avoid heavy machinery in wet fields",
      "Check drainage systems",
      "Protect harvested produce from moisture",
      "Monitor for fungal diseases"
    ]
  },
  {
    condition: "Windy Weather",
    tips: [
      "Secure loose equipment and structures",
      "Avoid spraying pesticides in strong winds",
      "Check for crop damage",
      "Harvest delicate crops early"
    ]
  }
];

export default function WeatherPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Weather <span className="text-yellow-300">Forecast</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Plan your farming activities with accurate weather forecasts and farming tips.
          </p>
        </div>
      </section>

      {/* Current Weather */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">3-Day Weather Forecast</h2>
            <p className="text-gray-600">Bangalore Region - Updated every 6 hours</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {weatherData.map((day) => (
              <div key={day.day} className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold">{day.day}</h3>
                  <p className="text-gray-500 text-sm">{day.date}</p>
                </div>
                
                <div className="text-center mb-4">
                  <day.icon className="h-16 w-16 text-blue-600 mx-auto mb-2" />
                  <p className="text-lg font-medium">{day.condition}</p>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">High:</span>
                    <span className="font-semibold text-red-600">{day.high}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Low:</span>
                    <span className="font-semibold text-blue-600">{day.low}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Humidity:</span>
                    <span className="font-semibold">{day.humidity}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Wind:</span>
                    <span className="font-semibold">{day.wind}</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-600 italic">{day.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Farming Tips */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Farming Tips by Weather</h2>
            <p className="text-gray-600">Make the most of different weather conditions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {farmingTips.map((weather) => (
              <div key={weather.condition} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">{weather.condition}</h3>
                <ul className="space-y-2">
                  {weather.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600">
                      <span className="text-green-600 mt-1">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weather Alerts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Weather Alerts</h2>
            <p className="text-gray-600">Stay informed about severe weather conditions</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <CloudRain className="h-8 w-8 text-yellow-600" />
                <h3 className="text-xl font-semibold text-yellow-800">Light Rain Expected</h3>
              </div>
              <p className="text-yellow-700 mb-4">
                Light to moderate rainfall is expected in the Bangalore region over the next 48 hours. 
                Farmers are advised to take necessary precautions for their crops.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm">Duration: 48 hours</span>
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm">Intensity: Light to Moderate</span>
                <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm">Risk: Low</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Farming Calendar */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Seasonal Farming Calendar</h2>
            <p className="text-gray-600">Plan your farming activities throughout the year</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-8 w-8 text-green-600" />
                <h3 className="text-xl font-semibold">Kharif Season (June-October)</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Monsoon rains support crop growth</li>
                <li>• Plant rice, maize, cotton, pulses</li>
                <li>• Monitor for waterlogging</li>
                <li>• Prepare for harvesting in September-October</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="h-8 w-8 text-green-600" />
                <h3 className="text-xl font-semibold">Rabi Season (November-March)</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Cool weather ideal for wheat, barley</li>
                <li>• Plant vegetables like cabbage, cauliflower</li>
                <li>• Manage irrigation carefully</li>
                <li>• Harvest in March-April</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Weather Updates for Your Farm?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get personalized weather alerts and farming recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-700 hover:bg-gray-100" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
