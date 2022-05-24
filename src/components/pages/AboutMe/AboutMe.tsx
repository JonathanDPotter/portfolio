import React from "react";
import { useNavigate } from "react-router-dom";
import Colors from "../../../Types/Enums/colors";
import Button from "../../elements/Button/Button";
import TriggerOnScroll from "../../elements/TriggerOnScroll/TriggerOnScroll";
import "./AboutMe.scss";

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <div className="about-me page">
      <div className="opening">
        <h2>About Me</h2>
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
            text="Projects"
            rounded
            onClick={() => navigate("/projects")}
          />
        </nav>
        <div className="container">
          <p>I live in Portland Maine.</p>
          <div className="arrow">
            <div className="left"></div>
            <div className="right"></div>
          </div>
        </div>
      </div>
      <div className="image1"></div>
      <div className="divider">
        <TriggerOnScroll>
          <h2 className="slide">This</h2>
        </TriggerOnScroll>
      </div>
      <div className="image2"></div>
      <div className="divider">
        <TriggerOnScroll>
          <h2 className="slide">This Also</h2>
        </TriggerOnScroll>
      </div>
    </div>
  );
};

export default AboutMe;
