import React from "react";
import { motion } from "framer-motion";

import graphicBootcamp from "../assets/graphic-design-certificate.png";
import canvaMastery from "../assets/canva-certificate.png";
import figmaDesign from "../assets/figma-certificate.png";
import infoIntern from "../assets/internship.png";
import excelAdv from "../assets/excel.png";
const certificationsData = [
  {
    image: graphicBootcamp,
    title: "Complete Graphic Design Bootcamp",
    platform: "Udemy",
    year: "2026",
    description:
      "Mastered graphic design fundamentals including typography, color theory, branding, layout design, visual hierarchy, logo creation, and professional design workflows.",
  },

  {
    image: canvaMastery,
    title: "Canva Mastery for Graphic Design",
    platform: "Udemy",
    year: "2026",
    description:
      "Learned advanced Canva techniques for creating social media creatives, marketing materials, presentations, posters, banners, and visual content for digital platforms.",
  },

  {
    image: figmaDesign,
    title: "Figma UI/UX Design",
    platform: "Udemy",
    year: "2026",
    description:
      "Designed wireframes, user interfaces, prototypes, and user experiences using Figma while applying modern UI/UX principles and design systems.",
  },
  {
    image: infoIntern,
    title: "Web Developer Internship",
    platform: "Infotact Solutions",
    year: "2025",
    description:
      "Completed a hands-on web development internship working on real-world projects using HTML, CSS, JavaScript, and basic React, focusing on frontend UI and responsive design.",
  },

  {
    image: excelAdv,
    title: "Advanced Excel Certification",
    platform: "Udemey",
    year: "2025",
    description:
      "Gained expertise in advanced Excel features including formulas, pivot tables, data analysis, charts, and automation basics.",
  },
];

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-2">
            Certifications & Creative Learning
          </h2>
          <p className="text-gray-600">
            Professional certifications that strengthened my graphic design,
            branding, and UI/UX design skills.
          </p>
        </div>

        {/* Horizontal Scroll Row */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="
group flex-shrink-0 snap-center
w-[320px] md:w-[380px]
bg-white rounded-3xl overflow-hidden
shadow-lg hover:shadow-2xl
hover:-translate-y-2
transition-all duration-500
"
            >
              {/* Image */}
              <div className="relative w-full h-40 sm:h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover
                             transform group-hover:scale-110
                             transition-transform duration-500"
                />

                {/* Soft overlay on hover */}
                <div
                  className="absolute inset-0 bg-indigo-900/10
                             opacity-0 group-hover:opacity-100
                             transition-opacity duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 text-center">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm text-indigo-600 font-medium mb-2">
                  {cert.platform} • {cert.year}
                </p>

                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {cert.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs">
                    Design
                  </span>

                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                    Creativity
                  </span>

                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-xs">
                    Visual Design
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
