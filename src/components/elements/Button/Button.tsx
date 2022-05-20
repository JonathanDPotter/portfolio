import React, { FC, useState } from "react";
import Colors from "../../../Types/Enums/colors";
import "./Button.scss";

interface Iprops {
  text: string;
  background: string;
  textColor?: string;
  size?: number;
  rounded?: boolean;
  round?: boolean;
  border?: string;
  onClick: () => void;
}

const Button: FC<Iprops> = ({
  text,
  background,
  size = 1,
  rounded = false,
  round = false,
  textColor = "inherit",
  border,
  onClick,
}) => {
  const initialStyle = {
    backgroundColor: background,
    color: textColor,
    fontSize: `${size}rem`,
    padding: round ? 0 : `${size / 4}rem`,
    borderRadius: rounded ? `${size / 4}rem` : round ? "50%" : 0,
    height: round ? `${size + text.length}rem` : "fit-content",
    width: round ? `${size + text.length}rem` : "fit-content",
    border: border ? `${size * 2}px solid ${border}` : "none",
  };

  const [style, setStyle] = useState(initialStyle);

  const lighten = () => {
    if (background === Colors.transBlack) {
      setStyle({ ...style, backgroundColor: Colors.transWhite });
    } else {
      const numbers = background.slice(4, background.length - 1).split(",");
      const lightness = parseInt(numbers[2]) + 10;
      const newColor = `hsl(${numbers[0]},${
        numbers[1]
      }, ${lightness.toString()}%)`;
      setStyle({ ...style, backgroundColor: newColor });
    }
  };

  return (
    <button
      style={style}
      onMouseOver={lighten}
      onMouseOut={() => setStyle(initialStyle)}
      onFocus={lighten}
      onBlur={() => setStyle(initialStyle)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
