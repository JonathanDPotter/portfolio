import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../context/themeContext";
import "./Menu.scss";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <div
      className="hamburger-icon"
      onClick={() => setMenuOpen(!menuOpen)}
      data-theme={theme}
    >
      <div className={menuOpen ? "icon-1 open" : "icon-1"}></div>
      <div className={menuOpen ? "icon-2 open" : "icon-2"}></div>
      <div className={menuOpen ? "icon-3 open" : "icon-3"}></div>
      <nav className={menuOpen ? "options open" : "options closed"}>
        <ul>
          <li>
            <a
              href="https://github.com/JonathanDPotter"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/jonathan-potter-a806b8239"
              target="_blank"
              rel="noreferrer"
            >
              linkedIn
            </a>
          </li>
          <li onClick={() => navigate("/contact")}>contact</li>
          <li onClick={() => navigate("/about")}>about</li>
          <li onClick={() => navigate("/resume")}>resume </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
