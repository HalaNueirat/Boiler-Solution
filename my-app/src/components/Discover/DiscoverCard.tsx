import React from "react";
import "./Discover.css";
import type { IDiscoverCardProps } from "../../types/Discover.types";

const DiscoverCard: React.FC<IDiscoverCardProps> = ({item}) => {
  return (
    <article className={`discover-card ${item.palette}-card`}>
      <figure>
        <img
          src={item.image}
          alt={item.imageAlt}
          className="card-image"
          loading="lazy"
        />
      </figure>

      <div className="card-content">
        <p className="card-subtitle">{item.subtitle}</p>
        <h3 className="card-title">{item.title}</h3>
        <p className="card-text">{item.text}</p>
        <a href="#" className="learn-more">
          Learn More <i className="fa-solid fa-arrow-right" />
        </a>
      </div>
    </article>
  );
};

export default DiscoverCard;
