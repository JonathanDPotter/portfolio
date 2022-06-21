import React, { FC, useEffect, useRef, useState } from "react";
import { useTheme } from "../../../context/themeContext";
import "./Button.scss";

interface Iprops {
  text: string;
  size?: number;
  border?: string;
  style?: {};
  onClick: () => void;
}

const Button: FC<Iprops> = ({ text, size = 1, border, onClick, style }) => {
  let initialStyle = {
    fontSize: `${size}vh`,
    height: `${size + 2}vh`,
    border: border ? `${size * 2}px solid ${border}` : "none",
    "--clientHeight": "0",
  };

  if (style) initialStyle = { ...initialStyle, ...style };

  const [buttonStyle, setButtonStyle] = useState(initialStyle);

  const btn = useRef<HTMLButtonElement>(null);

  const { theme } = useTheme();

  useEffect(() => {
    if (btn) {
      setButtonStyle({
        ...buttonStyle,
        "--clientHeight": `${btn.current?.clientHeight}px`,
      });
    }
  }, []);

  return (
    <button
      style={buttonStyle}
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
