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
          Skills & Tools
        </h2>

        <h3 className="text-2xl font-semibold text-gray-700 mb-6">
          Technical Skills
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
          Tools & Platforms
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
