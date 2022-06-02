import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import Button from "../../elements/Button/Button";
import Project from "../../elements/Project/Project";
import Colors from "../../../Types/Enums/colors";
import howlerMarkdown from "../../../markdown/howlerMarkdown.md";
import blogMarkdown from "../../../markdown/blogMarkown.md";
import upcMarkdown from "../../../markdown/upcMarkdown.md";
import weatherMarkdown from "../../../markdown/weatherMarkdown.md";
import "./Projects.scss";
import TriggerOnScroll from "../../elements/TriggerOnScroll/TriggerOnScroll";

const Projects = () => {
  const navigate = useNavigate();

  Modal.setAppElement("#root");

  const [howlerMarkdownText, setHowlerMarkdownText] = useState("");
  const [blogMarkdownText, setBlogMarkdownText] = useState("");
  const [upcMarkdownText, setUpcMarkdownText] = useState("");
  const [weatherMarkdownText, setWeatherMarkdownText] = useState("");

  const markdowns = [
    {
      markdown: howlerMarkdown,
      setter: setHowlerMarkdownText,
      text: howlerMarkdownText,
      image:
        "https://user-images.githubusercontent.com/30156468/168443012-07a97953-a127-472b-934c-702196719630.png",
      link: "https://github.com/JonathanDPotter/howler",
    },
    {
      markdown: blogMarkdown,
      setter: setBlogMarkdownText,
      text: blogMarkdownText,
      image:
        "https://user-images.githubusercontent.com/30156468/167709749-baf6b890-6e25-4150-b88f-840ddd2f01e5.png",
      link: "https://github.com/JonathanDPotter/blog-api-front",
    },
    {
      markdown: upcMarkdown,
      setter: setUpcMarkdownText,
      text: upcMarkdownText,
      image:
        "https://user-images.githubusercontent.com/30156468/171711143-1abdfe24-3fff-45e7-910d-995d3ed8fd24.png",
      link: "https://github.com/JonathanDPotter/upc-tracker-front",
    },
    {
      markdown: weatherMarkdown,
      setter: setWeatherMarkdownText,
      text: weatherMarkdownText,
      image:
        "https://user-images.githubusercontent.com/30156468/168269677-996c3723-eafd-4a0b-9ad8-5c96898bcfaa.png",
      link: "https://github.com/JonathanDPotter/weather-api",
    },
  ];

  useEffect(() => {
    const getMarkdown = async (
      markdown: string,
      setter: React.Dispatch<React.SetStateAction<string>>
    ) => {
      let response = await fetch(markdown);
      const text = await response.text();
      setter(text);
    };

    markdowns.forEach(({ markdown, setter }) => getMarkdown(markdown, setter));
  }, []);

  return (
    <div className="projects page">
      <div className="top-space">
        <h2>Projects</h2>
        <nav>
          <Button
            background={Colors.transBlack}
            textColor={Colors.maize}
            size={2}
            text="Home"
            rounded
            onClick={() => navigate("/")}
          />
          <Button
            background={Colors.transBlack}
            textColor={Colors.maize}
            size={2}
            text="About Me"
            rounded
            onClick={() => navigate("/aboutme")}
          />
        </nav>
      </div>
      {markdowns.map(({ text, image, link }, i) => {
        return (
          <>
            <div className="divider">
              <TriggerOnScroll>
                <Project markdownText={text} image={image} link={link} />
              </TriggerOnScroll>
            </div>
            <div
              className="back-image"
              style={{ backgroundImage: `url("${image}")` }}
            ></div>
          </>
        );
      })}
    </div>
  );
};

export default Projects;
