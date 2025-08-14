import React from "react";
import "./Products.css";
import type {IProductsProps} from "./Products.types";
import FeaturedCategories from "./FeaturedCategories";
import RecentlyProducts from "./RecentlyProducts";
import Section from "../common/Section";

const Products: React.FC<IProductsProps> = ({categories, products}) => {
  return (
    <Section
      id="products"
      title="Products"
      headerClassName="products-header"
      headerInsideContainer={false}
    >
      <FeaturedCategories categories={categories} />
      <RecentlyProducts products={products} />
    </Section>
  );
};

export default Products;
