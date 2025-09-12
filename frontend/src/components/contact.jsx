import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import ContactForm from "./ui/contactform";
import HowWeWork from "./ui/homewework";

const Contact = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row bg-white rounded-3xl shadow-lg overflow-hidden max-w-6xl mx-auto my-12">
        {/* Left Section */}
        <div className="bg-blue-50 p-10 flex-1 order-2 md:order-1 flex flex-col justify-center">
          <p className="text-[#0089FF] uppercase font-bold tracking-wider mb-2 text-sm">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
            Get In Touch With Us
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
            Have questions or need help? We’re here to assist you with any
            inquiries or support you might need.
          </p>

          {/* Contact Info */}
          <div className="space-y-5">
            {/* Address */}
            <div className="flex items-start space-x-4 bg-white shadow-sm p-4 rounded-xl hover:shadow-md transition">
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
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4 bg-white shadow-sm p-4 rounded-xl hover:shadow-md transition">
              <div className="bg-[#0089FF] text-white p-3 rounded-full">
                <FaPhoneAlt size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm md:text-base">
                  Call Us
                </h4>
                <p className="text-gray-600 text-xs md:text-sm">+91 9828107380</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start space-x-4 bg-white shadow-sm p-4 rounded-xl hover:shadow-md transition">
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
            </div>
          </div>
        </div>

        {/* Right Section with Image */}
        <div className="flex-1 order-1 md:order-2">
          <img
            src="/contact.jpg"
            alt="Contact"
            className="w-full h-[550px] object-cover rounded-t-3xl md:rounded-t-none md:rounded-r-3xl"
          />
        </div>
      </div>

      {/* Additional Sections */}
      <HowWeWork />
      <ContactForm />
    </>
  );
};

export default Contact;
