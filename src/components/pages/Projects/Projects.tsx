import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import Button from "../../elements/Button/Button";
import Project from "../../elements/Project/Project";
import TriggerOnScroll from "../../elements/TriggerOnScroll/TriggerOnScroll";
import Colors from "../../../Types/enums/colors";
import howlerMarkdown from "../../../markdown/howlerMarkdown.md";
import blogMarkdown from "../../../markdown/blogMarkown.md";
import upcMarkdown from "../../../markdown/upcMarkdown.md";
import weatherMarkdown from "../../../markdown/weatherMarkdown.md";
import typieMarkdown from "../../../markdown/typieMarkdown.md";
import { useTheme } from "../../../context/themeContext";
import "./Projects.scss";
import TopSpace from "../../elements/TopSpace/TopSpace";

const Projects = () => {
  const navigate = useNavigate();

  const { theme } = useTheme();

  Modal.setAppElement("#root");

  const [howlerMarkdownText, setHowlerMarkdownText] = useState("");
  const [blogMarkdownText, setBlogMarkdownText] = useState("");
  const [upcMarkdownText, setUpcMarkdownText] = useState("");
  const [weatherMarkdownText, setWeatherMarkdownText] = useState("");
  const [typieMarkdownText, setTypieMarkdownText] = useState("");

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
    {
      markdown: typieMarkdown,
      setter: setTypieMarkdownText,
      text: typieMarkdownText,
      image:
        "https://user-images.githubusercontent.com/30156468/167945133-7badd9ca-7131-4d21-9472-ea4176410c43.png",
      link: "https://github.com/JonathanDPotter/typie-talkie-front",
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
    <div className="projects page" data-theme={theme}>
      <div className="opening">
        <TopSpace />
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
      <div className="divider"></div>
    </div>
  );
};

export default Projects;
