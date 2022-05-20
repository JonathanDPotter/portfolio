import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import AboutMe from "./components/pages/AboutMe/AboutMe";
import Projects from "./components/pages/Projects/Projects";
import Header from "./components/elements/Header/Header";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";

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
      </Routes>
    </HashRouter>
  );
}

export default Router;
