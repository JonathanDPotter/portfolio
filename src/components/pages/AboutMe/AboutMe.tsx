import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import ImageSlider from "../../elements/ImageSlider/ImageSlider";
import TriggerOnScroll from "../../elements/TriggerOnScroll/TriggerOnScroll";
import Cats from "../../../json/cats.json";
import Minis from "../../../json/minis.json";
import Portland from "../../../json/portland.json";
import IjsonImages from "../../../Types/interfaces/jsonImages";
import "./AboutMe.scss";
import { useTheme } from "../../../context/themeContext";
import PulseDown from "../../elements/PulseDown/PulseDown";

interface IsubjectInput {
  title: string;
  imageJson: IjsonImages;
  background: string;
}

const AboutMe = () => {
  const { theme } = useTheme();

  const [fade, setFade] = useState(true);

  const jsonImages: IsubjectInput[] = [
    {
      title: "I live in Portland Maine.",
      imageJson: Portland,
      background:
        "https://assets.vogue.com/photos/6125681736841c7a9ecfa2ae/master/w_2560%2Cc_limit/454278947",
    },
    {
      title: "I have three cats and a dog.",
      imageJson: Cats,
      background:
        "https://res.cloudinary.com/skarsnik/image/upload/v1654252884/webSelf_bfxuhv.jpg",
    },
    {
      title: "Recently finished miniatures.",
      imageJson: Minis,
      background:
        "https://res.cloudinary.com/skarsnik/image/upload/v1654252881/webSelfBW_krqju9.png",
    },
  ];

  useEffect(() => {
    setFade(false);
  }, []);

  return (
    <div
      className={fade ? "about-me page fade" : "about-me page"}
      data-theme={theme}
    >
      <div className="opening">
        <h2>About Me</h2>
        <br />
        <p>
          Hello, my name is Jonathan Potter. I have been working in retail
          grocery for about 25 years, but I decided that it was time to take my
          careeer down a different path. I have been learning front-end
          development for the past year and a half. In that time I have really
          connected with react, and I have included on this site many example
          projects using react. I plan to move on to using next.js for
          server-side rendered apps and to react-native for mobile development.
        </p>
        <br />
        <p>
          I live in Portland Maine with my family, three cats and a dog. My
          three children are all adults now, and the oldest lives in Chicago
          while the two youngest are still at home.
        </p>
        <br />
        <p>
          I have many hobbies, from hiking, biking and running to carpentry,
          music production, and tabletop wargaming. Most of my free time is now
          spent writing web apps, but I still sneak in some miniature painting.
        </p>
        <PulseDown />
      </div>
      <section className="images">
        {jsonImages.map(({ title, imageJson, background }) => {
          return (
            <div key={uuid()}>
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
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default AboutMe;
