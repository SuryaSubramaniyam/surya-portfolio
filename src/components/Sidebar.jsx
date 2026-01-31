import React from "react";

const Sidebar = ({ setPage }) => {
  return (
    <div className="w-64 bg-gray-100 min-h-screen p-6">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <ul className="space-y-4">
        <li
          className="cursor-pointer hover:text-indigo-600"
          onClick={() => setPage("home")}
        >
          Home
        </li>
        <li
          className="cursor-pointer hover:text-indigo-600"
          onClick={() => setPage("about")}
        >
          About
        </li>
        <li
          className="cursor-pointer hover:text-indigo-600"
          onClick={() => setPage("experience")}
        >
          Experience
        </li>
        <li
          className="cursor-pointer hover:text-indigo-600"
          onClick={() => setPage("education")}
        >
          Education
        </li>
        <li
          className="cursor-pointer hover:text-indigo-600"
          onClick={() => setPage("services")}
        >
          Services
        </li>
        <li
          className="cursor-pointer hover:text-indigo-600"
          onClick={() => setPage("projects")}
        >
          Projects
        </li>
        <li
          className="cursor-pointer hover:text-indigo-600"
          onClick={() => setPage("achievements")}
        >
          Achievements
        </li>
        <li
          className="cursor-pointer hover:text-indigo-600"
          onClick={() => setPage("certifications")}
        >
          Certifications
        </li>
        <li
          className="cursor-pointer hover:text-indigo-600"
          onClick={() => setPage("contact")}
        >
          Contact
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
