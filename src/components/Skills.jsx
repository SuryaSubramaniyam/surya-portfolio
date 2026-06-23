import React from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { motion } from "framer-motion";
import {
  FaPenNib,
  FaPalette,
  FaInstagram,
  FaFont,
  FaFillDrip,
  FaImage,
  FaFileImage,
  FaLightbulb,
  FaGoogleDrive,
  FaBehance,
  FaPinterest,
  FaMagic,
  FaSearch,
} from "react-icons/fa";

const technicalSkills = [
  { name: "Adobe Photoshop", icon: "SiAdobephotoshop", color: "text-blue-500" },

  {
    name: "Adobe Illustrator",
    icon: "SiAdobeillustrator",
    color: "text-orange-500",
  },

  { name: "Canva", icon: "SiCanva", color: "text-cyan-500" },

  { name: "Figma", icon: "FaFigma", color: "text-pink-500" },

  { name: "Logo Design", icon: "FaPenNib", color: "text-purple-500" },

  { name: "Brand Identity", icon: "FaPalette", color: "text-indigo-500" },

  { name: "Social Media Design", icon: "FaInstagram", color: "text-pink-600" },

  { name: "Typography", icon: "FaFont", color: "text-gray-700" },

  { name: "Color Theory", icon: "FaFillDrip", color: "text-yellow-500" },

  { name: "Poster Design", icon: "FaImage", color: "text-green-500" },

  { name: "Flyer Design", icon: "FaFileImage", color: "text-red-500" },

  { name: "Creative Thinking", icon: "FaLightbulb", color: "text-amber-500" },
];

const tools = [
  { name: "Photoshop", icon: "SiAdobephotoshop", color: "text-blue-500" },

  { name: "Illustrator", icon: "SiAdobeillustrator", color: "text-orange-500" },

  { name: "Canva", icon: "SiCanva", color: "text-cyan-500" },

  { name: "Figma", icon: "FaFigma", color: "text-pink-500" },

  { name: "Google Drive", icon: "FaGoogleDrive", color: "text-green-500" },

  { name: "Behance", icon: "FaBehance", color: "text-blue-600" },

  { name: "Pinterest", icon: "FaPinterest", color: "text-red-600" },

  { name: "Instagram", icon: "FaInstagram", color: "text-pink-500" },

  { name: "Adobe Express", icon: "FaMagic", color: "text-purple-500" },

  { name: "Creative Research", icon: "FaSearch", color: "text-indigo-500" },
];

const Card = ({ item }) => {
  const IconComponent =
    FaIcons[item.icon] || SiIcons[item.icon] || FaIcons.FaQuestion;

  return (
    <motion.div
      whileHover={{
        scale: 1.08,
        y: -8,
      }}
      className="
        bg-white/80
backdrop-blur-sm
rounded-2xl
shadow-lg
border border-white 
        w-28 sm:w-32 md:w-32 lg:w-32 
        h-28 sm:h-32 md:h-32 lg:h-32
        flex flex-col items-center justify-center 
        p-3 sm:p-4
      "
    >
      <IconComponent size={40} className={item.color} />
      <span className="mt-2 font-semibold text-gray-700 text-center text-sm">
        {item.name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gray-50 py-16 px-4 sm:px-6 overflow-x-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-indigo-600 mb-10">
          Creative Skills & Design Tools
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Combining creativity, visual storytelling, and modern design tools to
          create engaging brand experiences and impactful digital content.
        </p>

        <h3 className="text-2xl font-semibold text-gray-700 mb-6">
          Creative Skills
        </h3>

        <motion.div
          className="
            grid 
            grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
            gap-4 sm:gap-6
            place-items-center
            mb-12
          "
        >
          {technicalSkills.map((skill, idx) => (
            <Card key={idx} item={skill} />
          ))}
        </motion.div>

        <h3 className="text-2xl font-semibold text-gray-700 mb-6">
          Design Tools
        </h3>

        <motion.div
          className="
            grid 
            grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
            gap-4 sm:gap-6
            place-items-center
          "
        >
          {tools.map((tool, idx) => (
            <Card key={idx} item={tool} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
