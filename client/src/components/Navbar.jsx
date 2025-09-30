import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // For hamburger icons
import logo from "../assets/logo.webp"; // Replace with your logo path

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["Services", "About Us", "ContactUs", "Blogs"];

  return (
    <nav className="fixed top-0 left-0 opacity-95 w-full bg-gradient-to-r bg-gray-950 shadow-lg z-50 font-sans">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20 select-none">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-auto rounded-xl transition-transform duration-300 group-hover:scale-110"
          />
         
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-base font-semibold">
          {/* Home link with glow effect */}
          <Link to="/" className="relative group transition duration-300">
            <span className="text-gray-300 group-hover:text-orange-300 transition-colors duration-300">
              Home
            </span>
            <span className="absolute inset-0 blur-md opacity-0 group-hover:opacity-100 text-orange-300 transition-opacity duration-500">
              Home
            </span>
          </Link>

          {/* Other links from array */}
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase().replace(" ", "")}`}
              className="relative group transition duration-300"
            >
              <span className="text-gray-300 group-hover:text-orange-300 transition-colors duration-300">
                {item}
              </span>
              <span className="absolute inset-0 blur-md opacity-0 group-hover:opacity-100 text-orange-300 transition-opacity duration-500">
                {item}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-orange-300 transition"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900/95 shadow-lg transform transition-transform duration-500 md:hidden flex flex-col py-8 px-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="self-end mb-8 text-gray-300 hover:text-yellow-400 transition"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        {/* Mobile Nav Items (Home + others) */}
        <div className="flex flex-col gap-6 text-lg font-semibold">
          {/* Home in sidebar */}
          <Link
            to="/"
            className="relative group transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-gray-300 group-hover:text-yellow-400 transition-colors duration-300">
              Home
            </span>
            <span className="absolute inset-0 blur-md opacity-0 group-hover:opacity-100 text-yellow-400 transition-opacity duration-500">
              Home
            </span>
          </Link>

          {/* Other nav items */}
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase().replace(" ", "")}`}
              className="relative group transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-gray-300 group-hover:text-yellow-400 transition-colors duration-300">
                {item}
              </span>
              <span className="absolute inset-0 blur-md opacity-0 group-hover:opacity-100 text-yellow-400 transition-opacity duration-500">
                {item}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
