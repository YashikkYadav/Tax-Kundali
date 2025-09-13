
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

const headerVariants = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.23, 1, 0.32, 1] } },
};
const navStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};
const navItem = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};
const mobileMenuVariants = {
  hidden: { opacity: 0, y: -30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, staggerChildren: 0.15 } },
  exit: { opacity: 0, y: -30, transition: { duration: 0.5 } },
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      className="w-full shadow-sm bg-white relative"
      variants={headerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <motion.div className="flex items-center space-x-2" variants={navItem}>
          <img src="/logo.png" className="h-17 w-17" alt="Logo" />
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          className="hidden  md:flex space-x-8 text-gray-700 font-medium relative"
          variants={navStagger}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={navItem}>
            <a href="/" className="hover:text-[#0089FF] transition">Home</a>
          </motion.div>
          <motion.div variants={navItem}>
            <a href="/about" className="hover:text-[#0089FF] transition">About</a>
          </motion.div>
          <motion.div variants={navItem}>
            <a href="/services" className="block hover:text-[#0089FF] transition">Services</a>
          </motion.div>
          <motion.div variants={navItem}>
            <a href="/contact" className="hover:text-[#0089FF] transition">Contact</a>
          </motion.div>
        </motion.nav>

        {/* Contact Button (Desktop) */}
        <motion.div className="hidden md:block invisible" variants={navItem}>
          <a
            href="#"
            className="px-5 py-2 bg-gradient-to-r from-[#0089FF] to-[#005FCC] text-white rounded-full hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.div className="md:hidden" variants={navItem}>
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 text-gray-700 font-medium"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <a href="/" className="block hover:text-[#0089FF]">Home</a>
            <a href="/about" className="block hover:text-[#0089FF]">About</a>
            <a href="/services" className="block hover:text-[#0089FF]">Services</a>
            <a href="/contact" className="block hover:text-[#0089FF]">Contact</a>
            {/* <a
              href="#"
              className="block px-5 py-2 bg-gradient-to-r from-[#0089FF] to-[#005FCC] text-white rounded-full 
                hover:bg-[#0089FF]/80 transition text-center 
                backdrop-blur-xl border border-white/20 shadow-lg"
            >
              Contact Us
            </a> */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
