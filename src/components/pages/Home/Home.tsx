import React from "react";
import Button from "../../elements/Button/Button";
import Colors from "../../../Types/Enums/colors";
import "./Home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home page">
      <img src="images/webSelfBW.jpg" alt="man in glasses smiling" />
      <nav>
        <Button
          text="About Me"
          background={Colors.transBlack}
          textColor={Colors.maize}
          size={2}
          rounded
          onClick={() => navigate("/aboutme")}
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
    </div>
  );
};

export default Home;
