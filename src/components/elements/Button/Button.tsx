import React, { FC, useState } from "react";
import { useTheme } from "../../../context/themeContext";
import Colors from "../../../Types/enums/colors";
import "./Button.scss";

interface Iprops {
  text: string;
  size?: number;
  rounded?: boolean;
  round?: boolean;
  border?: string;
  onClick: () => void;
}

const Button: FC<Iprops> = ({
  text,
  size = 1,
  rounded = false,
  round = false,
  border,
  onClick,
}) => {
  const initialStyle = {
    fontSize: `${size}rem`,
    padding: round ? 0 : `${size / 4}rem`,
    borderRadius: rounded ? `${size / 4}rem` : round ? "50%" : 0,
    height: round ? `${size + text.length}rem` : "fit-content",
    width: round ? `${size + text.length}rem` : "fit-content",
    border: border ? `${size * 2}px solid ${border}` : "none",
  };

  const [style, setStyle] = useState(initialStyle);

  const { theme } = useTheme();

  return (
    <button style={style} onClick={onClick} data-theme={theme}>
      {text}
    </button>
  );
};

export default Button;
