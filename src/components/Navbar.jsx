import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    "Home",
    "About",
    "Experience",
    "Services",
    "Skills",
    "Projects",
    "Achievements",
    "Contact",
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // Use gradient background if you like, otherwise keep white/blur
      // className="fixed top-0 left-0 w-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600 shadow-md z-50"
      className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 cursor-pointer"
        >
          SURYA S
        </motion.h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative text-gray-700 font-medium transition-all duration-300 hover:text-indigo-600 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-2xl cursor-pointer text-indigo-600"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-2xl cursor-pointer text-indigo-600"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col items-center bg-white/90 backdrop-blur-md shadow-lg py-4 space-y-4"
        >
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 font-medium hover:text-indigo-600 transition-colors duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
