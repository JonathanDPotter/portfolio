import React, { useState } from "react";
import Modal from "react-modal";
import { v4 as uuid } from "uuid";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../../../context/themeContext";
import Menu from "../Menu/Menu";
import Themes from "../../../Types/enums/themes";
import Button from "../Button/Button";
import "./Header.scss";

const Header = () => {
  const { theme, setTheme, themesOpen, setThemesOpen } = useTheme();

  const location = useLocation();

  Modal.setAppElement("#root");

  const themes = Object.keys(Themes);

  const themeChooser = (newTheme: string) => {
    setTheme(newTheme);
    setThemesOpen(false);
  };

  return (
    <header data-theme={theme} data-location={location.pathname}>
      <h1>Jonathan Potter</h1>
      <Menu />
      <nav>
        <NavLink to="/" tabIndex={location.pathname === "/" ? -1 : 0}>
          <div className="text-container">Home</div>
        </NavLink>
        <NavLink to="/projects" tabIndex={location.pathname === "/" ? -1 : 0}>
          <div className="text-container">Projects</div>
        </NavLink>
        <NavLink to="/aboutme" tabIndex={location.pathname === "/" ? -1 : 0}>
          <div className="text-container">About Me</div>
        </NavLink>
        <NavLink to="/contact" tabIndex={location.pathname === "/" ? -1 : 0}>
          <div className="text-container">Contact</div>
        </NavLink>
        <NavLink to="/about" tabIndex={location.pathname === "/" ? -1 : 0}>
          <div className="text-container">About</div>
        </NavLink>
      </nav>
      <Modal
        isOpen={themesOpen}
        className={`modal header ${theme}`}
        onRequestClose={() => setThemesOpen(false)}
        overlayClassName="overlay"
        data-header="true"
        data-theme={theme}
      >
        {themes.map((themeName) => (
          <Button
            text={themeName}
            size={1}
            onClick={() => themeChooser(themeName)}
            key={uuid()}
            style={{ width: "5rem" }}
          />
        ))}
        <Button text="cancel" size={1} onClick={() => setThemesOpen(false)} />
      </Modal>
    </header>
  );
};

export default Header;
