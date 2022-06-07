import React, { FC, useState } from "react";
import ReactMarkdown from "react-markdown";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Button from "../Button/Button";
import "./Project.scss";
import { useTheme } from "../../../context/themeContext";

interface Iprops {
  markdownText: string;
  image: string;
  link: string;
}

const Project: FC<Iprops> = ({ markdownText, image, link }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalClose, setModalClose] = useState(false);
  const { theme } = useTheme();

  Modal.setAppElement("#root");

  const closeModal = (closeFunction: () => void) => {
    setModalClose(true);
    setTimeout(() => {
      closeFunction();
      setModalClose(false);
    }, 500);
  };

  return (
    <>
      <div className="curtain" data-theme={theme}></div>
      <ReactMarkdown
        children={markdownText.substring(0, markdownText.indexOf("---"))}
      />
      <p className="link" onClick={() => setModalOpen(true)}>
        more...
      </p>
      <img src={image} alt="app screenshot" />
      <button onClick={() => window.open(link, "_blank")}>
        see code on github <FontAwesomeIcon icon={faGithub} />
      </button>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => closeModal(() => setModalOpen(false))}
        className={modalClose ? `modal close ${theme}` : `modal ${theme}`}
        overlayClassName={
          modalClose ? `overlay close ${theme}` : `overlay ${theme}`
        }
      >
        <ReactMarkdown children={markdownText} />
        <Button
          text="Close"
          size={2}
          rounded
          onClick={() => closeModal(() => setModalOpen(false))}
        />
      </Modal>
    </>
  );
};

export default Project;
