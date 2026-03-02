import React from "react";
import { motion } from "framer-motion";

import desi from "../assets/desi-etsy.png";
import hyperlocal from "../assets/hyperlocal.png";
import restrobit from "../assets/restrobit.png";
import greengrocery from "../assets/greengrocery.png";
import employee from "../assets/employee-crud.png";

const projectsData = [
  {
    title: "Desi Etsy",
    image: desi,
    description:
      "A full-stack handmade products marketplace with artisan onboarding and secure checkout.",
    liveLink: "https://desi-etsy-frontend-v2.vercel.app",
    codeLink: "#",
  },
  {
    title: "Hyperlocal Services",
    image: hyperlocal,
    description:
      "On-demand service booking platform with real-time payments and dashboards.",
    liveLink: "https://hyperlocal-frontend-v2.vercel.app",
    codeLink: "#",
  },
  {
    title: "Restrobit Dashboard",
    image: restrobit,
    description:
      "Restaurant management dashboard for orders, menu, analytics, and real-time updates.",
    liveLink: "https://restrobit-dashboard-v1.vercel.app",
    codeLink: "#",
  },
  {
    title: "Green Grocery",
    image: greengrocery,
    description:
      "Online grocery shopping app with product listings, cart system, and modern responsive UI.",
    liveLink: "https://greengrocery-v1.vercel.app",
    codeLink: "#",
  },

  {
    title: "Employee CRUD",
    image: employee,
    description:
      "Employee management system with Create, Read, Update, and Delete operations using React.",
    liveLink:
      "https://employee-frontend-qexe0e7ig-surya-ss-projects-2e8e98a2.vercel.app",
    codeLink: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white px-4 sm:px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-3">
            Projects
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Some of my best frontend & full-stack work
          </p>
        </div>

        {/* Horizontal Scroll */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 snap-x snap-mandatory">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="
                group relative flex-shrink-0
                w-[90%] sm:w-[70%] md:w-[360px]
                bg-white rounded-xl overflow-hidden
                border border-gray-200 hover:shadow-xl
                transition-all duration-500 snap-center
              "
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 object-cover
                             transform group-hover:scale-110
                             transition-transform duration-700"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t
                             from-indigo-900/80 via-indigo-700/40 to-transparent
                             opacity-0 group-hover:opacity-100
                             transition-opacity duration-500"
                />

                {/* Hover Content */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white
                             translate-y-8 opacity-0
                             group-hover:translate-y-0 group-hover:opacity-100
                             transition-all duration-500"
                >
                  <h3 className="text-base sm:text-lg font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-indigo-100 mb-3 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 bg-white text-indigo-700
                                 rounded-lg text-xs sm:text-sm font-medium
                                 hover:bg-indigo-100 transition"
                    >
                      Live
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3 py-2 border border-white text-white
                                 rounded-lg text-xs sm:text-sm font-medium
                                 hover:bg-white hover:text-indigo-700 transition"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Normal Content */}
              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
