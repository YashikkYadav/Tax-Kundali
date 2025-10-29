import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const footerVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.23, 1, 0.32, 1],
      staggerChildren: 0.22,
    },
  },
};
const sectionStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.22 } },
};
const sectionItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.1 } },
};
const iconItem = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-r from-[#F9FAFB] via-[#EEF2F6] to-[#F9FAFB] text-gray-700 py-16 rounded-t-3xl relative overflow-hidden shadow-inner"
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0089FF]/5 via-transparent to-transparent"></div>

      <motion.div
        className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-12 relative z-10"
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Logo & About */}
        <motion.div variants={sectionItem}>
          <div className="mb-5">
            <img
              src="/ca.png"
              alt="ca vikash caini Logo"
              className="w-[150px]"
            />
          </div>
          <p className="text-gray-600 leading-relaxed mb-6 text-sm">
            Empowering individuals and businesses with smart financial solutions
            and expert tax guidance.
          </p>
          <motion.div className="flex space-x-3" variants={sectionStagger}>
            {[
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/cavikashsaini?igsh=MWQ5a2Iydzg5ZXV4aw==",
              },
              {
                icon: <FaFacebookF />,
                link: "https://www.facebook.com/share/17DPhjmXqA/",
              },
              { icon: <FaLinkedinIn />, link: "#" },
              {
                icon: <FaYoutube />,
                link: "https://youtube.com/@cavikashsaini?si=vCgFblpBg8WGvx_2",
              },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-[#0089FF] to-[#005FCC] text-white hover:shadow-md hover:scale-110 transition-transform duration-300"
                variants={iconItem}
                whileHover={{ scale: 1.15, rotate: 8 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Address & Contact */}
        <motion.div variants={sectionItem}>
          <h3 className="font-semibold text-lg mb-4 text-gray-800">
            Head Office
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Vatsalaya Homeland, Plot no. 18, <br />
            Jaisinghpura, Bhankrota, Jaipur, 302026
          </p>
          <h3 className="font-semibold text-lg mt-6 mb-3 text-gray-800">
            Contact
          </h3>
          <p className="text-gray-700 flex items-center gap-2 text-sm hover:text-[#0089FF] transition">
            <FaPhoneAlt className="text-[#0089FF]" /> 9828107380
          </p>
          <p className="text-gray-700 flex items-center gap-2 text-sm hover:text-[#0089FF] transition">
            <FaEnvelope className="text-[#0089FF]" /> cavikashsaini@gmail.com
          </p>
        </motion.div>

        {/* Services */}
        <motion.div variants={sectionItem}>
          <h3 className="font-semibold text-lg mb-4 text-gray-800">Services</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Insurance Tax",
              "Strategic Planning",
              "Audit & Assurance",
              "Financial Planning",
              "Tax Management",
            ].map((service, idx) => (
              <motion.li
                key={idx}
                className="text-gray-600 hover:text-[#0089FF] transition cursor-pointer"
                variants={iconItem}
                whileHover={{ scale: 1.08, color: "#0089FF" }}
              >
                {service}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={sectionItem}>
          <h3 className="font-semibold text-lg mb-4 text-gray-800">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { label: "About", to: "/about" },
              { label: "Contact", to: "/contact" },
              { label: "Services", to: "/services" },
            ].map((link, idx) => (
              <motion.li
                key={idx}
                variants={iconItem}
                whileHover={{ scale: 1.08, color: "#0089FF" }}
              >
                <Link
                  to={link.to}
                  className="text-gray-600 hover:text-[#0089FF] transition"
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </motion.div>

      {/* Bottom Footer */}
      <motion.div
        className="border-t border-gray-300 mt-12 pt-6 px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs sm:text-sm text-center gap-3 relative z-10"
        variants={sectionItem}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p>
          © 2024 All Rights Reserved{" "}
          <span className="text-gray-800 font-semibold">CA Vikash Saini</span>
        </p>
        <p>
          Designed by{" "}
          <a
            href="https://yashikyadavandco.com/"
            target="_blank"
            className="text-[#0089FF] font-semibold"
          >
            Yashik Yadav and Co.
          </a>
        </p>
      </motion.div>
    </motion.footer>
  );
}
