import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  fadeInLeft,
  fadeInUp,
  scaleIn,
  staggerContainer,
} from "../../lib/motionVariants";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation
  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.phone.trim()) tempErrors.phone = "Phone number is required";
    else if (!/^[0-9]{10}$/.test(formData.phone))
      tempErrors.phone = "Enter a valid 10-digit phone number";

    if (!formData.email.trim()) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      tempErrors.email = "Enter a valid email address";

    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const { name, phone, email, subject, message } = formData;

      // Format the WhatsApp message
      const text = `New Contact Form Submission:

Name: ${name}
Phone: ${phone}
Email: ${email}
Subject: ${subject}
Message: ${message}`;

      // ✅ Encode message for URL
      const encodedText = encodeURIComponent(text);

      // WhatsApp number (with country code)
      const whatsappNumber = "+919828107380";

      // ✅ Use encodedText instead of text
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
      window.open(whatsappUrl, "_blank");

      // Reset form after sending
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto my-10 bg-[#f8faff] p-6 md:p-10 rounded-2xl shadow-lg flex flex-col md:flex-row gap-8"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Left Side - Image */}
      <motion.div className="md:w-1/2" variants={fadeInLeft}>
        <motion.img
          src="/sample.jpg"
          alt="Contact Illustration"
          className="w-full h-full object-cover rounded-2xl"
          whileHover={{ scale: 1.04 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      {/* Right Side - Form */}
      <motion.div className="md:w-1/2" variants={fadeInUp}>
        <motion.h2
          className="text-3xl font-bold mb-6 text-[#0089FF]"
          variants={fadeInUp}
        >
          Send a Message
        </motion.h2>
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Name */}
          <motion.div variants={fadeInUp}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0089FF]"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </motion.div>

          {/* Phone + Email */}
          <motion.div
            className="flex flex-col md:flex-row gap-4"
            variants={staggerContainer}
          >
            <motion.div className="flex-1" variants={fadeInUp}>
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0089FF]"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </motion.div>

            <motion.div className="flex-1" variants={fadeInUp}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0089FF]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </motion.div>
          </motion.div>

          {/* Subject */}
          <motion.div variants={fadeInUp}>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0089FF]"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </motion.div>

          {/* Message */}
          <motion.div variants={fadeInUp}>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0089FF]"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-[#0089FF] to-[#005FCC] text-white p-3 rounded-full hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Submit Form
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;
