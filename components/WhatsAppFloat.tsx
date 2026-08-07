"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  const whatsappLink = "https://wa.me/message/U4PWWLVZMMU7H1";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-10 right-10 z-999 flex items-center"
    >
      {/* Tooltip */}
      <span className="mr-3 hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-xl transition-all duration-300 group-hover:flex">
        Chat with us
      </span>

      {/* Button */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] shadow-[0_12px_35px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 hover:shadow-[0_16px_45px_rgba(37,211,102,0.5)]">
        <FaWhatsapp className="text-4xl text-white" />
      </div>

      {/* Ping Animation */}
      <span className="absolute h-16 w-16 animate-ping rounded-full bg-[#25D366]/30"></span>
    </a>
  );
}