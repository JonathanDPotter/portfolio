import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import Button from "../../elements/Button/Button";
import Project from "../../elements/Project/Project";
import Colors from "../../../Types/Enums/colors";
import howlerMarkdown from "../../../markdown/howlerMarkdown.md";
import blogMarkdown from "../../../markdown/blogMarkown.md";
import "./Projects.scss";
import TriggerOnScroll from "../../elements/TriggerOnScroll/TriggerOnScroll";

const Projects = () => {
  const navigate = useNavigate();
  Modal.setAppElement("#root");
  const [howlerModalOpen, setHowlerModalOpen] = useState(false);
  const [blogModalOpen, setBlogModalOpen] = useState(false);
  const [modalClose, setModalClose] = useState(false);
  const [howlerMarkdownText, setHowlerMarkdownText] = useState("");
  const [blogMarkdownText, setBlogMarkdownText] = useState("");

  const closeModal = (closeFunction: () => void) => {
    setModalClose(true);
    setTimeout(() => {
      closeFunction();
      setModalClose(false);
    }, 500);
  };

  useEffect(() => {
    const getMarkdown = async (
      markdown: string,
      setter: React.Dispatch<React.SetStateAction<string>>
    ) => {
      let response = await fetch(markdown);
      const text = await response.text();
      setter(text);
    };

    const markdowns = [
      { markdown: howlerMarkdown, setter: setHowlerMarkdownText },
      { markdown: blogMarkdown, setter: setBlogMarkdownText },
    ];

    markdowns.forEach(({ markdown, setter }) => getMarkdown(markdown, setter));
  }, []);

  return (
    <div className="projects page">
      <div className="opening">
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
        <div className="divider">
          <TriggerOnScroll>
            <Project
              markdownText={howlerMarkdownText}
              image="https://user-images.githubusercontent.com/30156468/168443012-07a97953-a127-472b-934c-702196719630.png"
              link="https://github.com/JonathanDPotter/howler"
            />
          </TriggerOnScroll>
        </div>
      </div>
      <div className="image1"></div>
      <div className="divider">
        <TriggerOnScroll>
          <Project
            markdownText={blogMarkdownText}
            image="https://user-images.githubusercontent.com/30156468/167709749-baf6b890-6e25-4150-b88f-840ddd2f01e5.png"
            link="https://github.com/JonathanDPotter/blog-api-front"
          />
        </TriggerOnScroll>
      </div>
      <div className="image2"></div>
    </div>
  );
};

export default Projects;
