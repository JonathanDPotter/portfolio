import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import Colors from "../../../Types/Enums/colors";
import Button from "../../elements/Button/Button";
import TriggerOnScroll from "../../elements/TriggerOnScroll/TriggerOnScroll";
import "./Projects.scss";

const Projects = () => {
  const navigate = useNavigate();
  Modal.setAppElement("#root");
  const [howlerModalOpen, setHowlerModalOpen] = useState(false);
  const [modalClose, setModalClose] = useState(false);

  const closeModal = (closeFunction: () => void) => {
    setModalClose(true);
    setTimeout(() => {
      closeFunction();
      setModalClose(false);
    }, 500);
  };

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
          </TriggerOnScroll>
          <Modal
            isOpen={howlerModalOpen}
            contentLabel="Example Modal"
            onRequestClose={() => closeModal(() => setHowlerModalOpen(false))}
            className={modalClose ? "modal close" : "modal"}
            overlayClassName={modalClose ? "overlay close" : "overlay"}
          >
            <h2>Modal</h2>
            <p>This is the modal body.</p>
            <button
              autoFocus
              onClick={() => closeModal(() => setHowlerModalOpen(false))}
            >
              OK
            </button>
          </Modal>
        </div>
      </div>
      <div className="image1"></div>
      <div className="divider"></div>
    </div>
  );
};

export default Projects;
