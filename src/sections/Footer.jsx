import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 sm:px-4">

        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo + Social */}
          <div className="lg:col-span-1 flex flex-col items-start">
            <div className="mb-4">
              <img
                src="/src/assets/convix-logo.svg"
                alt="Convix Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Building modern SaaS solutions for creators and businesses.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-auto">
              <a
                href="#"
                className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-orange-500 transition-colors duration-200"
              >
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors duration-200">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors duration-200">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors duration-200">
                  Help & Support
                </a>
              </li>
            </ul>
          </div>

          {/* For Creators */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">For Creators</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-purple-500 transition-colors duration-200">
                  Paid
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500 transition-colors duration-200">
                  Onboarding
                </a>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Learn</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors duration-200">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors duration-200">
                  Affiliates
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-purple-500 transition-colors duration-200">
                  Service Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500 transition-colors duration-200">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-500 transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Convix. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;