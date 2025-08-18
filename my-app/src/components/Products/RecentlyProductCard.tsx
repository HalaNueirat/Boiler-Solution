import React from "react";
import type { IProductCardProps } from "../../types/products.types";

const RecentlyProductCard: React.FC<IProductCardProps> = ({product}) => {
  return (
    <article className="product-card" data-tag={product.tag}>
      <figure>
        <img
          src={product.image}
          alt={product.title}
          width={300}
          height={200}
          loading="lazy"
        />
      </figure>
      <div className="product-info">
        <h4>{product.title}</h4>
        <p>
          <span>CB Part #:</span> {product.part}
        </p>
        <a href="#" className="product-link">
          View Details <i className="fa-solid fa-arrow-right" />
        </a>
      </div>
    </article>
  );
};

export default RecentlyProductCard;
