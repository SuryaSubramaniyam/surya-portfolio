import React from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";
import profileimage from "../assets/profile-img.png";

const About = () => {
  const personalInfo = [
    {
      icon: <FiMail />,
      label: "Email",
      value: "suryasubramaniyam19@gmail.com",
    },
    { icon: <FiPhone />, label: "Phone", value: "+91 9080995182" },
    {
      icon: <FiMapPin />,
      label: "Location",
      value: "Bengaluru,K.R.Puram, India",
    },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      value: (
        <a
          href="https://www.linkedin.com/in/suryas19"
          className="text-indigo-600 hover:underline"
        >
          View Profile
        </a>
      ),
    },
    {
      icon: <FiGithub />,
      label: "GitHub",
      value: (
        <a
          href="https://github.com/SuryaSubramaniyam"
          className="text-indigo-600 hover:underline"
        >
          View Repository
        </a>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 bg-gray-50  "
    >
      {/* Centered Container */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        {/* Profile Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-56 sm:w-64 md:w-80 h-72 sm:h-80 md:h-96 mb-6 md:mb-0 flex-shrink-0"
        >
          <img
            src={profileimage}
            alt="Profile"
            className="rounded-xl shadow-2xl object-cover w-full h-full border-2 border-indigo-600"
          />
        </motion.div>

        {/* About Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex-1 flex flex-col justify-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-4 text-center md:text-left">
            About Me
          </h2>

          {/* Desktop About Text */}
          <p className="hidden md:block text-gray-700 mb-8 text-justify leading-relaxed max-w-1xl">
            I am a Frontend & UI Developer with a strong foundation in building
            clean, responsive, and user-centric web applications. I specialize
            in creating modern interfaces using React, JavaScript, Tailwind CSS,
            and UI design tools like Figma and Canva. I hold a Master’s degree
            in Computer Applications (MCA) from Thiruvalluvar University, where
            I developed a solid understanding of software development principles
            and web technologies. Through self-driven learning, real-world
            projects, and continuous practice, I have strengthened my skills in
            frontend development and user interface design. I enjoy transforming
            ideas into elegant digital experiences and building interfaces that
            are visually appealing, intuitive, and performance-driven. I am
            actively seeking opportunities as a Frontend Developer or UI
            Developer where I can contribute, learn, and grow professionally.
          </p>

          {/* Mobile About Text */}
          <p className="block md:hidden text-gray-700 mb-10 text-center leading-relaxed max-w-md mx-auto">
            I am a passionate Frontend & UI Developer specializing in building
            clean, responsive, and modern web interfaces using React,
            JavaScript, and Tailwind CSS. I enjoy creating intuitive user
            experiences and transforming ideas into elegant digital products.
          </p>

          {/* Personal Info List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {personalInfo.map((info) => (
              <div
                key={info.label}
                className="flex items-start p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-indigo-600 text-2xl mr-3 mt-1">
                  {info.icon}
                </div>

                <div className="min-w-0">
                  <p className="text-gray-600 text-sm">{info.label}</p>

                  {/* 🔥 Fix for email / long text overflow */}
                  <p className="text-gray-800 font-medium break-words text-sm sm:text-base">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
