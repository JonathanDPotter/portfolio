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
  onClick: () => void;
}

const Button: FC<Iprops> = ({
  text,
  background,
  size = 1,
  rounded = false,
  round = false,
  textColor = "inherit",
  onClick
}) => {
  const initialStyle = {
    backgroundColor: background,
    color: textColor,
    fontSize: `${size}rem`,
    padding: `${size / 4}rem`,
    borderRadius: rounded ? `${size / 4}rem` : round ? "50%" : 0,
    height: round ? `${size * 6}rem` : "fit-content",
    width: round ? `${size * 6}rem` : "fit-content",
  };

  const [style, setStyle] = useState(initialStyle);

  const lighten = () => {
    if (background === Colors.transBlack) {
      setStyle({ ...style, backgroundColor: "hsla(0, 0%, 93%, .3)" });
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
