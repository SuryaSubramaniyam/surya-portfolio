import React from "react";
import { motion } from "framer-motion";

import portfolio from "../assets/portfolio-design.png";
import greengrocery from "../assets/greengrocery.png";
import restrobit from "../assets/restrobit.png";
import mothersday from "../assets/Mothersday-poster.png";

const projectsData = [
  {
    title: "Mother's Day Social Media Poster",
    image: mothersday,
    category: "Social Media Design",
    description:
      "Designed a heartfelt Mother's Day promotional poster featuring elegant typography, floral elements, and emotional visual storytelling to celebrate and honor mothers.",
    tools: "Canva • Photoshop",
  },

  {
    title: "Personal Graphic Design Portfolio",
    image: portfolio,
    category: "Branding & Portfolio Design",
    description:
      "Designed and developed a modern personal portfolio focused on visual storytelling, clean layouts, professional presentation, and strong personal branding.",
    tools: "Canva • Figma",
  },

  {
    title: "Green Grocery UI Design",
    image: greengrocery,
    category: "UI/UX Design",
    description:
      "Created responsive user interfaces, modern layouts, and engaging visual components while focusing on usability and user experience.",
    tools: "Figma • Canva",
  },

  {
    title: "Restrobit Dashboard Design",
    image: restrobit,
    category: "Dashboard Design",
    description:
      "Designed intuitive dashboard screens, data visualization layouts, structured navigation systems, and clean user experiences.",
    tools: "Figma",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 overflow-hidden">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-4">
            Portfolio Showcase
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Featured Design Works
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            A collection of graphic design, branding, and UI/UX projects
            showcasing creativity, visual storytelling, and modern design
            principles.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          className="
    flex
    gap-6
    overflow-x-auto
    pb-4
    snap-x
    snap-mandatory
    scrollbar-thin
    scrollbar-thumb-indigo-400
    scrollbar-track-transparent
  "
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
  flex-shrink-0
  w-[320px]
  md:w-[380px]
  bg-white
  rounded-3xl
  overflow-hidden
  shadow-lg
  hover:shadow-2xl
  transition-all
  duration-500
  group
  snap-center
"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
    w-full
    aspect-[4/5]
    object-cover
    object-center
    group-hover:scale-105
    transition-transform
    duration-700
  "
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span
                  className="
                    inline-block
                    px-3
                    py-1
                    rounded-full
                    bg-indigo-100
                    text-indigo-700
                    text-xs
                    font-medium
                    mb-4
                  "
                >
                  {project.category}
                </span>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold text-gray-700">Tools:</span>{" "}
                    {project.tools}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
