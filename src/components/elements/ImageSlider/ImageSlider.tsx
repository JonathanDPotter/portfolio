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
  const [prevImage, setPrevImage] = useState("");
  const [image, setImage] = useState("");
  const [nextImage, setNextImage] = useState("");
  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [opacity, setOpacity] = useState<string>("opaque");

  const { theme } = useTheme();

  const timeout = 250;

  const handleFade = () => {
    setOpacity("clear");
  };

  const handleClick = (event: MouseEvent) => {
    const { id } = event.currentTarget;
    let newIndex = 0;

    if (id === "right-arrow") {
      index === numberOfImages - 1 ? (newIndex = 0) : (newIndex = index + 1);
    } else if (id === "left-arrow") {
      index === 0 ? (newIndex = numberOfImages - 1) : (newIndex = index - 1);
    }
    setNextIndex(newIndex);
    handleFade();
  };

  const radioHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { id } = event.currentTarget;
    setNextIndex(parseInt(id));
    handleFade();
  };

  const handleAnimationEnd = () => {
    setIndex(nextIndex);
    setOpacity("opaque");
  };

  useEffect(() => {
    let prev = index - 1;
    if (prev < 0) prev = numberOfImages - 1;
    let next = index + 1;
    if (next === numberOfImages - 1) next = 0;
    setPrevImage(images[prev]);
    setImage(images[index]);
    setNextImage(images[next]);
  }, [index]);

  return (
    <div
      className={
        className ? `slider-container ${className}` : "slider-container"
      }
      data-theme={theme}
    >
      <button
        onClick={handleClick}
        id="left-arrow"
        disabled={opacity === "clear"}
        aria-label="previous image"
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <img src={prevImage} alt={prevImage} height="0" width="0" />
      <img
        src={image}
        alt={image}
        height={400}
        className={opacity}
        onAnimationEnd={handleAnimationEnd}
      />
      <img src={nextImage} alt={nextImage} height="0" width="0" />
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
      <button
        onClick={handleClick}
        id="right-arrow"
        disabled={opacity === "clear"}
        aria-label="next image"
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

export default ImageSlider;
