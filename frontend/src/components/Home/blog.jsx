import { FaCalendarAlt } from "react-icons/fa";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import useScrollAnimation from "../../hooks/useScrollAnimation";
import {
  fadeInUp,
  scaleIn,
  fadeIn,
  staggerContainer,
} from "../../lib/motionVariants";

const blogs = [
  {
    id: 1,
    category: "Tax Planning",
    date: "September 13, 2025",
    title: "Tax Planning 101: Essential Steps to Take Before Year-End",
    desc: " Don't wait until the last minute! Discover key strategies for individuals and small businesses to optimize their tax position and maximize savings before the financial year ends.",
    image: "/blog1.webp",
  },
  {
    id: 2,
    category: "Business Finance",
    date: "September 13, 2025",
    title: "Best Tax Software For Small Business Of September 2024",
    desc: " Choosing the right software can simplify your life. We review the most important features to look for in tax software to ensure accuracy and compliance for your small business.",
    image: "/blog2.jpg",
  },
  {
    id: 3,
    category: "Freelancer Guide",
    date: "September 13, 2025",
    title: "Tax-Saving Strategies for Freelancers and Gig Workers",
    desc: " Learn how to leverage business expenses and specific tax schemes to reduce your tax liability. This guide is a must-read for every self-employed professional.",
    image: "/blog3.jpg",
  },
];

export default function BlogSection() {
  const sectionRef = useRef(null);
  const controls = useScrollAnimation(sectionRef);

  return (
    <motion.section
      id="NewsAndBlogs"
      ref={sectionRef}
      className="py-16 bg-white"
      initial="hidden"
      animate={controls}
      variants={fadeIn}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="flex justify-between items-center mb-12 flex-wrap"
          variants={fadeInUp}
        >
          <div>
            <motion.p
              className="uppercase text-[#0089FF] font-semibold mb-2"
              variants={fadeInUp}
            >
              Blog & News
            </motion.p>
            <motion.h2
              className="text-4xl font-bold text-gray-900 leading-snug"
              variants={fadeInUp}
            >
              Latest News&nbsp;and&nbsp;Blogs
            </motion.h2>
          </div>
          <Link to="/blog">
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-[#0089FF] to-[#005FCC] text-white rounded-full shadow-lg hover:opacity-90 transition mt-6 md:mt-0"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
            >
              View More
            </motion.button>
          </Link>
        </motion.div>

        {/* Blog Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
        >
          {blogs.map((blog) => (
            <Link to={`/blog/${blog.id}`} key={blog.id} className="block">
              <motion.div
                className="bg-blue-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                variants={scaleIn}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative">
                  <motion.img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-53 object-cover"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="absolute top-4 left-4 bg-gradient-to-r from-[#0089FF] to-[#005FCC] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase">
                    {blog.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <FaCalendarAlt className="mr-2 text-[#0089FF]" />
                    {blog.date}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{blog.desc}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}