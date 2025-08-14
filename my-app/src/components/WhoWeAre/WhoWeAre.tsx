import React, {useState} from "react";
import "./WhoWeAre.css";
import type {IWhoWeAreProps} from "./WhoWeAre.types";
import Section from "../common/Section";
import {isMobile} from "react-device-detect";

const WhoWeAre: React.FC<IWhoWeAreProps> = ({
  title,
  description,
  ctaLabel,
  ctaBody,
  ctaHref,
}) => {
  const [showCTA, setShowCTA] = useState<boolean>(false);

  return (
    <Section className="who-we-are" withSpacing={false}>
      <div className="company-description">
        <h2>{title}</h2>
        <div className="separator"></div>
        <p>{description}</p>
      </div>
      <aside className="cta-box">
        <div
          className="cta-toggle-label"
          onClick={() => setShowCTA((prev) => !prev)}
        >
          {ctaLabel}
          <span className={`arrow ${showCTA ? "open" : ""}`}>
            <i className="fa-solid fa-chevron-right"></i>
          </span>
        </div>

        {(showCTA || !isMobile) && (
          <div className={`cta-content ${showCTA ? "show" : ""}`}>
            <p>{ctaBody}</p>
            <a href={ctaHref} className="cta-button">
              <i className="fa-solid fa-magnifying-glass"></i> Find a Rep Near
              You
            </a>
          </div>
        )}
      </aside>
    </Section>
  );
};

export default WhoWeAre;
