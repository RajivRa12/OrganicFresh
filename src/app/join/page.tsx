
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, UserPlus, Award, BarChart, Tractor, Users } from "lucide-react";
import { validateRegistrationForm, submitRegistrationForm, type RegistrationFormData } from "@/lib/form-utils";
import { toast } from "sonner";

const benefits = [
  {
    icon: Award,
    title: "Fair Pricing",
    description: "Get better prices for your produce with transparent pricing models"
  },
  {
    icon: BarChart,
    title: "Market Access",
    description: "Connect directly with businesses and expand your market reach"
  },
  {
    icon: UserPlus,
    title: "Training & Support",
    description: "Access to training sessions and continuous support for better farming"
  },
  {
    icon: Users,
    title: "Community Network",
    description: "Join a network of 5000+ successful farmers across India"
  }
];

export default function JoinPage() {
  const [registrationForm, setRegistrationForm] = useState<RegistrationFormData>({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    village: '',
    district: '',
    state: '',
    farmSize: '',
    mainCrops: '',
    fpoStatus: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegistrationChange = (field: keyof RegistrationFormData, value: string) => {
    setRegistrationForm(prev => ({ ...prev, [field]: value }));
  };

  const handleRegistrationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const errors = validateRegistrationForm(registrationForm);
    if (errors.length > 0) {
      errors.forEach(error => toast.error(error));
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitRegistrationForm(registrationForm);
      if (result.success) {
        toast.success(result.message);
        // Reset form
        setRegistrationForm({
          firstName: '',
          lastName: '',
          contactNumber: '',
          email: '',
          village: '',
          district: '',
          state: '',
          farmSize: '',
          mainCrops: '',
          fpoStatus: '',
          additionalInfo: ''
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
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join <span className="text-yellow-300">organicFresh</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Become part of India's fastest-growing farmer network and start earning better prices for your produce.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Join organicFresh?</h2>
            <p className="text-gray-600">Discover the advantages of being part of our network</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
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

      {/* Registration Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-lg border-green-200">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Farmer Registration Form</CardTitle>
                <p className="text-gray-600">Fill out the form below to join our network</p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleRegistrationSubmit}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">First Name *</label>
                      <input 
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2" 
                        placeholder="Enter first name" 
                        required
                        value={registrationForm.firstName}
                        onChange={(e) => handleRegistrationChange('firstName', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Last Name *</label>
                      <input 
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2" 
                        placeholder="Enter last name" 
                        required
                        value={registrationForm.lastName}
                        onChange={(e) => handleRegistrationChange('lastName', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Contact Number *</label>
                    <input 
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2" 
                      placeholder="Enter your contact number" 
                      required
                      value={registrationForm.contactNumber}
                      onChange={(e) => handleRegistrationChange('contactNumber', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Email Address</label>
                    <input 
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2" 
                      type="email"
                      placeholder="Enter your email address" 
                      value={registrationForm.email}
                      onChange={(e) => handleRegistrationChange('email', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Village/City *</label>
                    <input 
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2" 
                      placeholder="Enter your village or city" 
                      required
                      value={registrationForm.village}
                      onChange={(e) => handleRegistrationChange('village', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">District *</label>
                    <input 
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2" 
                      placeholder="Enter your district" 
                      required
                      value={registrationForm.district}
                      onChange={(e) => handleRegistrationChange('district', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">State *</label>
                                         <select className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2" required value={registrationForm.state} onChange={(e) => handleRegistrationChange('state', e.target.value)}>
                        <option value="">Select your state</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Other">Other</option>
                      </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Farm Size (Acres) *</label>
                    <input 
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2" 
                      type="number"
                      placeholder="Enter farm size in acres" 
                      required
                      value={registrationForm.farmSize}
                      onChange={(e) => handleRegistrationChange('farmSize', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Main Crops Grown *</label>
                    <textarea 
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 min-h-20" 
                      placeholder="List the main crops you grow (e.g., tomatoes, onions, potatoes, etc.)" 
                      required
                      value={registrationForm.mainCrops}
                      onChange={(e) => handleRegistrationChange('mainCrops', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Are you part of an FPO? *</label>
                                         <select className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2" required value={registrationForm.fpoStatus} onChange={(e) => handleRegistrationChange('fpoStatus', e.target.value)}>
                        <option value="">Select an option</option>
                        <option value="Yes, I'm part of an FPO">Yes, I'm part of an FPO</option>
                        <option value="No, I'm an individual farmer">No, I'm an individual farmer</option>
                        <option value="I want to join an FPO">I want to join an FPO</option>
                      </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Additional Information</label>
                    <textarea 
                      className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 min-h-20" 
                      placeholder="Any additional information about your farming operation..." 
                      value={registrationForm.additionalInfo}
                      onChange={(e) => handleRegistrationChange('additionalInfo', e.target.value)}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Registration"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Happens Next?</h2>
            <p className="text-gray-600">Your journey to success starts here</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-semibold mb-2">Submit Form</h3>
                <p className="text-sm text-gray-600">Fill out and submit the registration form above</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-semibold mb-2">Verification</h3>
                <p className="text-sm text-gray-600">Our team will verify your details within 24 hours</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-semibold mb-2">Onboarding</h3>
                <p className="text-sm text-gray-600">Complete training and start listing your produce</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="font-semibold mb-2">Start Earning</h3>
                <p className="text-sm text-gray-600">Begin selling and earning better prices</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Farming Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful farmers who trust organicFresh
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-700 hover:bg-gray-100" asChild>
              <Link href="/contact">Need Help? Contact Us</Link>
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
