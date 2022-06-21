import React, { useEffect, useState } from "react";
import { useTheme } from "../../../context/themeContext";
import "./About.scss";

const About = () => {
  const { theme } = useTheme();
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false);
  }, []);

  return (
    <div className={fade ? "about page fade" : "about page"} data-theme={theme}>
      <h2>About</h2>
      <section className="info">
        <p>
          This site is intended as a showcase of my skills as a web developer
          with an emphasis on full-stack projects that use a MERN stack. The
          majority of the projects here are written using typescript.
        </p>
        <br />
        <p>
          This site was written in typescript with react and does not utilize a
          back-end. I use sass for styling, the context api for global state
          management, react-intersection-observer for scroll events,
          react-markdown to display markdown, react-pdf to display a pdf,
          react-modal to show modals, uuid for element keys, and fontawesome for
          icons.
        </p>
      </section>
    </div>
  );
};

export default About;
