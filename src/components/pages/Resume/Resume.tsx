import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../../context/themeContext";
import "./Resume.scss";

const Resume = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [fade, setFade] = useState(true);

  const changePage = (navigator: () => void) => {
    setFade(true);
    setTimeout(() => {
      navigator();
    }, 250);
  };

  useEffect(() => {
    setFade(false);
  });

  return (
    <div
      className={fade ? "resume page fade" : "resume page"}
      data-theme={theme}
    >
      <iframe
        src="https://drive.google.com/file/d/1Cgr42ZO9ryWBo0VB8VGh8a2lQSgTXDh5/preview"
        allow="autoplay"
      ></iframe>
      <nav>
        <a href="https://drive.google.com/uc?export=download&id=1Cgr42ZO9ryWBo0VB8VGh8a2lQSgTXDh5">
          Download
        </a>
        <span onClick={() => changePage(() => navigate("/contact"))}>
          Contact
        </span>
        <a
          href="https://github.com/JonathanDPotter"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/jonathan-potter-a806b8239/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </nav>
    </div>
  );
};

export default Resume;

// https://drive.google.com/file/d/1Cgr42ZO9ryWBo0VB8VGh8a2lQSgTXDh5/view?usp=sharing
