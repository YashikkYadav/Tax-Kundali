import React, { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <header className="w-full shadow-sm bg-white relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" className="h-17 w-17" alt="Logo" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium relative">
          <a href="/" className="hover:text-[#0089FF]">Home</a>
          <a href="#" className="hover:text-[#0089FF]">About</a>

          {/* Services Dropdown */}
          <div className="relative group">
            <button className="hover:text-[#0089FF] flex items-center gap-1">
              Services <FiChevronDown className="text-sm group-hover:rotate-180 transition duration-300" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-20">
              <ul className="py-2">
                <li><a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#0089FF]">Service 1</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#0089FF]">Service 2</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#0089FF]">Service 3</a></li>
              </ul>
            </div>
          </div>

          {/* Pages Dropdown */}
          <div className="relative group">
            <button className="hover:text-[#0089FF] flex items-center gap-1">
              Pages <FiChevronDown className="text-sm group-hover:rotate-180 transition duration-300" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-20">
              <ul className="py-2">
                <li><a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#0089FF]">Page 1</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#0089FF]">Page 2</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-blue-50 hover:text-[#0089FF]">Page 3</a></li>
              </ul>
            </div>
          </div>

          <a href="/contact" className="hover:text-[#0089FF]">Contact</a>
        </nav>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <a
            href="#"
            className="px-5 py-2 bg-gradient-to-r from-[#0089FF] to-[#005FCC] text-white rounded-full hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium">
          <a href="/" className="block hover:text-[#0089FF]">Home</a>
          <a href="#" className="block hover:text-[#0089FF]">About</a>

          {/* Services Dropdown in Mobile */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full hover:text-[#0089FF]"
            >
              Services <FiChevronDown className={`transition ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <ul className="pl-4 mt-2 space-y-1">
                <li><a href="#" className="block hover:text-[#0089FF]">Service 1</a></li>
                <li><a href="#" className="block hover:text-[#0089FF]">Service 2</a></li>
                <li><a href="#" className="block hover:text-[#0089FF]">Service 3</a></li>
              </ul>
            )}
          </div>

          {/* Pages Dropdown in Mobile */}
          <div>
            <button
              onClick={() => setPagesOpen(!pagesOpen)}
              className="flex items-center justify-between w-full hover:text-[#0089FF]"
            >
              Pages <FiChevronDown className={`transition ${pagesOpen ? "rotate-180" : ""}`} />
            </button>
            {pagesOpen && (
              <ul className="pl-4 mt-2 space-y-1">
                <li><a href="#" className="block hover:text-[#0089FF]">Page 1</a></li>
                <li><a href="#" className="block hover:text-[#0089FF]">Page 2</a></li>
                <li><a href="#" className="block hover:text-[#0089FF]">Page 3</a></li>
              </ul>
            )}
          </div>

          <a href="/contact" className="block hover:text-[#0089FF]">Contact</a>
          <a
  href="#"
  className="block px-5 py-2 bg-gradient-to-r from-[#0089FF] to-[#005FCC] text-white rounded-full 
             hover:bg-[#0089FF]/80 transition text-center 
             backdrop-blur-xl border border-white/20 shadow-lg"
>
  Contact Us
</a>

        </div>
      )}
    </header>
  );
};

export default Header;
