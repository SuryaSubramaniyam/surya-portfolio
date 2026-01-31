import React from "react";
import { motion } from "framer-motion";

import infoIntern from "../assets/internship.png";
import webUdemy from "../assets/webdev.png";
import sqlGL from "../assets/sql.png";
import dbmsNptel from "../assets/nptl.png";
import excelAdv from "../assets/excel.png";
const certificationsData = [
  {
    image: infoIntern,
    title: "Web Developer Internship",
    platform: "Infotact Solutions",
    year: "2025",
    description:
      "Completed a hands-on web development internship working on real-world projects using HTML, CSS, JavaScript, and basic React, focusing on frontend UI and responsive design.",
  },
  {
    image: webUdemy,
    title: "Web Development Course",
    platform: "Udemy",
    year: "2025",
    description:
      "Comprehensive web development training covering HTML, CSS, JavaScript, responsive design, and modern frontend best practices.",
  },
  {
    image: sqlGL,
    title: "SQL Course",
    platform: "Great Learning",
    year: "2025",
    description:
      "Learned SQL fundamentals including queries, joins, subqueries, and database design concepts for real-world applications.",
  },
  {
    image: dbmsNptel,
    title: "DBMS Certification",
    platform: "NPTEL",
    year: "2024",
    description:
      "Studied core database management concepts including ER modeling, normalization, indexing, transactions, and relational database design.",
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
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-2">
            Achievements & Certifications
          </h2>
          <p className="text-gray-600">
            Certifications and milestones in my learning journey
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
                w-[90%] sm:w-[70%] md:w-[320px]
                bg-white rounded-xl overflow-hidden
                border border-gray-200
                hover:shadow-xl hover:-translate-y-1
                transition-all duration-300
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
