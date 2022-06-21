import React, { useEffect, useState } from "react";
import Button from "../../elements/Button/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../../../context/themeContext";
import "./Home.scss";

const Home = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [fade, setFade] = useState(true);

  const location = useLocation();

  const changePage = (navigator: () => void) => {
    setFade(true);
    setTimeout(() => {
      navigator();
    }, 250);
  };

  useEffect(() => {
    setFade(false);
  }, []);

  return (
    <div
      className={fade ? "home page fade" : "home page"}
      data-theme={theme}
      data-location={location.pathname}
    >
      <div className="container">
        <img
          src="https://res.cloudinary.com/skarsnik/image/upload/v1655749376/portfolioAssets/homePage_hpzuur.jpg"
          alt="man in glasses smiling"
        />
        <nav>
          <Button
            text="Projects"
            size={4}
            onClick={() => changePage(() => navigate("/projects"))}
          />
          <Button
            text="About Me"
            size={4}
            onClick={() => changePage(() => navigate("/aboutme"))}
          />
          <Button
            text="Resume"
            size={4}
            onClick={() => changePage(() => navigate("/resume"))}
          />
          <Button
            text="Contact"
            size={4}
            onClick={() => changePage(() => navigate("/contact"))}
          />
          <Button
            text="About"
            size={4}
            onClick={() => changePage(() => navigate("/about"))}
          />
        </nav>
      </div>
    </div>
  );
};

export default Home;
