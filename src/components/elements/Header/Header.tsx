import { faLightbulb, faSwatchbook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../context/themeContext";
import Menu from "../Menu/Menu";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <header data-theme={theme}>
      <h1 onClick={() => navigate("/")}>Jonathan Potter</h1>
      <span onClick={toggleTheme}>
        <FontAwesomeIcon icon={faSwatchbook} />
      </span>
      <Menu />
    </header>
  );
};

export default Header;
