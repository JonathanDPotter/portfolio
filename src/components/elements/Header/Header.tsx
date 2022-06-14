import React, { useState } from "react";
import Modal from "react-modal";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../context/themeContext";
import { faSwatchbook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Menu from "../Menu/Menu";
import "./Header.scss";
import Themes from "../../../Types/enums/themes";
import Button from "../Button/Button";

const Header = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();
  const [themesOpen, setThemesOpen] = useState(false);

  Modal.setAppElement("#root");

  const themes = Object.keys(Themes);

  const themeChooser = (newTheme: string) => {
    setTheme(newTheme);
    setThemesOpen(false);
  };

  return (
    <header data-theme={theme}>
      <h1 aria-label="Home" onClick={() => navigate("/")}>
        Jonathan Potter
      </h1>
      <div
        onClick={() => setThemesOpen(!themesOpen)}
        className="theme-chooser"
        aria-label="Theme"
      >
        <FontAwesomeIcon icon={faSwatchbook} />
      </div>
      <Menu />
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
          />
        ))}
        <Button text="Cancel" size={1} onClick={() => setThemesOpen(false)} />
      </Modal>
    </header>
  );
};

export default Header;
