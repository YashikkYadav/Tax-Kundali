import { FaCheckCircle } from "react-icons/fa";
import React, { useRef } from "react";
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

const VisionMission = () => {
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
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-6">
        {/* Left Side - Vision, Mission, History */}
        <motion.div className="flex flex-col gap-6" variants={fadeInLeft}>
          {/* Vision */}
          <motion.div
            className="p-6 bg-blue-50 rounded-2xl shadow-md border border-transparent"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="inline-block bg-white  font-bold text-lg px-4 py-2 rounded-xl mb-4 shadow-sm">
              Our Vision
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-[#0089FF]" />
                To be a one-stop financial partner for individuals and
                businesses.
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-[#0089FF]" />
                To simplify compliance through technology and personal support.
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-[#0089FF]" />
                To empower clients with financial clarity and control.
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-[#0089FF]" />
                To build long-term, trust-based relationships through integrity.
              </li>
            </ul>
          </motion.div>

          {/* Mission */}
          <motion.div
            className="p-6 bg-blue-50 rounded-2xl shadow-md border border-transparent"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="inline-block bg-white  font-bold text-lg px-4 py-2 rounded-xl mb-4 shadow-sm">
              Our Mission
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-[#0089FF]" />
                Deliver accurate and timely tax & accounting solutions.
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-[#0089FF]" />
                Ensure every client, big or small, receives personal attention.
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-[#0089FF]" />
                Stay updated with evolving laws, so our clients always stay
                compliant.
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-[#0089FF]" />
                Help businesses make informed, profitable decisions through
                advisory and insights.
              </li>
            </ul>
          </motion.div>

          {/* History */}
          <motion.div
            className="p-6 bg-[#173f73] text-white rounded-2xl shadow-md"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="inline-block bg-white text-black font-bold text-lg px-4 py-2 rounded-xl mb-4 shadow-sm">
              Our History
            </h3>
            <p>
              With over 13 years of experience in accounting and finance, we’ve
              been trusted partners for individuals, startups, and businesses —
              simplifying complex financial matters and building lasting
              relationships.
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side - Image with overlay */}
        <motion.div
          className="relative rounded-2xl overflow-hidden shadow-lg"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="/heroim.jpg"
            alt="About background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70 bg-opacity-60 flex flex-col justify-between items-end text-right p-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Plan Makes You Feel More Comfortable in Tax Management
              </h2>
            </div>
            <Link to="/contact">
              <motion.button
                className="px-6 py-3 bg-[#0089FF] text-white rounded-full"
                onMouseOver={onHoverStart}
                onMouseOut={onHoverEnd}
                animate={btnControls}
                whileTap={{ scale: 0.96 }}
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.3 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default VisionMission;
