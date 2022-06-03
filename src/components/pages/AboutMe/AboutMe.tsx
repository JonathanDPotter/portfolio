import React from "react";
import { useNavigate } from "react-router-dom";
import ImageSlider from "../../elements/ImageSlider/ImageSlider";
import TriggerOnScroll from "../../elements/TriggerOnScroll/TriggerOnScroll";
import Cats from "../../../json/cats.json";
import Cars from "../../../json/cars.json";
import Portland from "../../../json/portland.json";
import IjsonImages from "../../../Types/interfaces/jsonImages";
import "./AboutMe.scss";
import { useTheme } from "../../../context/themeContext";
import TopSpace from "../../elements/TopSpace/TopSpace";

interface IsubjectInput {
  title: string;
  imageJson: IjsonImages;
  background: string;
}

const AboutMe = () => {
  const navigate = useNavigate();

  const { theme } = useTheme();

  const jsonImages: IsubjectInput[] = [
    {
      title: "I live in Portland Maine.",
      imageJson: Portland,
      background:
        "https://assets.vogue.com/photos/6125681736841c7a9ecfa2ae/master/w_2560%2Cc_limit/454278947",
    },
    {
      title: "I have five cats.",
      imageJson: Cats,
      background:
        "https://res.cloudinary.com/skarsnik/image/upload/v1654252884/webSelf_bfxuhv.jpg",
    },
    {
      title: "Here are some Cars.",
      imageJson: Cars,
      background:
        "https://res.cloudinary.com/skarsnik/image/upload/v1654252881/webSelfBW_krqju9.png",
    },
  ];

  return (
    <div className="about-me page" data-theme={theme}>
      <div className="opening">
        <TopSpace />
      </div>
      {jsonImages.map(({ title, imageJson, background }) => {
        return (
          <>
            <div className="divider">
              <TriggerOnScroll>
                <p className="slide">{title}</p>
                <ImageSlider
                  title={imageJson.title}
                  images={imageJson.images}
                  className="slide"
                />
              </TriggerOnScroll>
            </div>
            <div
              className="back-image"
              style={{ backgroundImage: `url(${background})` }}
            ></div>
          </>
        );
      })}
      <div className="divider"></div>
    </div>
  );
};

export default AboutMe;
