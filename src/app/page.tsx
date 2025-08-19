
'use client';

import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star, Tractor, Trees, CloudSun, BarChart, UserPlus, MapPin, Phone, ShoppingBag, Truck, Leaf, Award } from "lucide-react";
import Image from "next/image";
import { validateInquiryForm, submitInquiryForm, type InquiryFormData } from "@/lib/form-utils";
import { toast } from "sonner";

const whyChoose = [
  {
    title: "Farm Direct Sourcing",
    description:
      "Direct connections with farmers and FPOs, eliminating intermediaries for fairer prices and fresher produce.",
    icon: Leaf,
  },
  {
    title: "Superior Quality Control",
    description:
      "Rigorous quality checks to ensure premium-grade produce consistently meets the highest standards.",
    icon: Award,
  },
  {
    title: "Comprehensive Range",
    description:
      "A diverse selection of seasonal and exotic produce, available year-round to meet unique business needs.",
    icon: ShoppingBag,
  },
];

const farmerBenefits = [
  {
    title: "Fair Pricing",
    description: "Transparent pricing models that ensure farmers receive fair compensation",
    icon: CheckCircle,
  },
  {
    title: "Market Access",
    description: "Reliable and regular market opportunities through our direct business-to-business connections",
    icon: BarChart,
  },
  {
    title: "Training",
    description: "Ongoing training sessions to improve productivity, crop quality, and best agricultural practices.",
    icon: UserPlus,
  },
  {
    title: "Support",
    description: "Continuous support to ensure farmers are market-ready and equipped to handle challenges effectively",
    icon: Tractor,
  },
];

const b2bFeatures = [
  "Low prices",
  "99.99% fulfillment",
  "12 Hour delivery",
  "Ease of ordering",
];

const promotionalAds = [
  {
    title: "🎉 Special Offer!",
    subtitle: "First Order 20% OFF",
    description: "New customers get 20% off their first order. Limited time only!",
    bgColor: "bg-gradient-to-r from-green-500 to-emerald-600",
    textColor: "text-white",
  },
  {
    title: "🚚 Free Delivery",
    subtitle: "Orders above ₹5000",
    description: "Free delivery for all orders above ₹5000 across Bangalore",
    bgColor: "bg-gradient-to-r from-blue-500 to-cyan-600",
    textColor: "text-white",
  },
  {
    title: "⭐ Premium Quality",
    subtitle: "100% Fresh Guarantee",
    description: "Not satisfied? Get a full refund within 24 hours",
    bgColor: "bg-gradient-to-r from-orange-500 to-red-500",
    textColor: "text-white",
  },
];

