import React from "react";
import {
  FaBook,
  FaMoneyCheckAlt,
  FaFileInvoiceDollar,
  FaClipboardCheck,
  FaChartLine,
  FaLaptopCode,
  FaUsersCog,
  FaUserTie,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaBook />,
      title: "Bookkeeping",
      desc: "Accurate and reliable bookkeeping to keep your finances organized and updated.",
    },
    {
      icon: <FaMoneyCheckAlt />,
      title: "Payroll Services",
      desc: "Seamless payroll processing ensuring timely salary disbursement and compliance.",
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Tax Planning",
      desc: "Strategic tax planning to minimize liabilities and maximize financial efficiency.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Audit & Assurance",
      desc: "Comprehensive audits to build trust, transparency, and accountability.",
    },
    {
      icon: <FaChartLine />,
      title: "Financial Statement",
      desc: "Detailed financial reports to help you analyze and make informed decisions.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Tech Consulting",
      desc: "Leveraging technology to improve financial processes and business growth.",
    },
    {
      icon: <FaUsersCog />,
      title: "Business Advisory",
      desc: "Expert guidance to help businesses grow, adapt, and succeed sustainably.",
    },
    {
      icon: <FaUserTie />,
      title: "Outsourced CFO",
      desc: "Professional CFO services to manage your finances without full-time costs.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* New Heading Structure */}
        <div className="flex flex-col items-center text-center mb-14">
          <p className="uppercase text-[#0089FF] font-semibold mb-2 tracking-wider">
            What We Offer
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Innovative Strategies for Tax Prosperity
          </h2>
          <p className="text-gray-600 max-w-2xl mb-8">
            We provide a wide range of accounting, tax, and financial
            management services to help individuals and businesses achieve
            financial clarity and growth.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#0089FF] to-[#005FCC] text-white rounded-full text-lg font-semibold shadow hover:scale-105 transition mb-2">
            View All Services
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`
                group relative rounded-2xl shadow-lg transition-all duration-300
                bg-white text-gray-900 border border-[#e5eefa]
                p-8 flex flex-col min-h-[240px] cursor-pointer
                hover:bg-[#0089FF] hover:text-white hover:scale-105 hover:rotate-[-2deg]
                hover:border-transparent
              `}
              style={{
                boxShadow: "0 4px 16px 0 rgba(0,0,0,0.07)",
              }}
            >
              <div className="flex items-center mb-5">
                <div
                  className={`
                    rounded-full p-4 text-3xl shadow transition-all duration-300
                    bg-blue-100 text-[#0089FF]
                    group-hover:bg-white group-hover:text-[#0089FF]
                  `}
                >
                  {service.icon}
                </div>
              </div>
              <h3
                className={`
                  text-xl font-bold mb-2 transition-colors duration-300
                  group-hover:text-white
                `}
              >
                {service.title}
              </h3>
              <p
                className={`
                  mb-0 text-base transition-colors duration-300
                  group-hover:text-blue-100
                `}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
