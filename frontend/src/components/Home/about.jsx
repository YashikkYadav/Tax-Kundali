import React, { useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import useHoverAnimation from "../../hooks/useHoverAnimation";
import {
  fadeInUp,
  fadeInLeft,
  scaleIn,
  fadeIn,
} from "../../lib/motionVariants";
import { Link } from "react-router-dom";

const About = () => {
  const sectionRef = useRef(null);
  const controls = useScrollAnimation(sectionRef);
  const {
    controls: btnControls,
    onHoverStart,
    onHoverEnd,
  } = useHoverAnimation({ scale: 1.08 }, { scale: 1 });

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 bg-white"
      initial="hidden"
      animate={controls}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
        {/* Left Side (Images + Experience Card) */}
        <motion.div className="flex flex-col space-y-6" variants={fadeInLeft}>
          <motion.img
            src="/about1.jpg"
            alt="Team"
            className="rounded-2xl shadow-md object-cover h-[300px] w-full"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
            transition={{ duration: 0.3 }}
          />

          <div className="grid grid-cols-2 gap-6">
            <motion.img
              src="/about2.jpg"
              alt="Work"
              className="rounded-2xl shadow-md object-cover h-[250px] w-full"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="text-white text-center flex flex-col items-center justify-center rounded-2xl shadow-md p-6"
              style={{ backgroundColor: "black" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold">13+</h2>
              <p className="mt-2 text-lg">Years of Experience</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side (Content) */}
        <motion.div
          className="flex flex-col justify-center"
          variants={fadeInUp}
        >
          <motion.p
            className="uppercase  font-semibold mb-2 text-[#0089FF]"
            variants={fadeInUp}
          >
            About CA Vikash Saini
          </motion.p>
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-6 leading-snug"
            variants={fadeInUp}
          >
            Innovative Strategies for Tax Prosperity
          </motion.h2>

          <motion.p className="text-gray-700 mb-4" variants={fadeInUp}>
            <strong>I am CA Vikash Saini</strong>, a qualified Chartered
            Accountant with over <strong>13 years</strong> of hands-on
            experience in accounting and finance. My journey in this field began
            long before I earned my CA designation — and over the years, I’ve
            worked closely with individuals, startups, and businesses to
            simplify complex financial matters.
          </motion.p>

          <motion.p className="text-gray-700 mb-6" variants={fadeInUp}>
            I help my clients with everything from bookkeeping, tax filings, and
            GST compliance to audits, registrations, and business advisory. My
            goal is simple: to provide reliable, timely, and transparent
            services that add real value and peace of mind to your financial
            life.
          </motion.p>

          {/* Bullet Points */}
          <motion.div
            className="grid grid-cols-2 gap-y-3 gap-x-6 mb-6"
            variants={fadeInUp}
          >
            {[
              "Bookkeeping",
              "Tax Filings",
              "GST Compliance",
              "Business Advisory",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <FaCheckCircle className="text-[#0089FF]" />
                <span>{item}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Button */}
          <Link to="/about">
            <motion.button
              className="px-6 py-3 text-white bg-gradient-to-r from-[#0089FF] to-[#005FCC] rounded-full transition duration-300 w-fit"
              onMouseOver={onHoverStart}
              onMouseOut={onHoverEnd}
              animate={btnControls}
              whileTap={{ scale: 0.96 }}
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
