import Link from 'next/link';
import { Facebook, Instagram, Linkedin, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <h3 className="text-2xl font-bold text-green-400">organicFresh</h3>
            </div>
                          <p className="text-green-100">organicFresh Ventures banglore</p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-green-100 hover:text-white transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-green-100 hover:text-white transition-colors">
                  How it works?
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-green-100 hover:text-white transition-colors">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-green-100 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-green-100 text-sm">
                  Jyothi Nagar, Nelamgala, Bengaluru, Karnataka, 562123
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <p className="text-green-100">+91 8438327763</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="border-t border-green-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-green-100 text-sm">
            © 2025 organicFresh Ventures
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
            <Link href="/terms" className="text-green-100 hover:text-white transition-colors">
              Terms and Conditions
            </Link>
            <Link href="/privacy" className="text-green-100 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/shipping" className="text-green-100 hover:text-white transition-colors">
              Shipping Details
            </Link>
            <Link href="/refund" className="text-green-100 hover:text-white transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
