import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import TriggerOnScroll from "../../elements/TriggerOnScroll/TriggerOnScroll";
import howlerMarkdown from "../../../markdown/howlerMarkdown.md";
import blogMarkdown from "../../../markdown/blogMarkown.md";
import Colors from "../../../Types/Enums/colors";
import Button from "../../elements/Button/Button";
import "./Projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

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
    fetch(howlerMarkdown)
      .then((res) => res.text())
      .then((text) => setHowlerMarkdownText(text));

    fetch(blogMarkdown)
      .then((res) => res.text())
      .then((text) => setBlogMarkdownText(text));
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
          <TriggerOnScroll className="trigger">
            <h3 className="flow">Howler</h3>
            <p className="flow">
              Howler is a twitter-esque social media app. I made this project
              for The Odin Project's Javascript Final Project. This app is
              deployed on Firebase{" "}
              <a href="https://howler-1dd33.web.app/" target="_blank">
                here
              </a>
              .
            </p>
            <p className="link" onClick={() => setHowlerModalOpen(true)}>
              more...
            </p>
            <img
              src="https://user-images.githubusercontent.com/30156468/168443012-07a97953-a127-472b-934c-702196719630.png"
              alt="howler app screenshot"
            />
            <button
              onClick={() =>
                window.open(
                  "https://github.com/JonathanDPotter/howler/blob/main/README.md",
                  "_blank"
                )
              }
            >
              see code on github <FontAwesomeIcon icon={faGithub} />
            </button>
          </TriggerOnScroll>
          <Modal
            isOpen={howlerModalOpen}
            contentLabel="Example Modal"
            onRequestClose={() => closeModal(() => setHowlerModalOpen(false))}
            className={modalClose ? "modal close" : "modal"}
            overlayClassName={modalClose ? "overlay close" : "overlay"}
          >
            <ReactMarkdown children={howlerMarkdownText} />
            <Button
              text="Close"
              background={Colors.timberwolf}
              textColor={Colors.onyx}
              size={2}
              rounded
              onClick={() => closeModal(() => setHowlerModalOpen(false))}
            />
          </Modal>
        </div>
      </div>
      <div className="image1"></div>
      <div className="divider">
        <TriggerOnScroll className="trigger">
          <h3 className="flow">Blog</h3>
          <p className="flow">
            Howler is a twitter-esque social media app. I made this project for
            The Odin Project's Javascript Final Project. This app is deployed on
            Firebase{" "}
            <a href="https://howler-1dd33.web.app/" target="_blank">
              here
            </a>
            .
          </p>
          <p className="link" onClick={() => setBlogModalOpen(true)}>
            more...
          </p>
          <img
            src="https://user-images.githubusercontent.com/30156468/167709749-baf6b890-6e25-4150-b88f-840ddd2f01e5.png"
            alt="blog app screenshot"
          />
          <button
            onClick={() =>
              window.open(
                "https://github.com/JonathanDPotter/howler/blob/main/README.md",
                "_blank"
              )
            }
          >
            see code on github <FontAwesomeIcon icon={faGithub} />
          </button>
        </TriggerOnScroll>
        <Modal
          isOpen={blogModalOpen}
          contentLabel="Example Modal"
          onRequestClose={() => closeModal(() => setBlogModalOpen(false))}
          className={modalClose ? "modal close" : "modal"}
          overlayClassName={modalClose ? "overlay close" : "overlay"}
        >
          <ReactMarkdown children={blogMarkdownText} />
          <Button
            text="Close"
            background={Colors.timberwolf}
            textColor={Colors.onyx}
            size={2}
            rounded
            onClick={() => closeModal(() => setBlogModalOpen(false))}
          />
        </Modal>
      </div>
      <div className="image2"></div>
    </div>
  );
};

export default Projects;
