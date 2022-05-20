import React from "react";
import { useNavigate } from "react-router-dom";
import Menu from "../Menu/Menu";
import "./Header.scss";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header>
      <h1 onClick={() => navigate("/")}>Jonathan Potter</h1>
      <Menu />
    </header>
  );
};

export default Header;
