import React, { useRef } from "react";
import {
  FaBook,
  FaMoneyCheckAlt,
  FaFileInvoiceDollar,
  FaClipboardCheck,
  FaChartLine,
  FaLaptopCode,
  FaUsersCog,
  FaUserTie,
  FaBalanceScale,
} from "react-icons/fa";
import { motion } from "framer-motion";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import useHoverAnimation from "../../hooks/useHoverAnimation";
import {
  fadeInUp,
  fadeInLeft,
  scaleIn,
  fadeIn,
  staggerContainer,
} from "../../lib/motionVariants";

const Services = () => {
  const sectionRef = useRef(null);
  const controls = useScrollAnimation(sectionRef);
  const {
    controls: btnControls,
    onHoverStart,
    onHoverEnd,
  } = useHoverAnimation({ scale: 1.08 }, { scale: 1 });
  const services = [
    {
      icon: <FaBook className="text-4xl text-[#0089FF]" />,
      title: "Bookkeeping",
      desc: "Accurate and reliable bookkeeping to keep your finances organized and updated.",
    },
    {
      icon: <FaMoneyCheckAlt className="text-4xl text-[#0089FF]" />,
      title: "Payroll Services",
      desc: "Seamless payroll processing ensuring timely salary disbursement and compliance.",
    },
    {
      icon: <FaFileInvoiceDollar className="text-4xl text-[#0089FF]" />,
      title: "Tax Planning",
      desc: "Strategic tax planning to minimize liabilities and maximize financial efficiency.",
    },
    {
      icon: <FaClipboardCheck className="text-4xl text-[#0089FF]" />,
      title: "Audit & Assurance",
      desc: "Comprehensive audits to build trust, transparency, and accountability.",
    },
    {
      icon: <FaChartLine className="text-4xl text-[#0089FF]" />,
      title: "Financial Statement",
      desc: "Detailed financial reports to help you analyze and make informed decisions.",
    },
    {
      icon: <FaLaptopCode className="text-4xl text-[#0089FF]" />,
      title: "Tech Consulting",
      desc: "Leveraging technology to improve financial processes and business growth.",
    },
    {
      icon: <FaUsersCog className="text-4xl text-[#0089FF]" />,
      title: "Business Advisory",
      desc: "Expert guidance to help businesses grow, adapt, and succeed sustainably.",
    },
    {
      icon: <FaUserTie className="text-4xl text-[#0089FF]" />,
      title: "Outsourced CFO",
      desc: "Professional CFO services to manage your finances without full-time costs.",
    },
    {
      icon: <FaBalanceScale className="text-4xl text-[#0089FF]" />,
      title: "IT Law",
      desc: "Expert legal guidance on technology laws, data protection, and cybersecurity compliance.",
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 bg-white"
      initial="hidden"
      animate={controls}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="flex justify-between items-center flex-wrap mb-12"
          variants={fadeInUp}
        >
          <div>
            <motion.p
              className="uppercase text-[#0089FF] font-semibold mb-2"
              variants={fadeInUp}
            >
              What We Offer
            </motion.p>
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4 leading-snug"
              variants={fadeInUp}
            >
              Innovative Strategies for Tax Prosperity
            </motion.h2>
            <motion.p className="text-gray-600 max-w-xl" variants={fadeInUp}>
              We provide a wide range of accounting, tax, and financial
              management services to help individuals and businesses achieve
              financial clarity and growth.
            </motion.p>
          </div>

          {/* Glassmorphism Button */}
          {/* <motion.button
            className="px-6 py-3 bg-gradient-to-r from-[#0089FF] to-[#005FCC] text-white rounded-full"
            onMouseOver={onHoverStart}
            onMouseOut={onHoverEnd}
            animate={btnControls}
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
          >
            View Services
          </motion.button> */}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-8 text-center border border-transparent"
              variants={scaleIn}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-blue-100 rounded-full  p-6">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.desc}</p>
              <a
                href="#"
                className="text-[#0089FF] font-semibold hover:underline flex items-center justify-center space-x-1"
              ></a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
