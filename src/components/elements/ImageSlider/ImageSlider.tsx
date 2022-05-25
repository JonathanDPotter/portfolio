import React, { ChangeEvent, FC, MouseEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "./ImageSlider.scss";

interface Iprops {
  images: string[];
}

const ImageSlider: FC<Iprops> = ({ images }) => {
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
      <div className="dots">
        {images.map((_, i) => (
          <div className="radio-container">
            <input
              type="radio"
              name="image"
              id={i.toString()}
              onChange={radioHandler}
              checked={i === image}
            />
            <span className="radio"></span>
          </div>
        ))}
      </div>
      <button onClick={handleClick} id="right-arrow">
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

export default ImageSlider;
