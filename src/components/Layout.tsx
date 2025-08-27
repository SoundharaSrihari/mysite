import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-violet-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 border-2 border-violet-500 rounded-full flex items-center justify-center bg-white">
                <img
                  src="image assets/Black_And_White_King_Logo-removebg-preview.png"  // Replace with your image path
                  alt="Logo"
                  className="w-6 h-6 object-cover"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-white bg-clip-text text-transparent">
                Vellora Technologies
              </span>
            </Link>



            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(item.href)
                    ? 'text-violet-400 bg-violet-500/10'
                    : 'text-gray-300 hover:text-violet-400 hover:bg-violet-500/10'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-violet-500/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive(item.href)
                    ? 'text-violet-400 bg-violet-500/10'
                    : 'text-gray-300 hover:text-violet-400 hover:bg-violet-500/10'
                    }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-black to-violet-950/20 border-t border-violet-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">V</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-white bg-clip-text text-transparent">
                  Vellora Technologies
                </span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Excellence, Always. We deliver ERP Extensions & Integrations, AI Automations, and IT Solutions built on innovation, precision, and trust.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone size={16} />
                  <span>+91 9597343176</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Mail size={16} />
                  <span>contact@velloratechnologies.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin size={16} />
                  <span>Coimbatore, Tamil Nadu</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.slice(0, 4).map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-gray-400 hover:text-violet-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><span className="text-gray-400">ERP Customization</span></li>
                <li><span className="text-gray-400">GST Filing Automation</span></li>
                <li><span className="text-gray-400">CRM Automation</span></li>
                <li><span className="text-gray-400">AI Solutions</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-violet-500/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Vellora Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-violet-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-violet-400 text-sm transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/faq" className="text-gray-400 hover:text-violet-400 text-sm transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;