import React, { FC } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../../../context/themeContext";
import Button from "../Button/Button";

interface Iprops {
  fadeOut: () => void;
}

const TopSpace: FC<Iprops> = ({ fadeOut }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme();

  const changePage = (navigator: () => void) => {
    fadeOut();
    setTimeout(() => {
      navigator();
    }, 250);
  };

  return (
    <div className="top-space" data-theme={theme}>
      {location.pathname === "/projects" ? <h2>Projects</h2> : <></>}
      {location.pathname === "/aboutme" ? <h2>About Me</h2> : <></>}
      <nav>
        <Button
          size={2}
          text="Home"
          onClick={() => changePage(() => navigate("/"))}
        />
        {location.pathname === "/projects" ? (
          <Button
            size={2}
            text="About Me"
            onClick={() => changePage(() => navigate("/aboutme"))}
          />
        ) : (
          <></>
        )}
        {location.pathname === "/aboutme" ? (
          <Button
            size={2}
            text="Projects"
            onClick={() => changePage(() => navigate("/projects"))}
          />
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
};

export default TopSpace;
