import React from "react";
import Button from "../../elements/Button/Button";
import Colors from "../../../Types/Enums/colors";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home page">
      <h1>
        <p>Jonathan Potter</p>
      </h1>
      <div className="buttons">
        <Button
          text="About Me"
          background={Colors.transBlack}
          textColor={Colors.white}
          size={2}
          onClick={() => console.log("click")}
        />
        <Button
          text="Projects"
          background={Colors.transBlack}
          textColor={Colors.white}
          size={2}
          onClick={() => console.log("click")}
        />
      </div>
      <img src="images/webSelfBW.jpg" alt="man in glasses smiling" />
    </div>
  );
};

export default Home;
