import React from "react";
import { FaLinkedin, FaEnvelope, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-50 via-white to-purple-50 border-t border-gray-200 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center text-center gap-5">
          {/* Name */}
          <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Surya S
          </h3>

          {/* Designation */}
          <p className="text-gray-600">Graphic Designer • Creative Thinker</p>

          {/* Tagline */}
          <p className="text-gray-500 max-w-xl">
            Transforming ideas into visually engaging experiences through
            creative design, branding, and digital storytelling.
          </p>

          {/* Social Links */}
          <div className="flex gap-5">
            <a
              href="https://www.linkedin.com/in/suryas19"
              target="_blank"
              rel="noreferrer"
              className="text-gray-500 hover:text-indigo-600 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>

            <a
              href="mailto:suryasubramaniyam19@gmail.com"
              className="text-gray-500 hover:text-indigo-600 transition-all duration-300 hover:scale-110"
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-4 border-t border-gray-200 w-full">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Surya S. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
