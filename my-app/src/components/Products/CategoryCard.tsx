import React from "react";
import type { ICategoryCardProps } from "../../types/products.types";

const CategoryCard: React.FC<ICategoryCardProps> = ({Category}) => {
  return (
    <div className="category-card">
      <a href="#">
        <figure>
          <img
            src={Category.image}
            alt={Category.label}
            width={200}
            height={200}
            loading="lazy"
          />
          <figcaption>
            {Category.label} <i className="fa-solid fa-arrow-right" />
          </figcaption>
        </figure>
      </a>
    </div>
  );
};

export default CategoryCard;
