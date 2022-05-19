import React from "react";
import Button from "../../elements/Button/Button";
import Colors from "../../../Types/Enums/colors";
import "./Home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home page">
      <h1 className="page-title">Jonathan Potter</h1>
      <nav>
        <Button
          text="About Me"
          background={Colors.transBlack}
          textColor={Colors.maize}
          size={2}
          rounded
          onClick={() => navigate("/about")}
        />
        <Button
          text="Projects"
          background={Colors.transBlack}
          textColor={Colors.maize}
          size={2}
          rounded
          onClick={() => navigate("/projects")}
        />
      </nav>
      <img src="images/webSelfBW.jpg" alt="man in glasses smiling" />
    </div>
  );
};

export default Home;
