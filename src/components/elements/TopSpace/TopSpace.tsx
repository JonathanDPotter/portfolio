import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../../../context/themeContext";
import Button from "../Button/Button";

const TopSpace = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme();

  return (
    <div className="top-space" data-theme={theme}>
      {location.pathname === "/projects" ? <h2>Projects</h2> : <></>}
      {location.pathname === "/aboutme" ? <h2>About Me</h2> : <></>}
      <nav>
        <Button size={2} text="Home" rounded onClick={() => navigate("/")} />
        {location.pathname === "/projects" ? (
          <Button
            size={2}
            text="About Me"
            rounded
            onClick={() => navigate("/aboutme")}
          />
        ) : (
          <></>
        )}
        {location.pathname === "/aboutme" ? (
          <Button
            size={2}
            text="Projects"
            rounded
            onClick={() => navigate("/projects")}
          />
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
};

export default TopSpace;
