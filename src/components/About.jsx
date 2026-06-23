import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGlobe } from "react-icons/fi";
import profileimage from "../assets/profile-img.png";

const About = () => {
  const personalInfo = [
    {
      icon: <FiMail />,
      label: "Email",
      value: "suryasubramaniyam19@gmail.com",
    },

    {
      icon: <FiPhone />,
      label: "Phone",
      value: "+91 9080995182",
    },

    {
      icon: <FiMapPin />,
      label: "Location",
      value: "Bengaluru, Karnataka, India",
    },

    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      value: (
        <a
          href="https://www.linkedin.com/in/suryas19"
          target="_blank"
          rel="noreferrer"
          className="text-indigo-600 hover:underline"
        >
          View Profile
        </a>
      ),
    },

    {
      icon: <FiGlobe />,
      label: "Portfolio",
      value: (
        <a
          href="https://www.suryadev.site"
          target="_blank"
          rel="noreferrer"
          className="text-indigo-600 hover:underline"
        >
          Visit Portfolio
        </a>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50  "
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
            className="rounded-3xl shadow-2xl object-cover w-full h-full border-4 border-white ring-4 ring-indigo-100"
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
            I am a passionate Graphic Designer dedicated to creating visually
            engaging designs that communicate ideas effectively and leave a
            lasting impression. My expertise includes social media creatives,
            logo design, brand identity, marketing materials, posters, banners,
            and digital content creation. I hold a Master’s degree in Computer
            Applications (MCA) from Thiruvalluvar University, which has
            strengthened my creativity, problem-solving abilities, and
            understanding of modern digital tools. Using tools such as Adobe
            Photoshop, Adobe Illustrator, Canva, and Figma, I transform concepts
            into impactful visual experiences. I enjoy blending creativity with
            strategy to help businesses build strong brand identities and
            connect with their audiences through compelling design. I am
            actively seeking opportunities as a Graphic Designer where I can
            contribute innovative ideas, expand my skills, and create meaningful
            visual solutions.
          </p>

          {/* Mobile About Text */}
          <p className="block md:hidden text-gray-700 mb-10 text-center leading-relaxed max-w-md mx-auto">
            I am a creative Graphic Designer specializing in logo design, social
            media creatives, branding, posters, and marketing materials. I enjoy
            transforming ideas into visually engaging designs that help brands
            communicate and grow.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="px-4 py-2 bg-white rounded-full shadow text-sm font-medium">
              Photoshop
            </span>

            <span className="px-4 py-2 bg-white rounded-full shadow text-sm font-medium">
              Illustrator
            </span>

            <span className="px-4 py-2 bg-white rounded-full shadow text-sm font-medium">
              Canva
            </span>

            <span className="px-4 py-2 bg-white rounded-full shadow text-sm font-medium">
              Branding
            </span>

            <span className="px-4 py-2 bg-white rounded-full shadow text-sm font-medium">
              Social Media Design
            </span>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-white rounded-xl p-4 shadow-md text-center">
              <h3 className="text-2xl font-bold text-indigo-600">10+</h3>
              <p className="text-sm text-gray-500">Designs</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md text-center">
              <h3 className="text-2xl font-bold text-purple-600">1+</h3>
              <p className="text-sm text-gray-500">Brand Concepts</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md text-center">
              <h3 className="text-2xl font-bold text-pink-600">100%</h3>
              <p className="text-sm text-gray-500">Creative Focus</p>
            </div>
          </div>
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
