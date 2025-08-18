import React from "react";
import CategoryCard from "./CategoryCard";
import type { IProductsProps } from "../../types/products.types";

const FeaturedCategories: React.FC<Omit<IProductsProps, "products">> = ({
  categories,
}) => {
  return (
    <section className="featured-categories section-spacing">
      <header className="categories-header">
        <h3>Featured Categories</h3>
      </header>

      <div className="category-grid">
        {categories.map((c) => (
          <CategoryCard key={c.id} Category={c} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
