'use client';

import { motion } from 'framer-motion';
import { 
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const Footer = () => {
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Developers', href: '#developers' },
    { name: 'Projects', href: '#projects' },
    { name: 'Why Dubai', href: '#why-dubai' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Property Sales',
    'Investment Advisory',
    'Property Management',
    'Market Analysis',
    'Off-Plan Properties',
    'Commercial Real Estate'
  ];

  const locations = [
    'Downtown Dubai',
    'Dubai Marina',
    'Palm Jumeirah',
    'Business Bay',
    'DIFC',
    'Dubai Hills Estate'
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900 border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <div>
                <h3 className="text-xl font-bold gradient-text">Dubai Elite</h3>
                <p className="text-xs text-gray-300">Real Estate Expert</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted Dubai real estate consultant with over 15 years of experience. 
              Specializing in luxury properties and investment opportunities.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <PhoneIcon className="w-5 h-5 text-amber-400 mr-3" />
                <span>+971 50 123 4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <EnvelopeIcon className="w-5 h-5 text-amber-400 mr-3" />
                <span>ahmed@dubaiproperties.ae</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPinIcon className="w-5 h-5 text-amber-400 mr-3" />
                <span>Business Bay, Dubai, UAE</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-gray-300 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Popular Locations */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-white mb-6">Popular Areas</h4>
            <ul className="space-y-3">
              {locations.map((location) => (
                <li key={location} className="text-gray-300 text-sm">
                  {location}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Dubai Elite Real Estate. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-amber-400 transition-colors"
              >
                Terms of Service
              </a>
              <div className="flex items-center text-gray-400">
                <GlobeAltIcon className="w-4 h-4 mr-1" />
                <span className="text-sm">Dubai, UAE</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;