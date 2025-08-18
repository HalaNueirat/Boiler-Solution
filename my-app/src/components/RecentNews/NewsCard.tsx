import React from "react";
import type { INewsCardProps } from "../../types/news.types";

const NewsCard: React.FC<INewsCardProps> = ({item}) => {
  return (
    <article className="news-card">
      <figure>
        <img
          src={item.image}
          alt={item.title}
          width="400"
          height="250"
          loading="lazy"
        />
      </figure>
      <div className="news-content">
        <h3>{item.title}</h3>
        <p>{item.body}</p>
        <a href="#" className="read-more">
          Read More <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </article>
  );
};

export default NewsCard;
