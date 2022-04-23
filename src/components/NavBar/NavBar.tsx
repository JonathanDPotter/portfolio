import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <header>
      <p className="title">Jonathan Potter</p>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
