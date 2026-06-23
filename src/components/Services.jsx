// src/components/Services.jsx
import { motion } from "framer-motion";
import {
  Palette,
  PenTool,
  Image,
  Brush,
  Layers,
  MonitorSmartphone,
} from "lucide-react";

const services = [
  {
    title: "Logo Design",
    description:
      "Crafting memorable and professional logos that represent your brand identity and create a lasting impression.",
    icon: <PenTool className="w-8 h-8 text-indigo-600" />,
  },

  {
    title: "Brand Identity",
    description:
      "Developing complete visual identity systems including color palettes, typography, and brand guidelines.",
    icon: <Layers className="w-8 h-8 text-purple-600" />,
  },

  {
    title: "Social Media Creatives",
    description:
      "Designing engaging Instagram posts, Facebook ads, stories, and promotional content that attracts audiences.",
    icon: <Image className="w-8 h-8 text-pink-500" />,
  },

  {
    title: "Poster & Flyer Design",
    description:
      "Creating impactful posters, flyers, brochures, and event marketing materials with strong visual appeal.",
    icon: <Brush className="w-8 h-8 text-orange-500" />,
  },

  {
    title: "Marketing Materials",
    description:
      "Designing banners, advertisements, business cards, and promotional assets tailored to business goals.",
    icon: <Palette className="w-8 h-8 text-green-600" />,
  },

  {
    title: "UI/UX Design",
    description:
      "Designing modern user interfaces, wireframes, and digital experiences focused on usability and aesthetics.",
    icon: <MonitorSmartphone className="w-8 h-8 text-blue-600" />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-medium text-sm mb-4">
            Creative Services
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            What I Can Create
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Helping brands communicate effectively through creative design,
            visual storytelling, and impactful digital experiences.
          </p>
        </div>
        <p className="text-center text-gray-600 mt-3 mb-14">
          What I can do for you
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.04, y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="
p-8
bg-white/80
backdrop-blur-sm
rounded-3xl
border border-white
shadow-lg
hover:shadow-2xl
transition-all
duration-500
group
"
            >
              <div className="flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
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
