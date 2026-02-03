import React from "react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { motion } from "framer-motion";

const technicalSkills = [
  { name: "HTML5", icon: "FaHtml5", color: "text-orange-500" },
  { name: "CSS3", icon: "FaCss3Alt", color: "text-blue-500" },
  { name: "JavaScript", icon: "FaJs", color: "text-yellow-500" },
  { name: "React.js", icon: "FaReact", color: "text-blue-400" },
  { name: "Tailwind CSS", icon: "SiTailwindcss", color: "text-sky-400" },
  { name: "Bootstrap", icon: "SiBootstrap", color: "text-purple-600" },
  { name: "Responsive Design", icon: "FaMobileAlt", color: "text-green-500" },
  { name: "Node.js", icon: "FaNodeJs", color: "text-green-600" },
  { name: "Express.js", icon: "SiExpress", color: "text-gray-700" },
  { name: "MongoDB", icon: "SiMongodb", color: "text-green-500" },
  { name: "MySQL", icon: "SiMysql", color: "text-blue-600" },
  { name: "APIs", icon: "FaServer", color: "text-indigo-500" },
];

const tools = [
  { name: "Canva", icon: "SiCanva", color: "text-blue-400" },
  { name: "Figma", icon: "FaFigma", color: "text-pink-500" },
  { name: "Git", icon: "FaGitAlt", color: "text-red-500" },
  { name: "GitHub", icon: "FaGithub", color: "text-gray-800" },
  { name: "VS Code", icon: "SiVisualstudiocode", color: "text-blue-500" },
  { name: "Postman", icon: "SiPostman", color: "text-orange-400" },
  { name: "Vercel", icon: "SiVercel", color: "text-black" },
  { name: "Netlify", icon: "SiNetlify", color: "text-green-400" },
  { name: "Render", icon: "FaServer", color: "text-indigo-500" },
  { name: "Terminal", icon: "FaTerminal", color: "text-gray-700" },
];

const Card = ({ item }) => {
  const IconComponent =
    FaIcons[item.icon] || SiIcons[item.icon] || FaIcons.FaQuestion;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="
        bg-white rounded-xl shadow-md 
        w-28 sm:w-32 h-28 sm:h-32 
        flex flex-col items-center justify-center 
        p-4 flex-shrink-0
      "
    >
      <IconComponent size={42} className={item.color} />
      <span className="mt-2 font-semibold text-gray-700 text-center text-sm">
        {item.name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-50 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-10">
          Skills & Tools
        </h2>

        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-5">
          Technical Skills
        </h3>

        {/* SCROLL CONTAINER FIXED */}
        <div className="w-full flex justify-center">
          <motion.div
            className="
              flex gap-4 sm:gap-6 
              overflow-x-auto 
              py-4 px-2 
              max-w-full 
              scrollbar-hide
            "
            drag="x"
            dragConstraints={{ left: -1200, right: 0 }}
          >
            {technicalSkills.map((skill, idx) => (
              <Card key={idx} item={skill} />
            ))}
          </motion.div>
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mt-12 mb-5">
          Tools & Platforms
        </h3>

        <div className="w-full flex justify-center">
          <motion.div
            className="
              flex gap-4 sm:gap-6 
              overflow-x-auto 
              py-4 px-2 
              max-w-full 
              scrollbar-hide
            "
            drag="x"
            dragConstraints={{ left: -1200, right: 0 }}
          >
            {tools.map((tool, idx) => (
              <Card key={idx} item={tool} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