export default function HomePage() {
  const [inquiryForm, setInquiryForm] = useState<InquiryFormData>({
    fullName: '',
    contactNumber: '',
    businessName: '',
    businessType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInquiryChange = (field: keyof InquiryFormData, value: string) => {
    setInquiryForm(prev => ({ ...prev, [field]: value }));
  };

  const handleInquirySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateInquiryForm(inquiryForm);
    if (errors.length > 0) {
      errors.forEach(error => toast.error(error));
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitInquiryForm(inquiryForm);
      if (result.success) {
        toast.success(result.message);
        // Reset form
        setInquiryForm({
          fullName: '',
          contactNumber: '',
          businessName: '',
          businessType: '',
          message: ''
        });
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-green-700">organicFresh</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/business" className="text-sm font-medium hover:text-primary">
            For Business
          </Link>
          <Link href="/farmers" className="text-sm font-medium hover:text-primary">
            For Farmers
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            About Us
          </Link>
        </nav>
        <Button asChild>
          <Link href="/join">Join as Farmers</Link>
        </Button>
      </header>

      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium">
            🌱 <span className="font-bold">organicFresh</span> - Connecting Farmers to Markets Since 2020 | 
            <span className="ml-2 font-bold">5000+ Happy Farmers</span> | 
            <span className="ml-2 font-bold">1000+ Business Partners</span>
          </p>
            </div>
          </div>

      {/* Who We Are - Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-green-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
            <Image
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop"
              width={600}
              height={400}
                alt="Fresh fruits and vegetables"
                className="rounded-2xl shadow-2xl object-cover w-full h-auto"
            />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Live from Farm</span>
                </div>
          </div>
        </div>
            <div className="order-1 md:order-2">
              <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">Who We Are</span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
                Explore our range of over <span className="text-yellow-600">fruits</span>
                <br />& <span className="text-green-700">vegetables</span>
              </h1>
              <div className="mt-6 text-lg text-gray-600 space-y-4">
                <p>
                  At organicFresh, we bridge the gap between the farm and your business. As a dedicated fruits and vegetables procurement company, we source the freshest produce directly from trusted farmers and deliver it efficiently to B2B clients across various sectors.
                </p>
                <p>
                  Whether you're looking for organically grown or conventionally cultivated produce, organicFresh ensures consistent quality, reliable supply, and a seamless procurement experience. Our mission is to support farmers, empower businesses, and make fresh, nutritious produce accessible and affordable—without compromise.
                </p>
                <p>
                  From field to fork, we keep it fresh. That's the organicFresh promise.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() => {
                    console.log('Check Prices button clicked, navigating to /market');
                    window.location.href = '/market';
                  }}
                >
                  Check Prices
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-green-600 text-green-600 hover:bg-green-50"
                  onClick={() => {
                    console.log('Test button clicked, navigating to /about');
                    window.location.href = '/about';
                  }}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Ads Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            {promotionalAds.map((ad, index) => (
              <div key={index} className={`${ad.bgColor} ${ad.textColor} rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow`}>
                <h3 className="text-xl font-bold mb-2">{ad.title}</h3>
                <p className="text-lg font-semibold mb-2 opacity-90">{ad.subtitle}</p>
                <p className="text-sm opacity-80">{ad.description}</p>
            </div>
            ))}
            </div>
        </div>
      </section>

      {/* For Farmers Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">For Farmers</span>
            <h2 className="mt-4 text-3xl font-bold">Farmer Onboarding Program</h2>
            <p className="mt-4 text-gray-600">
              At organicFresh, farmers are at the heart of our operation. We invite individual farmers and Farmer Producer Organizations (FPOs) to join our growing network and benefit from our comprehensive support system.
            </p>
          </div>
          
          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {farmerBenefits.map((benefit) => (
              <Card key={benefit.title} className="p-6 hover:shadow-lg transition-shadow border-green-200">
                <div className="flex items-start gap-3">
                  <benefit.icon className="h-5 w-5 text-green-600 mt-0.5" />
                  <div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    <CardDescription className="mt-2">{benefit.description}</CardDescription>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 grid md:grid-cols-4 gap-6">
            {[
              "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1589923158776-e1e4fbed9d4a?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?q=80&w=600&auto=format&fit=crop"
            ].map((src, i) => (
              <div key={i} className="relative group overflow-hidden rounded-lg">
                <Image
                  src={src}
                  width={400}
                  height={300}
                  alt={`Farmer ${i + 1}`}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Farmer {i + 1}</p>
                    <p className="text-sm opacity-90">Success Story</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <Link href="/join">Join Our Network</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* B2B Operations Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="order-2 md:order-1">
              <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">For Businesses</span>
              <h3 className="mt-4 text-3xl font-bold">The largest B2B fresh produce distributor</h3>
              
              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-lg">Farm-Fresh Sourcing</h4>
                  <p className="text-gray-600 mt-2">
                    At organicFresh, we specialize in delivering farm-fresh fruits and vegetables tailored to meet the dynamic needs of modern businesses. Whether you're a supermarket, a quick commerce platform, a retail chain in a mall, or part of the modern trade ecosystem, we've got you covered.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg">Reliable & Scalable Delivery</h4>
                  <p className="text-gray-600 mt-2">
                    By sourcing directly from farmers, we ensure the freshest possible produce reaches you quickly and reliably. Our robust supply chain and quality control processes guarantee consistency, traceability, and timely delivery — helping your business maintain high standards and customer satisfaction.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg">Why Partner with organicFresh?</h4>
                  <p className="text-gray-600 mt-2">
                    Daily fresh inventory straight from farms. Both organic and conventionally grown options. Scalable supply for seasonal and high-demand periods. Customized solutions to match your procurement needs. Let us take care of the sourcing, so you can focus on growth.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    {b2bFeatures.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop"
                  width={800}
                  height={600}
                  alt="Streamlined Supply Chain"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-xl font-bold">Streamlined Supply Chain</h4>
                  <p className="text-sm opacity-90">From farm to business with efficiency and transparency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="order-2 md:order-1">
              <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">Get In Touch</span>
              <h3 className="mt-4 text-3xl font-bold">Get Started with <span className="text-orange-500">organicFresh</span></h3>
              <p className="mt-4 text-gray-600">
                Partner with organicFresh today and experience a revolutionary approach to fresh produce delivery. Enhance your business or community living with our reliable, fresh, and efficient services.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-green-700" />
                  <div>
                    <p className="font-semibold">Our Location</p>
                    <p className="text-gray-600">Jyothi Nagar, Nelamgala, Bengaluru, Karnataka, 562123</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-green-700" />
                  <div>
                    <p className="font-semibold">Contact Number</p>
                    <p className="text-gray-600">+91 9964477987</p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-8 p-4 bg-green-100 rounded-lg border border-green-200">
            <p className="text-sm text-green-800">
              <strong>💡 Pro Tip:</strong> Call us between 9 AM - 6 PM for immediate assistance and best deals!
            </p>
          </div>
        </div>
        
        <Card className="p-6 shadow-lg border-green-200 order-1 md:order-2">
              <CardHeader>
                <CardTitle>Let's Talk</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Full Name *</label>
                    <input 
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2" 
                      placeholder="Enter your name" 
                      value={inquiryForm.fullName}
                      onChange={(e) => handleInquiryChange('fullName', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Contact Number *</label>
                    <input 
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2" 
                      placeholder="Enter your contact number" 
                      value={inquiryForm.contactNumber}
                      onChange={(e) => handleInquiryChange('contactNumber', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Business Name *</label>
                    <input 
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2" 
                      placeholder="Enter your business name" 
                      value={inquiryForm.businessName}
                      onChange={(e) => handleInquiryChange('businessName', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Business Type *</label>
                    <select 
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
                      value={inquiryForm.businessType}
                      onChange={(e) => handleInquiryChange('businessType', e.target.value)}
                      required
                    >
                      <option value="">Select business type</option>
                      <option value="Retail">Retail</option>
                      <option value="HORECA">HORECA</option>
                      <option value="Q-Commerce">Q-Commerce</option>
                      <option value="Distributor">Distributor</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Message (Optional)</label>
                    <textarea 
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 min-h-28" 
                      placeholder="Tell us about your requirements"
                      value={inquiryForm.message}
                      onChange={(e) => handleInquiryChange('message', e.target.value)}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  </Button>
                </form>
                </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1 rounded-full bg-yellow-200 text-yellow-800 text-sm font-medium">Why Choose Us</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">Why choose <span className="text-green-700">organicFresh</span>?</h2>
          </div>
          <div className="mt-8 grid gap-6">
            {whyChoose.map((item) => (
              <Card key={item.title} className="flex items-start gap-4 p-6 hover:shadow-lg transition-shadow border-yellow-200">
                <item.icon className="h-6 w-6 text-green-600 flex-shrink-0" />
                <div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="mt-2">{item.description}</CardDescription>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Farmer Success Stories - Horizontal Scroll */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">Success Stories</span>
            <h2 className="mt-4 text-3xl font-bold">Farmers Who Transformed Their Lives</h2>
            <p className="mt-4 text-gray-600">
              Real stories from real farmers who joined our network and achieved remarkable success
            </p>
          </div>
          
          {/* Horizontal Scrolling Container */}
          <div className="relative">
            {/* Scroll Indicators */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
              <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
              <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
                          {/* Scrollable Content */}
              <div className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth-x pb-4 px-4">
                              {[
                  {
                    name: "Farmer 1",
                    location: "Karnataka",
                    achievement: "Increased income by 40% through better market access and fair pricing",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
                  },
                  {
                    name: "Farmer 2", 
                    location: "Tamil Nadu",
                    achievement: "Expanded from 2 acres to 8 acres with organicFresh support",
                    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop"
                  },
                  {
                    name: "Farmer 3",
                    location: "Andhra Pradesh", 
                    achievement: "Started exporting produce internationally with quality certifications",
                    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop"
                  },
                  {
                    name: "Farmer 4",
                    location: "Telangana",
                    achievement: "Built a successful FPO with 200+ member farmers",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
                  }
                ].map((story, index) => (
                <div key={story.name} className="flex-shrink-0 w-80">
                  <Card className="p-6 hover:shadow-lg transition-shadow border-green-200 h-full">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-green-200">
                        <Image
                          src={story.image}
                          width={96}
                          height={96}
                          alt={story.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{story.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{story.location}</p>
                      <p className="text-green-700 font-medium text-sm leading-relaxed">{story.achievement}</p>
                      
                      {/* Success Badge */}
                      <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        <CheckCircle className="w-4 h-4" />
                        Success Story
                      </div>
                    </div>
                </Card>
                </div>
              ))}
            </div>
            
            {/* Scroll Progress Bar */}
            <div className="mt-6 px-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>
            </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-green-700 to-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Ready to transform your fresh produce supply?</h2>
          <p className="mt-4 text-lg opacity-90">
            Join hundreds of businesses that trust organicFresh for quality, reliability, and efficiency.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-gray-100">
              Get Started Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-700">
              Contact Sales Team
          </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-green-300">5000+</div>
              <div className="text-sm text-green-200">Happy Farmers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-300">1000+</div>
              <div className="text-sm text-green-200">Business Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-300">99.9%</div>
              <div className="text-sm text-green-200">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-300">24/7</div>
              <div className="text-sm text-green-200">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer is now handled globally in AppShell */}
    </div>
  );
}
