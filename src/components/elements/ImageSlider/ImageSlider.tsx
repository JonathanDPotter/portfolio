import React, { ChangeEvent, FC, MouseEvent, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";
import "./ImageSlider.scss";
import { useTheme } from "../../../context/themeContext";

interface Iprops {
  className?: string;
  title: string;
  images: string[];
}

const ImageSlider: FC<Iprops> = ({ title, images, className }) => {
  const numberOfImages = images.length;
  const [image, setImage] = useState("");
  const [index, setIndex] = useState(0);
  const [opacity, setOpacity] = useState<number>(1);

  const { theme } = useTheme();

  const timeout = 250;

  const handleFade = () => {
    setOpacity(0);
    setTimeout(() => {
      setOpacity(1);
    }, timeout);
  };

  const handleClick = (event: MouseEvent) => {
    const { id } = event.currentTarget;
    handleFade();
    setTimeout(() => {
      if (id === "right-arrow") {
        index === numberOfImages - 1 ? setIndex(0) : setIndex(index + 1);
      } else if (id === "left-arrow") {
        index === 0 ? setIndex(numberOfImages - 1) : setIndex(index - 1);
      }
    }, timeout);
  };

  const radioHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { id } = event.currentTarget;
    handleFade();
    setTimeout(() => {
      setIndex(parseInt(id));
    }, timeout);
  };

  useEffect(() => {
    setImage(images[index]);
  }, [images, index]);

  return (
    <div
      className={
        className ? `slider-container ${className}` : "slider-container"
      }
      data-theme={theme}
    >
      <button onClick={handleClick} id="left-arrow">
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <img
        src={image}
        alt={image}
        height={400}
        className={opacity === 0 ? "clear" : "opaque"}
      />
      <form id={title} className="dots">
        {images.map((_, i) => (
          <div className="radio-container" key={uuid()}>
            <input
              type="radio"
              name={title}
              id={i.toString()}
              onChange={radioHandler}
              checked={i === index}
            />
            <span className="radio"></span>
          </div>
        ))}
      </form>
      <button onClick={handleClick} id="right-arrow">
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

export default ImageSlider;
