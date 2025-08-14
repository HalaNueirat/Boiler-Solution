import React, {useEffect, useState} from "react";
import "./Hero.css";
import type {IHeroProps} from "./Hero.types";
import Section from "../common/Section";

const Hero: React.FC<IHeroProps> = ({
  images,
  highlight,
  titleRemainder,
  ctaHref,
  ctaLabel,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setShow(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <Section className="hero" withContainer={false} withSpacing={false}>
      <img
        src={images[currentIndex]}
        alt="Hero background"
        className={`hero-img ${show ? "show" : ""}`}
        loading="lazy"
      />
      <div className="hero-content">
        <h1>
          <span>{highlight}</span>
          {titleRemainder}
        </h1>
        <a href={ctaHref} className="btn-primary">
          {ctaLabel}
        </a>
      </div>
    </Section>
  );
};

export default Hero;
