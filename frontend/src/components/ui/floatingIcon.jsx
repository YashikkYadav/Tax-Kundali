import { FaWhatsapp } from "react-icons/fa";

export default function FloatingIcon() {
  return (
    <a
      href="https://wa.me/919828107380" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-6 bg-gradient-to-r from-[#0089FF] to-[#005FCC] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
