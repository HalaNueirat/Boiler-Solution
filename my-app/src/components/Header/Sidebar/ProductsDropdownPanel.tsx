import React from "react";
import {PRODUCTS_SECTIONS} from "../../../constants/header.constants";
import NavList from "../../common/NavList";

const ProductsDropdownPanel: React.FC = () => {
  return (
    <div className="products-dropdown-panel">
      <div className="container">
        {PRODUCTS_SECTIONS.map((section) => (
          <div className="products-dropdown-group" key={section.id}>
            {section.title ? (
              <h4>
                {section.title} <i className="fa-solid fa-arrow-right"></i>
              </h4>
            ) : null}
            <NavList items={section.items} />
          </div>
        ))}

        <div className="products-dropdown-group">
          <h5>Looking for more information?</h5>
          <img
            src="/images/boiler.png"
            width="400"
            height="300"
            alt="Boiler placeholder image"
            loading="lazy"
          />
          <a href="#">
            Find a Rep Near You
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductsDropdownPanel;
