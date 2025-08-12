import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function FloatingButtons() {
  return (
    <>
      {/* Inline style for buzz animation */}
      <style>
        {`
          @keyframes buzz {
            0%, 100% { transform: rotate(0deg) scale(1); }
            20% { transform: rotate(5deg) scale(1.05); }
            40% { transform: rotate(-5deg) scale(1.05); }
            60% { transform: rotate(5deg) scale(1.05); }
            80% { transform: rotate(-5deg) scale(1.05); }
          }
          .buzz-animation {
            animation: buzz 1s infinite;
          }
        `}
      </style>

      <div className="fixed top-1/2 -translate-y-1/2 right-4 flex flex-col gap-4 z-50">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918273308839"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white text-xl shadow-lg buzz-animation"
        >
          <FaWhatsapp />
        </a>

        {/* Call Button */}
        <a
          href="tel:+918273308839"
          className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white text-xl shadow-lg buzz-animation"
        >
          <FaPhone />
        </a>
      </div>
    </>
  );
}
