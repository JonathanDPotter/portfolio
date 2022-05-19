import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Projects from "./components/pages/Projects/Projects";

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
