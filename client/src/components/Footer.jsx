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
    <footer className="bg-gray-900 text-gray-300 pt-14 pb-8 relative">
      {/* Accent Line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-300 to-orange-400" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-center sm:text-left">
        {/* Brand & Social */}
        <div className="flex flex-col items-center sm:items-start gap-6">
          <div>
            <h4 className="text-2xl font-bold text-white">Finx7</h4>
            <p className="text-gray-400 text-sm leading-relaxed mt-2 max-w-xs mx-auto sm:mx-0">
              Empowering smarter financial solutions for everyone.
            </p>
          </div>
          <div className="flex justify-center sm:justify-start gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-700 transition flex items-center justify-center"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-400 transition flex items-center justify-center"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-violet-900 transition flex items-center justify-center"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center sm:items-start gap-6">
          <h5 className="text-lg font-semibold text-white">Quick Links</h5>
          <ul className="flex flex-col space-y-3">
            <li>
              <Link to="/" className="hover:text-orange-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-orange-300 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:text-orange-300 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="hover:text-orange-300 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-orange-300 transition">
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center sm:items-start gap-6">
          <div className="max-w-xs text-center sm:text-left">
            <h5 className="text-lg font-semibold text-white">Contact Us</h5>
            <p className="text-sm leading-relaxed mt-2">
              Email:{" "}
              <a
                href="mailto:info@example.com"
                className="hover:text-orange-400 transition"
              >
                connect@finx7.com
              </a>
            </p>
            <p className="text-sm leading-relaxed mt-1">
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="hover:text-orange-400 transition"
              >
                +91- 9654687526
              </a>
            </p>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gray-800 text-white cursor-pointer hover:bg-orange-300 hover:text-white transition text-sm font-medium"
            aria-label="Back to Top"
          >
            <FaArrowUp className="text-base" /> Back to Top
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-14 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © 2025 Finx7. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
