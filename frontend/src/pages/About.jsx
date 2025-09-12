import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaUserFriends, FaRegCalendarAlt } from "react-icons/fa";

const About = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0089FF] to-[#005FCC] py-20 mb-0">
        <div className="max-w-6xl mx-auto px-6 text-left">
          <h1 className="text-5xl font-extrabold text-white mb-3 leading-tight">
            About Tax Kundali
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Innovative Strategies for Tax Prosperity
          </p>
        </div>
      </section>

      {/* Main About Section with Grid */}
      <section className="max-w-6xl mx-auto px-6 py-20 bg-white rounded-2xl shadow-lg -mt-16 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-stretch">
          {/* Founder Card */}
          <div className="w-full md:w-1/3 flex justify-center shadow-base">
            <div className="bg-gradient-to-b from-[#F0F7FF] to-white rounded-3xl shadow-xl border border-blue-100 flex flex-col items-center p-0 w-full max-w-xs overflow-hidden">
              <div className="w-full h-56  flex items-center justify-center">
                <img
                  src="/about1.jpg"
                  alt="CA Vikash Saini"
                  className="w-full h-full rounded-t-2xl object-cover"
                />
              </div>
              <div className="w-full flex flex-col items-center px-6 pb-8 pt-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-1 mt-2 text-center">
                  CA Vikash Saini
                </h2>
                <p className="text-[#0089FF] font-medium mb-2 text-center">
                  Chartered Accountant
                </p>
                <p className="text-gray-500 text-center mb-4 text-sm">
                  Helping you simplify tax, compliance, and business growth.
                </p>
                <div className="flex justify-center gap-6 mb-6 text-gray-500">
                  <div className="flex items-center gap-1">
                    <FaRegCalendarAlt className="text-[#0089FF]" />
                    <span className="font-semibold text-gray-700 ml-1">13+ Years Experience</span>
                  </div>
                  
                </div>
              
              </div>
            </div>
          </div>

          {/* Divider for desktop */}
          <div className="hidden md:block w-px bg-gray-200 mx-4"></div>

          {/* About Content */}
          <div className="w-full md:w-2/3 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Your Trusted Partner in Finance & Taxation
            </h3>
            <p className="text-gray-700 mb-5 text-lg">
              <strong>I am CA Vikash Saini</strong>, a qualified Chartered
              Accountant with over <strong>13 years</strong> of hands-on experience
              in accounting and finance. My journey in this field began long before
              I earned my CA designation — and over the years, I’ve worked closely
              with individuals, startups, and businesses to simplify complex
              financial matters.
            </p>
            <p className="text-gray-700 mb-8 text-lg">
              I help my clients with everything from bookkeeping, tax filings, and
              GST compliance to audits, registrations, and business advisory. My
              goal is simple: to provide reliable, timely, and transparent services
              that add real value and peace of mind to your financial life.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-3 text-center text-white bg-[#0089FF] rounded-full font-semibold shadow hover:bg-[#005FCC] transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h4 className="text-2xl font-bold text-gray-900 mb-10 text-center">
          Our Core Services
        </h4>
        <div className="flex flex-wrap  justify-center gap-8">
          {["Bookkeeping", "Tax Filings", "GST Compliance", "Business Advisory"].map(
            (item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-center items-center bg-white border border-gray-100 rounded-lg shadow-md min-w-[200px] max-w-[200px] min-h-[150px] max-h-[150px] px-4 py-6 transition hover:shadow-lg"
              >
                <FaCheckCircle className="text-[#0089FF] text-4xl mb-3" />
                <span className="text-base font-medium text-gray-800 text-center">
                  {item}
                </span>
              </div>
            )
          )}
        </div>
      </section>
    </main>
  );
};

export default About;
