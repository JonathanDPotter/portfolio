import React, { ChangeEvent, FC, MouseEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";
import Fade from "../../../Types/Enums/fade";
import "./ImageSlider.scss";

interface Iprops {
  className?: string;
  title: string;
  images: string[];
}

const ImageSlider: FC<Iprops> = ({ title, images, className }) => {
  const numberOfImages = images.length;
  const [image, setImage] = useState(0);
  const [opacity, setOpacity] = useState<number>(1);

  const timeout = 200;

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
        image === numberOfImages - 1 ? setImage(0) : setImage(image + 1);
      } else if (id === "left-arrow") {
        image === 0 ? setImage(numberOfImages - 1) : setImage(image - 1);
      }
    }, timeout);
  };

  const radioHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { id } = event.currentTarget;
    handleFade();
    setTimeout(() => {
      setImage(parseInt(id));
    }, timeout);
  };

  return (
    <div
      className={
        className ? `slider-container ${className}` : "slider-container"
      }
    >
      <button onClick={handleClick} id="left-arrow">
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <img
        src={images[image]}
        alt={images[image]}
        height={400}
        style={{ opacity: opacity }}
      />
      <form id={title} className="dots">
        {images.map((_, i) => (
          <div className="radio-container" key={uuid()}>
            <input
              type="radio"
              name={title}
              id={i.toString()}
              onChange={radioHandler}
              checked={i === image}
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
