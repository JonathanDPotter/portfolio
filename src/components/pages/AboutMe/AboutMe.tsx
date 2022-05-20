import React from "react";
import { useNavigate } from "react-router-dom";
import Colors from "../../../Types/Enums/colors";
import Button from "../../elements/Button/Button";
import Subject from "../../elements/Subject/Subject";
import "./AboutMe.scss";

const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <div className="aboutme page">
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
      <section className="subjects">
        <Subject>
          <img src="/images/div1.jpg" alt="me" />
        </Subject>
        <Subject>
          <img src="/images/webSelf.jpg" alt="me" />
        </Subject>
        <Subject>
          <img src="/images/webSelfBW.jpg" alt="me" />
        </Subject>
        <Subject>
          <img src="/images/div1.jpg" alt="me" />
        </Subject>
        <Subject>
          <img src="/images/webSelf.jpg" alt="me" />
        </Subject>
        <Subject>
          <img src="/images/webSelfBW.jpg" alt="me" />
        </Subject>
      </section>
    </div>
  );
};

export default AboutMe;
