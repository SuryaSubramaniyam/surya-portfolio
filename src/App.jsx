import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceEducation from "./components/ExperienceEducation";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ExperienceEducation />
      <Services />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
