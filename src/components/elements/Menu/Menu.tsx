import React, { FC, useState } from "react";
import { useTheme } from "../../../context/themeContext";
import "./Menu.scss";

const Menu: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setThemesOpen } = useTheme();

  return (
    <button
      className="hamburger-icon"
      onClick={() => setMenuOpen(!menuOpen)}
      data-theme={theme}
      tab-index={0}
      aria-label="menu"
    >
      <div className={menuOpen ? "icon-1 open" : "icon-1"}></div>
      <div className={menuOpen ? "icon-2 open" : "icon-2"}></div>
      <div className={menuOpen ? "icon-3 open" : "icon-3"}></div>
      <div className={menuOpen ? "options open" : "options closed"}>
        <ul>
          <li onClick={() => setThemesOpen(true)} tabIndex={menuOpen ? 0 : -1}>
            theme
          </li>
          <li>
            <a
              href="https://github.com/JonathanDPotter" 
              target="_blank"
              rel="noreferrer"
              tabIndex={menuOpen ? 0 : -1}
            >
              github
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/jonathan-potter-a806b8239"
              target="_blank"
              rel="noreferrer"
              tabIndex={menuOpen ? 0 : -1}
            >
              linkedIn
            </a>
          </li>
        </ul>
      </div>
    </button>
  );
};

export default Menu;
