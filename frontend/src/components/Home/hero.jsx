import React from "react";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center rounded-3xl h-[90vh] flex items-center mt-4"
      style={{ backgroundImage: "url('/heroim.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute"></div>

      {/* Content */}
      <div className="relative max-w-7xl px-6 text-white">
        <div className="max-w-xl bg-black/60 p-8 rounded-lg">
          <p className="text-sm uppercase tracking-widest mb-3">
            We Are Tax Advisor
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Innovative Strategies <br /> for Tax Prosperity
          </h1>
          <p className="mb-6 text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button
              className="px-6 py-3 bg-gradient-to-r from-[#0089FF] to-[#005FCC] rounded-full transition"
          
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0f2c4f")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#173f73")}
            >
              Get Started
            </button>
            <button className="px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
