import React, { useState } from "react";

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

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto my-10 bg-[#f8faff] p-6 md:p-10 rounded-2xl shadow-lg flex flex-col md:flex-row gap-8">
      
      {/* Left Side - Image */}
      <div className="md:w-1/2">
        <img
          src="/sample.jpg"
          alt="Contact Illustration"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Right Side - Form */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold mb-6 text-[#0089FF]">Send a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0089FF]"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Phone + Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0089FF]"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div className="flex-1">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0089FF]"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Subject */}
          <div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0089FF]"
            />
            {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
          </div>

          {/* Message */}
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0089FF]"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#0089FF] to-[#005FCC] text-white p-3 rounded-full hover:shadow-lg hover:scale-[1.02] transition-transform duration-300"
          >
            Submit Form
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
