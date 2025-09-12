import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6">
        {/* Left Side (Images + Experience Card) */}
        <div className="flex flex-col space-y-6">
          <img
            src="/about1.jpg"
            alt="Team"
            className="rounded-2xl shadow-md object-cover h-[300px] w-full transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-2 hover:border-[#0089FF]"
          />

          <div className="grid grid-cols-2 gap-6">
            <img
              src="/about2.jpg"
              alt="Work"
              className="rounded-2xl shadow-md object-cover h-[250px] w-full transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-2 hover:border-[#0089FF]"
            />
            <div
              className="text-white text-center flex flex-col items-center justify-center rounded-2xl shadow-md p-6 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: "black" }}
            >
              <h2 className="text-3xl font-bold">13+</h2>
              <p className="mt-2 text-lg">Years of Experience</p>
            </div>
          </div>
        </div>

        {/* Right Side (Content) */}
        <div className="flex flex-col justify-center">
          <p className="uppercase  font-semibold mb-2 text-[#0089FF]">
            About Tax Kundali
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Innovative Strategies for Tax Prosperity
          </h2>

          <p className="text-gray-700 mb-4">
            <strong>I am CA Vikash Saini</strong>, a qualified Chartered
            Accountant with over <strong>13 years</strong> of hands-on experience
            in accounting and finance. My journey in this field began long before
            I earned my CA designation — and over the years, I’ve worked closely
            with individuals, startups, and businesses to simplify complex
            financial matters.
          </p>

          <p className="text-gray-700 mb-6">
            I help my clients with everything from bookkeeping, tax filings, and
            GST compliance to audits, registrations, and business advisory. My
            goal is simple: to provide reliable, timely, and transparent services
            that add real value and peace of mind to your financial life.
          </p>

          {/* Bullet Points */}
          <div className="grid grid-cols-2 gap-y-3 gap-x-6 mb-6">
            {["Bookkeeping", "Tax Filings", "GST Compliance", "Business Advisory"].map(
              (item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
                >
                  <FaCheckCircle className="text-[#0089FF]" />
                  <span>{item}</span>
                </div>
              )
            )}
          </div>

          {/* Button */}
          <button
            className="px-6 py-3 text-white bg-gradient-to-r from-[#0089FF] to-[#005FCC] rounded-full transition duration-300 w-fit hover:scale-105 hover:shadow-lg"
            
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
