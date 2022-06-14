import React, { FC, useEffect, useRef, useState } from "react";
import { useTheme } from "../../../context/themeContext";
import "./Button.scss";

interface Iprops {
  text: string;
  size?: number;
  border?: string;
  onClick: () => void;
}

const Button: FC<Iprops> = ({ text, size = 1, border, onClick }) => {
  const initialStyle = {
    fontSize: `${size}rem`,
    border: border ? `${size * 2}px solid ${border}` : "none",
    "--clientHeight": "0",
  };

  const [style, setStyle] = useState(initialStyle);

  const btn = useRef<HTMLButtonElement>(null);

  const { theme } = useTheme();

  useEffect(() => {
    if (btn) {
      setStyle({
        ...style,
        "--clientHeight": `${btn.current?.clientHeight}px`,
      });
    }
  }, []);

  return (
    <button
      style={style}
      onClick={onClick}
      data-theme={theme}
      className="btn"
      ref={btn}
    >
      {text}
    </button>
  );
};

export default Button;
