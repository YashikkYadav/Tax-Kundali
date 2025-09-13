import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ContactForm from "./ui/contactform";
import HowWeWork from "./ui/homewework";


import { motion } from "framer-motion";
import { fadeIn, fadeInUp,fadeInLeft, scaleIn, staggerContainer } from "../lib/motionVariants";

const Contact = () => {
  return (
    <>
      <motion.div
        className="flex flex-col md:flex-row bg-white rounded-3xl shadow-lg overflow-hidden max-w-6xl mx-auto my-12"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Section */}
        <motion.div
          className="bg-blue-50 p-10 flex-1 order-2 md:order-1 flex flex-col justify-center"
          variants={fadeInLeft}
        >
          <motion.p className="text-[#0089FF] uppercase font-bold tracking-wider mb-2 text-sm" variants={fadeInUp}>
            Contact Us
          </motion.p>
          <motion.h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-snug" variants={fadeInUp}>
            Get In Touch With Us
          </motion.h2>
          <motion.p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base" variants={fadeInUp}>
            Have questions or need help? We’re here to assist you with any
            inquiries or support you might need.
          </motion.p>

          {/* Contact Info */}
          <motion.div className="space-y-5" variants={staggerContainer}>
            {/* Address */}
            <motion.div className="flex items-start space-x-4 bg-white shadow-sm p-4 rounded-xl hover:shadow-md transition" variants={scaleIn}>
              <div className="bg-[#0089FF] text-white p-3 rounded-full">
                <FaMapMarkerAlt size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                  Address
                </h4>
                <p className="text-gray-600 text-xs md:text-sm">
                  Vatsalaya Homeland, Plot no. 18, Jaisinghpura, Bhankrota,
                  Jaipur, 302026
                </p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div className="flex items-start space-x-4 bg-white shadow-sm p-4 rounded-xl hover:shadow-md transition" variants={scaleIn}>
              <div className="bg-[#0089FF] text-white p-3 rounded-full">
                <FaPhoneAlt size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                  Call Us
                </h4>
                <p className="text-gray-600 text-xs md:text-sm">+91 9828107380</p>
              </div>
            </motion.div>

            {/* Email */}
            <motion.div className="flex items-start space-x-4 bg-white shadow-sm p-4 rounded-xl hover:shadow-md transition" variants={scaleIn}>
              <div className="bg-[#0089FF] text-white p-3 rounded-full">
                <FaEnvelope size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                  Send Message
                </h4>
                <p className="text-gray-600 text-xs md:text-sm">
                  cavikashsaini@gmail.com
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Section with Image */}
        <motion.div className="flex-1 order-1 md:order-2" variants={fadeIn}>
          <motion.img
            src="/heroImg.jpg"
            alt="Contact"
            className="w-full h-[550px] object-cover rounded-t-3xl md:rounded-t-none md:rounded-r-3xl"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </motion.div>

      {/* Additional Sections */}
      <HowWeWork />
      <ContactForm />
    </>
  );
};

export default Contact;
