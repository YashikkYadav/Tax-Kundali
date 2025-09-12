// src/components/StatsSection.jsx
import { useEffect, useRef, useState } from "react";
import { FaUsers, FaFileInvoice, FaChartLine } from "react-icons/fa";

const statsData = [
  { id: 1, icon: <FaUsers className="text-black text-4xl" />, label: "Clients", value: 1000, suffix: "+" },
  { id: 2, icon: <FaFileInvoice className="text-black text-4xl" />, label: "ITR Filled", value: 10000, suffix: "+" },
  { id: 3, icon: <FaChartLine className="text-black text-4xl" />, label: "Stock Audit", value: 25, suffix: "+" },
];

function Counter({ value, isVisible, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible && count === 0) {
      let start = 0;
      const end = value;
      const duration = 1500;
      const stepTime = Math.max(20, Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 50;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(start);
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0089FF] to-[#005FCC]">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16">
      <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#0089FF]/10 to-[#005FCC]/10 rounded-2xl p-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center shadow-md">
        {statsData.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center">
            <div className="mb-3 bg-white rounded-full p-4 shadow">{stat.icon}</div>
            <Counter value={stat.value} isVisible={isVisible} suffix={stat.suffix} />
            <p className="mt-2 text-gray-700 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
