
import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#474454] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-[#f6cf9a]">Fine</span> Engineering Works Ltd
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              Building Excellence Since 1979 – Your Trusted Partner in
              Engineering & Construction.
            </p>
            <div className="flex flex-col space-y-2">
              <a
                href="mailto:info@fineeng.co.ke"
                className="flex items-center gap-2 text-gray-300 hover:text-[#f6cf9a] transition-colors"
              >
                <Mail size={16} />
                <span>info@fineeng.co.ke</span>
              </a>
              <a
                href="https://wa.me/8520917090"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-[#f6cf9a] transition-colors"
              >
                <Phone size={16} />
                <span>+254 8520917090</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-[#f6cf9a] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-[#f6cf9a] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-[#f6cf9a] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-gray-300 hover:text-[#f6cf9a] transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-[#f6cf9a] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Our Locations</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-[#f6cf9a] font-medium mb-1">Kenya HQ</h4>
                <div className="flex items-start gap-2">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">
                    Tirupati Business Park, Warehouse No. 19, Nairobi
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-[#f6cf9a] font-medium mb-1">
                  Uganda Branch
                </h4>
                <div className="flex items-start gap-2">
                  <MapPin size={18} className="mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300">Kyebando, Kampala</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} Fine Engineering Works Ltd. All rights
            reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-[#f6cf9a] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#f6cf9a] transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
