import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="hamburger-icon" onClick={() => setMenuOpen(!menuOpen)}>
      <div className={menuOpen ? "icon-1 open" : "icon-1"}></div>
      <div className={menuOpen ? "icon-2 open" : "icon-2"}></div>
      <div className={menuOpen ? "icon-3 open" : "icon-3"}></div>
      <nav className={menuOpen ? "options open" : "options closed"}>
        <ul>
          <a href="https://github.com/JonathanDPotter" target="_blank">
            <li>github</li>
          </a>
          <a
            href="https://linkedin.com/in/jonathan-potter-a806b8239"
            target="_blank"
          >
            <li>linkedIn</li>
          </a>
          <li onClick={() => navigate("/contact")}>contact</li>
          <li onClick={() => navigate("/about")}>about</li>
          <li onClick={() => navigate("/resume")}>resume </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
