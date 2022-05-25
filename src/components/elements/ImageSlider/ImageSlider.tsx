import React, { ChangeEvent, FC, MouseEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";
import "./ImageSlider.scss";

interface Iprops {
  className?: string;
  title: string;
  images: string[];
}

const ImageSlider: FC<Iprops> = ({ title, images }) => {
  const numberOfImages = images.length;
  const [image, setImage] = useState(0);

  const handleClick = (event: MouseEvent) => {
    const { id } = event.currentTarget;
    if (id === "right-arrow") {
      image === numberOfImages - 1 ? setImage(0) : setImage(image + 1);
    } else if (id === "left-arrow") {
      image === 0 ? setImage(numberOfImages - 1) : setImage(image - 1);
    }
  };

  const radioHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { id } = event.currentTarget;
    setImage(parseInt(id));
  };

  return (
    <div className="slider-container">
      <button onClick={handleClick} id="left-arrow">
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <img src={images[image]} alt={images[image]} height={400} />
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
