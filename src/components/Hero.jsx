import React from "react";
import { motion } from "framer-motion";
import profileimage from "../assets/profile-img.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 pt-24
                 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-16 left-16 w-72 h-72 bg-indigo-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-16 right-16 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl w-full grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center md:text-left"
        >
          {/* Welcome Pill */}
          <span
            className="inline-block mb-5 px-5 py-2 rounded-full text-sm font-semibold
                       bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md"
          >
            Welcome to my portfolio
          </span>

          {/* Name */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            Hey Hi, I’m{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Surya S
            </span>
          </h1>

          {/* Animated Role */}
          <div className="h-10 sm:h-12 mb-6 overflow-hidden">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold
               bg-gradient-to-r from-indigo-600 to-purple-600
               bg-clip-text text-transparent"
            >
              Graphic Designer & Visual Creator
            </motion.p>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto md:mx-0">
            I create visually compelling designs that help brands communicate,
            connect, and grow. From social media creatives and marketing
            materials to logo design and brand identity, I transform ideas into
            impactful visual experiences that leave a lasting impression.
          </p>
          <div className="flex flex-wrap gap-6 mb-10 justify-center md:justify-start">
            <div>
              <h3 className="text-2xl font-bold text-indigo-600">10+</h3>
              <p className="text-gray-500 text-sm">Design Projects</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-600">1+</h3>
              <p className="text-gray-500 text-sm">Brand Concepts</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-pink-600">1+</h3>
              <p className="text-gray-500 text-sm">Months Experience</p>
            </div>
          </div>
          {/* Buttons: VIEW + DOWNLOAD */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            {/* Contact Button */}
            <a
              href="#contact"
              className="
                relative inline-flex items-center justify-center
                px-8 py-4 rounded-xl text-white font-semibold
                bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                shadow-lg hover:shadow-2xl
                transition-all duration-500
                overflow-hidden group
              "
            >
              <span
                className="
                  absolute inset-0 bg-gradient-to-r
                  from-transparent via-white/20 to-transparent
                  translate-x-[-100%]
                  group-hover:translate-x-[100%]
                  transition-transform duration-700
                "
              />
              <span className="relative z-10">Let's Work Together</span>
            </a>

            {/* VIEW Resume (Designer Resume - Canva / Drive) */}
            <a
              href="https://drive.google.com/file/d/1x0qGESkRyvepoRAekVxh3yzm_aPrJqRy/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center justify-center
                px-8 py-4 rounded-xl font-semibold
                border border-indigo-600 text-indigo-600
                bg-white hover:bg-indigo-50
                shadow-md hover:shadow-lg
                transition-all duration-300
              "
            >
              View Resume
            </a>

            {/* DOWNLOAD Resume (ATS PDF) */}
            <a
              href="/resume-ats.pdf"
              download="Surya_S_Graphic Designer_Resume.pdf"
              className="
                inline-flex items-center justify-center
                px-8 py-4 rounded-xl font-semibold
                bg-gray-900 text-white
                hover:bg-gray-800
                shadow-md hover:shadow-lg
                transition-all duration-300
              "
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT: Image (HIDDEN ON MOBILE) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative hidden md:flex justify-center"
        >
          <img
            src={profileimage}
            alt="Surya S"
            className="
  w-64 sm:w-72 md:w-80 h-80 md:h-96
  object-cover rounded-3xl
  shadow-2xl ring-4 ring-white
"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
