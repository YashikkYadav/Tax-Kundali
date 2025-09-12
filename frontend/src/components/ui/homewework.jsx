import React from "react";

const HowWeWork = () => {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Suspendisse viverra id magna vel rhoncus. Integer ac.",
    },
    {
      number: "02",
      title: "Assessment Analysis",
      description: "Suspendisse viverra id magna vel rhoncus. Integer ac.",
    },
    {
      number: "03",
      title: "Planning",
      description: "Suspendisse viverra id magna vel rhoncus. Integer ac.",
    },
    {
      number: "04",
      title: "Implementation",
      description: "Suspendisse viverra id magna vel rhoncus. Integer ac.",
    },
  ];

  return (
    <div className="bg-white py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
        {/* Left - Steps */}
        <div className="grid grid-cols-1 order-2 md:order-1 sm:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-2xl shadow transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,137,255,0.4)] hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-white text-[#0089FF] text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center mb-3 shadow-md">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-[#0089FF] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right - Image & Text */}
        <div
          className="relative order-1 md:order-2 rounded-2xl overflow-hidden flex flex-col justify-center items-center text-center p-8 bg-cover bg-center"
          style={{
            backgroundImage: "url('/group.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-white">
            <h2 className="text-3xl font-bold mb-4">
              How Do We Work, to Help You Fast
            </h2>
            <p className="mb-6">
              Nulla semper condimentum tellus in ultricies. Nunc tempor ipsum nec
              fermentum consequat. Cras et felis ultricies.
            </p>
            <button className="relative px-6 py-2 rounded-full text-white font-medium bg-gradient-to-r from-[#0089FF] to-[#005FCC] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,137,255,0.7)]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
