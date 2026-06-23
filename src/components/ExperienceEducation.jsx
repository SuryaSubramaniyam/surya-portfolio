import React from "react";
import { motion } from "framer-motion";

/* -------------------------
   Data (your provided data)
   ------------------------- */
const experienceData = [
  {
    icon: "🎨",
    title: "Graphic Designer",
    company: "Freelance & Personal Projects",
    duration: "2025 - Present",
    responsibilities: [
      "Designed social media creatives, promotional banners, and marketing materials",
      "Created logo concepts, brand identity elements, and visual assets",
      "Designed engaging posters, event graphics, and digital advertisements",
      "Worked with Canva, Adobe Photoshop, Illustrator, and Figma to create professional designs",
    ],
    skills: ["Photoshop", "Canva", "Branding"],
  },

  {
    icon: "✨",
    title: "Creative Design Trainee",
    company: "Self Learning & Practice Projects",
    duration: "2024 - 2025",
    responsibilities: [
      "Learned visual design principles, typography, color theory, and layout composition",
      "Created portfolio projects including logos, posters, flyers, and social media campaigns",
      "Improved branding and storytelling skills through practical design exercises",
      "Developed creative problem-solving abilities and attention to visual detail",
    ],
    skills: ["Illustrator", "Typography", "Social Media Design"],
  },
  {
    icon: "🛠",
    title: "Web Development Trainee",
    company: "Infotact Solutions, Banglore",
    duration: "May 2025 – Aug 2025 ",
    responsibilities: [
      "Built full-stack MERN applications",
      "Collaborated on project planning and deployment",
      "Built full-stack MERN applications",
      "Gained hands-on experience with React, Git, and deployment workflows",
    ],
  },
];

const educationData = [
  {
    year: " 2022 – 2024 ",
    degree: "Master of Computer Applications (MCA)",
    college: "Adhiparasakthi College of Arts and Science kalavai Tamil Nadu",
    university: "Thiruvalluvar University",
    cgpa: "8.4 / 10",
  },
  {
    year: "2019 - 2022",
    degree: "Bachelor Of Computer Application(BCA) ",
    college: " Arignar Anna Government Arts College, Cheyyar, Tamil Nadu.",
    university: "Thiruvalluvar University",
    cgpa: "8.0 / 10",
  },
];

/* -------------------------
   Reusable Card Component
   - default: white background
   - on hover: gradient background + stronger shadow + slight scale
   ------------------------- */

/* -------------------------
   Themed Card (Responsive)
------------------------- */
const ThemedCard = ({ children, icon, title, subtitle, meta, badge }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{
        scale: 1.03,
        y: -8,
      }}
      className="
        group bg-white rounded-xl
        p-4 md:p-6
        shadow-md transition-all duration-300 cursor-pointer
        hover:shadow-xl
        group-hover:bg-gradient-to-r group-hover:from-purple-100 group-hover:to-indigo-100
      "
    >
      <div className="flex items-start mb-3 md:mb-4">
        {/* Icon */}
        <div
          className="
            w-10 h-10 md:w-12 md:h-12
            flex items-center justify-center
            rounded-full text-lg md:text-xl flex-shrink-0
            bg-purple-500 text-white
          "
        >
          {icon}
        </div>

        {/* Text */}
        <div className="ml-3 md:ml-4 flex-1">
          {title && (
            <h3 className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-200">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-xs md:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
              {subtitle}
            </p>
          )}
          {meta && (
            <p className="mt-1 text-[11px] md:text-xs text-gray-400 group-hover:text-gray-700 transition-colors duration-200">
              {meta}
            </p>
          )}
        </div>
      </div>

      {/* Body Content */}
      <div className="text-gray-700 group-hover:text-gray-800 transition-colors duration-200 text-sm md:text-base leading-snug line-clamp-4 md:line-clamp-none">
        {children}
      </div>

      {/* Badge */}
      {badge && (
        <div className="mt-3 md:mt-4">
          <span
            className="
              inline-block px-3 py-1
              bg-indigo-100 text-indigo-700
              font-semibold rounded-full
              text-xs md:text-sm
              transition-colors duration-200
              group-hover:bg-indigo-700 group-hover:text-white
            "
          >
            {badge}
          </span>
        </div>
      )}
    </motion.div>
  );
};

/* -------------------------
   Experience Card
------------------------- */
const ExperienceCard = ({ item }) => {
  return (
    <ThemedCard
      icon={item.icon}
      title={item.title}
      subtitle={item.company}
      meta={item.duration}
    >
      <ul className="list-disc list-inside space-y-1 text-xs md:text-sm">
        {item.responsibilities.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-4">
        {item.skills?.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </ThemedCard>
  );
};

/* -------------------------
   Education Card
------------------------- */
const EducationCard = ({ item }) => {
  return (
    <ThemedCard
      icon={"🎓"}
      title={item.degree}
      subtitle={item.college}
      meta={item.university + " • " + item.year}
      badge={`CGPA: ${item.cgpa}`}
    >
      <p className="text-xs md:text-sm text-gray-700 mt-1 line-clamp-3 md:line-clamp-none">
        Developed strong creative thinking, problem-solving abilities,
        communication, and digital skills. My academic journey strengthened my
        ability to combine creativity with technology, helping me build visually
        engaging and impactful design solutions.
      </p>
    </ThemedCard>
  );
};

/* -------------------------
   Main Section
------------------------- */
const ExperienceEducation = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-2">
            Creative Journey & Education
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            My creative experience, design journey, and educational foundation
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6 border-l-4 border-indigo-600 pl-3">
              Design Experience
            </h3>

            <div className="space-y-6 md:space-y-8">
              {experienceData.map((exp, idx) => (
                <ExperienceCard key={idx} item={exp} />
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6 border-l-4 border-purple-600 pl-3">
              Academic Background
            </h3>

            <div className="space-y-6 md:space-y-8">
              {educationData.map((edu, idx) => (
                <EducationCard key={idx} item={edu} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;
