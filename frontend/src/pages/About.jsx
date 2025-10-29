import React, { useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaUserFriends, FaRegCalendarAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import useScrollAnimation from "../hooks/useScrollAnimation";
import {
  fadeIn,
  fadeInUp,
  fadeInLeft,
  scaleIn,
  staggerContainer,
} from "../lib/motionVariants";

const About = () => {
  const heroRef = useRef(null);
  const heroControls = useScrollAnimation(heroRef);
  const mainRef = useRef(null);
  const mainControls = useScrollAnimation(mainRef);
  const coreRef = useRef(null);
  const coreControls = useScrollAnimation(coreRef);

  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="bg-gradient-to-r from-[#0089FF] to-[#005FCC] py-20 mb-0"
        initial="hidden"
        animate={heroControls}
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto px-6 text-left">
          <motion.h1
            className="text-5xl font-extrabold text-white mb-3 leading-tight"
            variants={fadeInUp}
          >
            About CA Vikash Saini
          </motion.h1>
          <motion.p
            className="text-xl text-blue-100 max-w-2xl"
            variants={fadeInUp}
          >
            Innovative Strategies for Tax Prosperity
          </motion.p>
        </div>
      </motion.section>

      {/* Main About Section with Grid */}
      <motion.section
        ref={mainRef}
        className="max-w-6xl mx-auto px-6 py-20 bg-white rounded-2xl shadow-lg -mt-16 relative z-10"
        initial="hidden"
        animate={mainControls}
        variants={fadeIn}
      >
        <motion.div
          className="flex flex-col md:flex-row gap-12 items-center md:items-stretch"
          variants={staggerContainer}
        >
          {/* Founder Card */}
          <motion.div
            className="w-full md:w-1/3 flex justify-center shadow-base"
            variants={fadeInLeft}
          >
            <motion.div
              className="bg-gradient-to-b from-[#F0F7FF] to-white rounded-3xl shadow-xl border border-blue-100 flex flex-col items-center p-0 w-full max-w-xs overflow-hidden"
              variants={scaleIn}
            >
              <div className="w-full h-56  flex items-center justify-center">
                <motion.img
                  src="/heroImg.jpg"
                  alt="CA Vikash Saini"
                  className="w-full h-full rounded-t-2xl object-cover"
                  variants={fadeInUp}
                />
              </div>
              <div className="w-full flex flex-col items-center px-6 pb-8 pt-4">
                <motion.h2
                  className="text-2xl font-bold text-gray-900 mb-1 mt-2 text-center"
                  variants={fadeInUp}
                >
                  CA Vikash Saini
                </motion.h2>
                <motion.p
                  className="text-[#0089FF] font-medium mb-2 text-center"
                  variants={fadeInUp}
                >
                  Chartered Accountant
                </motion.p>
                <motion.p
                  className="text-gray-500 text-center mb-4 text-sm"
                  variants={fadeInUp}
                >
                  Helping you simplify tax, compliance, and business growth.
                </motion.p>
                <motion.div
                  className="flex justify-center gap-6 mb-6 text-gray-500"
                  variants={fadeInUp}
                >
                  <div className="flex items-center gap-1">
                    <FaRegCalendarAlt className="text-[#0089FF]" />
                    <span className="font-semibold text-gray-700 ml-1">
                      13+ Years Experience
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Divider for desktop */}
          <motion.div
            className="hidden md:block w-px bg-gray-200 mx-4"
            variants={fadeInUp}
          ></motion.div>

          {/* About Content */}
          <motion.div
            className="w-full md:w-2/3 flex flex-col justify-center"
            variants={fadeInUp}
          >
            <motion.h3
              className="text-3xl font-bold text-gray-900 mb-6"
              variants={fadeInUp}
            >
              Your Trusted Partner in Finance & Taxation
            </motion.h3>
            <motion.p
              className="text-gray-700 mb-5 text-lg"
              variants={fadeInUp}
            >
              <strong>I am CA Vikash Saini</strong>, a qualified Chartered
              Accountant with over <strong>13 years</strong> of hands-on
              experience in accounting and finance. My journey in this field
              began long before I earned my CA designation — and over the years,
              I’ve worked closely with individuals, startups, and businesses to
              simplify complex financial matters.
            </motion.p>
            <motion.p
              className="text-gray-700 mb-8 text-lg"
              variants={fadeInUp}
            >
              I help my clients with everything from bookkeeping, tax filings,
              and GST compliance to audits, registrations, and business
              advisory. My goal is simple: to provide reliable, timely, and
              transparent services that add real value and peace of mind to your
              financial life.
            </motion.p>
            <motion.a
              href="#"
              className="inline-block px-8 py-3 text-center text-white bg-[#0089FF] rounded-full font-semibold shadow hover:bg-[#005FCC] transition"
              variants={fadeInUp}
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Core Services Section */}
      <motion.section
        ref={coreRef}
        className="max-w-6xl mx-auto px-6 py-16"
        initial="hidden"
        animate={coreControls}
        variants={fadeIn}
      >
        <motion.h4
          className="text-2xl font-bold text-gray-900 mb-10 text-center"
          variants={fadeInUp}
        >
          Our Core Services
        </motion.h4>
        <motion.div
          className="flex flex-wrap  justify-center gap-8"
          variants={staggerContainer}
        >
          {[
            "Bookkeeping",
            "Tax Filings",
            "GST Compliance",
            "Business Advisory",
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col justify-center items-center bg-white border border-gray-100 rounded-lg shadow-md min-w-[200px] max-w-[200px] min-h-[150px] max-h-[150px] px-4 py-6 transition hover:shadow-lg"
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <FaCheckCircle className="text-[#0089FF] text-4xl mb-3" />
              <span className="text-base font-medium text-gray-800 text-center">
                {item}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </main>
  );
};

export default About;
