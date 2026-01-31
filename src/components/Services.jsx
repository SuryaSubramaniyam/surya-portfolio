// src/components/Services.jsx
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Database,
  Globe,
  Smartphone,
  Rocket,
} from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description:
      "Building responsive, fast, and modern web interfaces using React, JavaScript, and Tailwind CSS.",
    icon: <Code className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "UI Design & Development",
    description:
      "Designing clean, intuitive, and visually appealing user interfaces with modern design principles and Figma.",
    icon: <Palette className="w-8 h-8 text-pink-500" />,
  },
  {
    title: "Graphic Design",
    description:
      "Creating engaging visual designs, banners, and layouts using Canva and design best practices.",
    icon: <Database className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Website Development",
    description:
      "Developing complete, professional websites with clean structure, smooth navigation, and responsive layouts.",
    icon: <Smartphone className="w-8 h-8 text-purple-600" />,
  },
  {
    title: "Deployment & Hosting",
    description:
      "Deploying frontend and backend applications on Vercel and Render with production-ready builds.",
    icon: <Rocket className="w-8 h-8 text-orange-500" />,
  },
  {
    title: "Full Stack Project Support",
    description:
      "Building complete project workflows with frontend, backend integration, and API consumption when required.",
    icon: <Globe className="w-8 h-8 text-blue-600" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          My Services
        </h2>
        <p className="text-center text-gray-600 mt-3 mb-14">
          What I can do for you
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04, y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-7 bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
