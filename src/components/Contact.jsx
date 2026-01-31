import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaUserTie,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("Something went wrong. Please try again.");
        },
      );
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Let’s build something amazing together. Reach out anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-stretch">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              relative rounded-3xl p-8 md:p-10
              bg-white/70 backdrop-blur-xl
              border border-white/60
              shadow-xl
            "
          >
            {/* Profile */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center shadow-lg">
                <FaUserTie className="text-white text-2xl" />
              </div>
              <div>
                <p className="text-xl font-bold text-gray-800">Surya S</p>
                <p className="text-gray-500">Frontend & UI Developer</p>
              </div>
            </div>

            {/* Info Cards */}
            <div className="space-y-5 mb-8">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow hover:shadow-md transition">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center">
                  <FaEnvelope className="text-white" />
                </div>
                <p className="text-gray-700 break-all">
                  suryasubramaniyam19@gmail.com
                </p>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow hover:shadow-md transition">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center">
                  <FaPhone className="text-white" />
                </div>
                <p className="text-gray-700">+91 9080995182</p>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow hover:shadow-md transition">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-indigo-500 to-cyan-500 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <p className="text-gray-700">Bengaluru, Karnataka, India</p>
              </div>
            </div>

            {/* About */}
            <p className="text-gray-600 leading-relaxed mb-8">
              I’m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Let’s connect!
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                {
                  icon: <FaLinkedin />,
                  link: "https://www.linkedin.com/in/suryas19",
                  colors: "from-indigo-500 to-purple-500",
                },
                {
                  icon: <FaGithub />,
                  link: "https://github.com/SuryaSubramaniyam",
                  colors: "from-purple-500 to-pink-500",
                },
                {
                  icon: <FaEnvelope />,
                  link: "mailto:suryasubramaniyam19@gmail.com",
                  colors: "from-indigo-500 to-cyan-500",
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`
                    w-12 h-12 rounded-full flex items-center justify-center
                    bg-gradient-to-tr ${item.colors}
                    text-white text-xl
                    shadow-lg hover:shadow-xl
                    transition-all duration-300
                    hover:scale-110
                  `}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Card – Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="
              relative rounded-3xl p-8 md:p-10
              bg-white/80 backdrop-blur-xl
              border border-white/60
              shadow-xl
            "
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Send a Message
            </h3>

            <div className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="
                    w-full p-3 rounded-xl border border-gray-200
                    focus:outline-none focus:ring-2
                    focus:ring-indigo-500
                  "
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="
                    w-full p-3 rounded-xl border border-gray-200
                    focus:outline-none focus:ring-2
                    focus:ring-purple-500
                  "
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="
                    w-full p-3 rounded-xl border border-gray-200
                    focus:outline-none focus:ring-2
                    focus:ring-pink-500
                  "
                ></textarea>
              </div>
            </div>

            {/* Gradient Button */}
            <button
              type="submit"
              className="
                relative mt-8 w-full py-4 rounded-xl
                text-white font-semibold tracking-wide
                bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
                shadow-lg hover:shadow-2xl
                transition-all duration-500
                overflow-hidden group
              "
            >
              <span
                className="
                  absolute inset-0 bg-gradient-to-r
                  from-transparent via-white/20 to-transparent
                  translate-x-[-100%]
                  group-hover:translate-x-[100%]
                  transition-transform duration-700
                "
              />
              <span className="relative z-10">Send Message</span>
            </button>

            {submitted && (
              <p className="text-green-600 font-medium mt-5 text-center">
                Thank you! Your message has been sent.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
