import React from "react";
import "./Footer.css";
import type {IFooterProps} from "./Footer.types";
import FooterColumn from "./FooterColumn";
import SocialIcons from "./SocialIcons";

const Footer: React.FC<IFooterProps> = ({data}) => {
  const otherGroups = data.groups.filter((g) => g.title !== "Connect With Us");
  const connectGroup = data.groups.find((g) => g.title === "Connect With Us");

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <img
              src={data.logoSrc}
              alt={data.logoAlt}
              className="footer-logo"
              loading="lazy"
            />
            <address>
              {data.addressLines.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </address>

            <div className="footer-links">
              {data.primaryLinks.map((l) => (
                <a key={l.id} href={l.href} className="footer-link">
                  {l.label} <i className="fa-solid fa-arrow-right"></i>
                </a>
              ))}
            </div>
          </div>

          {otherGroups.map((g) => (
            <FooterColumn key={g.id} group={g} />
          ))}

          <div className="connect-column">
            {connectGroup && <FooterColumn group={connectGroup} />}
            <SocialIcons items={data.social} />
          </div>
        </div>

        <div className="footer-bottom">
          <p>{data.legal.yearText}</p>
          <div className="footer-legal">
            <a href={data.legal.termsHref}>Terms &amp; Conditions</a>
            <span className="separator"></span>
            <a href={data.legal.privacyHref}>Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
