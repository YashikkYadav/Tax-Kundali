import React, { useRef } from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import { fadeInUp, scaleIn, fadeIn, staggerContainer } from "../../lib/motionVariants";

const CaseStudies = () => {
  const sectionRef = useRef(null);
  const controls = useScrollAnimation(sectionRef);
  const cases = [
    {
      category: "GST Case Study",
      title: "GST Compliance Rescue for a Retail Business",
      desc: "A growing retail company faced penalties due to irregular GST filings. We streamlined their return process, rectified past errors, and set up a monthly compliance system — saving them from ₹3.5 lakh in potential fines.",
      image: "/case1.webp",
    },
    {
      category: "International Taxation Case Study",
      title: "Double Taxation Avoided for an NRI Consultant",
      desc: "An NRI consultant was being taxed in both India and the UK. We analyzed DTAA provisions and structured his income to ensure taxation in only one jurisdiction, legally saving over ₹5 lakh in taxes.",
      image: "/case2.jpg",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 bg-gray-100"
      initial="hidden"
      animate={controls}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div className="flex justify-between items-center flex-wrap mb-12" variants={fadeInUp}>
          <div>
            <motion.p className="uppercase text-[#0089FF] font-semibold mb-2" variants={fadeInUp}>
              Case Studies
            </motion.p>
            <motion.h2 className="text-4xl font-bold text-gray-900 mb-4 leading-snug" variants={fadeInUp}>
              Navigating Taxes, Shaping Success
            </motion.h2>
            <motion.p className="text-gray-600 max-w-xl" variants={fadeInUp}>
              Real-world solutions where we helped businesses and individuals
              overcome tax and compliance challenges successfully.
            </motion.p>
          </div>
          <motion.button className="px-6 py-3 bg-gradient-to-r from-[#0089FF] to-[#005FCC] text-white rounded-full hover:bg-blue-700 transition mt-6 md:mt-0" whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.96 }}>
            View All Cases
          </motion.button>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={staggerContainer}>
          {cases.map((item, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-md group h-82 flex items-end border border-white/20"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              variants={scaleIn}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Overlay Card with Glass Effect */}
              <div className="w-full bg-black/50 backdrop-blur-sm p-6 transition-all duration-300 group-hover:bg-black/60">
                <p className="text-sm uppercase text-white font-semibold tracking-wide mb-2">
                  {item.category}
                </p>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CaseStudies;
