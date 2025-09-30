import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gray-900 text-gray-300 pt-12 pb-6 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-orange-300  to-orange-300" />

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand & Social */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-white">MyWebsite</h4>
          <p className="text-gray-400 text-sm">
            Your financial partner for smarter solutions.
          </p>
          <div className="flex gap-4 mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-facebook transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-twitter transition"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-linkedin transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-instagram transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-lg font-semibold text-white mb-4">Quick Links</h5>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-white transition">
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h5 className="text-lg font-semibold text-white mb-4">Resources</h5>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="/privacy-policy" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-service" className="hover:text-white transition">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/faq" className="hover:text-white transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="/support" className="hover:text-white transition">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info & Back to Top */}
        <div className="space-y-4">
          <h5 className="text-lg font-semibold text-white mb-4">Contact Us</h5>
          <p className="text-gray-400 text-sm">
            Email:{" "}
            <a
              href="mailto:info@example.com"
              className="hover:text-white transition"
            >
              info@example.com
            </a>
          </p>
          <p className="text-gray-400 text-sm">
            Phone:{" "}
            <a href="tel:+1234567890" className="hover:text-white transition">
              +1 234 567 890
            </a>
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-4 inline-flex items-center gap-2 text-gray-400 hover:text-white transition"
          >
            <FaArrowUp /> Back to Top
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © 2025 MyWebsite. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
