// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#F9FAFB] via-[#EEF2F6] to-[#F9FAFB] text-gray-700 py-16 rounded-t-3xl relative overflow-hidden shadow-inner">
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0089FF]/5 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
        {/* Logo & About */}
        <div>
          <div className="mb-5">
            <img src="/logo.png" alt="Tax Kundali Logo" className="h-20 w-20" />
          </div>
          <p className="text-gray-600 leading-relaxed mb-6 text-sm">
            Empowering individuals and businesses with smart financial
            solutions and expert tax guidance.
          </p>
          <div className="flex space-x-3">
            {[
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/cavikashsaini?igsh=MWQ5a2Iydzg5ZXV4aw==",
              },
              {
                icon: <FaFacebookF />,
                link: "https://www.facebook.com/share/17DPhjmXqA/",
              },
              { icon: <FaLinkedinIn />, link: "#" },
              {
                icon: <FaYoutube />,
                link: "https://youtube.com/@cavikashsaini?si=vCgFblpBg8WGvx_2",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gradient-to-r from-[#0089FF] to-[#005FCC] text-white hover:shadow-md hover:scale-110 transition-transform duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Address & Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-800">Head Office</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Vatsalaya Homeland, Plot no. 18, <br />
            Jaisinghpura, Bhankrota, Jaipur, 302026
          </p>
          <h3 className="font-semibold text-lg mt-6 mb-3 text-gray-800">Contact</h3>
          <p className="text-gray-700 flex items-center gap-2 text-sm hover:text-[#0089FF] transition">
            <FaPhoneAlt className="text-[#0089FF]" /> 9828107380
          </p>
          <p className="text-gray-700 flex items-center gap-2 text-sm hover:text-[#0089FF] transition">
            <FaEnvelope className="text-[#0089FF]" /> cavikashsaini@gmail.com
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-800">Services</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Insurance Tax",
              "Strategic Planning",
              "Audit & Assurance",
              "Financial Planning",
              "Tax Management",
            ].map((service, idx) => (
              <li
                key={idx}
                className="text-gray-600 hover:text-[#0089FF] transition cursor-pointer"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-gray-800">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              "About Us",
              "Contact Us",
              "Career",
              "Help Center",
              "Privacy Policy",
            ].map((link, idx) => (
              <li
                key={idx}
                className="text-gray-600 hover:text-[#0089FF] transition cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300 mt-12 pt-6 px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs sm:text-sm text-center gap-3 relative z-10">
        <p>
          © 2024 All Rights Reserved{" "}
          <span className="text-gray-800 font-semibold">Tax Kundali</span>
        </p>
        <p>
          Designed by{" "}
          <span className="text-[#0089FF] font-semibold">Tax Kundali</span>
        </p>
      </div>
    </footer>
  );
}
