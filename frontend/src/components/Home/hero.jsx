import React, { useRef } from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import useHoverAnimation from "../../hooks/useHoverAnimation";
import { fadeInUp, fadeIn, scaleIn } from "../../lib/motionVariants";
import { Link } from "react-router-dom";

const Hero = () => {
  const sectionRef = useRef(null);
  const controls = useScrollAnimation(sectionRef);
  const {
    controls: btn1Controls,
    onHoverStart: btn1HoverStart,
    onHoverEnd: btn1HoverEnd,
  } = useHoverAnimation({ scale: 1.08 }, { scale: 1 });
  const {
    controls: btn2Controls,
    onHoverStart: btn2HoverStart,
    onHoverEnd: btn2HoverEnd,
  } = useHoverAnimation({ scale: 1.08 }, { scale: 1 });

  return (
    <motion.section
      ref={sectionRef}
      className="relative bg-cover bg-center rounded-3xl h-[90vh] flex items-center mt-4"
      style={{ backgroundImage: "url('/vikash.jpg')" }}
      initial="hidden"
      animate={controls}
      variants={fadeIn}
    >
      {/* Overlay */}
      <div className="absolute"></div>

      {/* Content */}
      <motion.div
        className="relative max-w-7xl px-6 text-white"
        variants={fadeInUp}
      >
        <motion.div
          className="max-w-xl bg-black/60 p-8 rounded-lg"
          variants={scaleIn}
        >
          <motion.p
            className="text-sm uppercase tracking-widest mb-3"
            variants={fadeInUp}
          >
            We Are Tax Advisor
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-4"
            variants={fadeInUp}
          >
            Innovative Strategies <br /> for Tax Prosperity
          </motion.h1>

          {/* Buttons */}
          <div className="flex space-x-4">
            <Link to="/contact">
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-[#0089FF] to-[#005FCC] rounded-full transition"
                onMouseOver={btn1HoverStart}
                onMouseOut={btn1HoverEnd}
                animate={btn1Controls}
                whileTap={{ scale: 0.96 }}
              >
                Get Started
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button
                className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition"
                onMouseOver={btn2HoverStart}
                onMouseOut={btn2HoverEnd}
                animate={btn2Controls}
                whileTap={{ scale: 0.96 }}
              >
                Learn More
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
