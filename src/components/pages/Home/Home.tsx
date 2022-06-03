import React from "react";
import Button from "../../elements/Button/Button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../context/themeContext";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <div className="home page" data-theme={theme}>
      <div className="container">
        <img
          src="https://res.cloudinary.com/skarsnik/image/upload/v1654252881/webSelfBW_krqju9.png"
          alt="man in glasses smiling"
        />
        <nav>
          <Button
            text="About Me"
            size={2}
            rounded
            onClick={() => navigate("/aboutme")}
          />
          <Button
            text="Projects"
            size={2}
            rounded
            onClick={() => navigate("/projects")}
          />
        </nav>
      </div>
    </div>
  );
};

export default Home;
