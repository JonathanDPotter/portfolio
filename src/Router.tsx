import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
// components
import Header from "./components/elements/Header/Header";
import Home from "./components/pages/Home/Home";
import AboutMe from "./components/pages/AboutMe/AboutMe";
import Projects from "./components/pages/Projects/Projects";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Resume from "./components/pages/Resume/Resume";
import NotFound from "./components/pages/NotFound/NotFound";
import Howler from "./components/projectPages/Howler";

function Router() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects/howler" element={<Howler />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
