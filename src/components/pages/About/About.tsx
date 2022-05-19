import React from "react";
import { useNavigate } from "react-router-dom";
import Colors from "../../../Types/Enums/colors";
import Button from "../../elements/Button/Button";
import Subject from "../../elements/Subject/Subject";
import "./About.scss";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about page">
      <h2 className="page-title">About Me</h2>
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
        <Button
          background={Colors.black}
          textColor={Colors.maize}
          border={Colors.maize}
          size={1}
          text="i"
          round
          onClick={() => navigate("/")}
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

export default About;
