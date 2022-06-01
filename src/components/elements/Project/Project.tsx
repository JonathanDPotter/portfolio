import React, { FC, useState } from "react";
import ReactMarkdown from "react-markdown";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Button from "../Button/Button";
import TriggerOnScroll from "../TriggerOnScroll/TriggerOnScroll";
import Colors from "../../../Types/Enums/colors";

interface Iprops {
  markdownText: string;
  image: string;
  link: string;
}

const Project: FC<Iprops> = ({ markdownText, image, link }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalClose, setModalClose] = useState(false);

  const closeModal = (closeFunction: () => void) => {
    setModalClose(true);
    setTimeout(() => {
      closeFunction();
      setModalClose(false);
    }, 500);
  };

  return (
    <div className="divider">
      <TriggerOnScroll className="trigger">
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
      </TriggerOnScroll>
      <Modal
        isOpen={modalOpen}
        contentLabel="Example Modal"
        onRequestClose={() => closeModal(() => setModalOpen(false))}
        className={modalClose ? "modal close" : "modal"}
        overlayClassName={modalClose ? "overlay close" : "overlay"}
      >
        <ReactMarkdown children={markdownText} />
        <Button
          text="Close"
          background={Colors.timberwolf}
          textColor={Colors.onyx}
          size={2}
          rounded
          onClick={() => closeModal(() => setModalOpen(false))}
        />
      </Modal>
    </div>
  );
};

export default Project;
