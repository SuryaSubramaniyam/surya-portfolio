import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-6">
        {/* Left Side */}
        <div className="text-sm text-gray-600 text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-900">Surya S</span>. All
          rights reserved.
        </div>

        {/* Center - Social Links */}
        <div className="flex space-x-5">
          <a
            href="https://www.linkedin.com/in/suryas19"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-indigo-600 transition-colors"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://github.com/SuryaSubramaniyam"
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-indigo-600 transition-colors"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="mailto:suryasubramaniyam19@gmail.com"
            className="text-gray-500 hover:text-indigo-600 transition-colors"
          >
            <FaEnvelope size={22} />
          </a>
        </div>

        {/* Right Side */}
        <div className="text-sm text-gray-600 text-center md:text-right">
          Crafted with ❤️ by{" "}
          <span className="font-semibold text-gray-900">Surya S</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
