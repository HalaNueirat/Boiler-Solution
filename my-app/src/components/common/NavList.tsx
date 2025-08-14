import React, {useState} from "react";
import ProductsDropdownPanel from "../Header/Sidebar/ProductsDropdownPanel";
import type {INavListProps} from "./common.types";
import {NavLink} from "react-router-dom";

const NavList: React.FC<INavListProps> = ({items, onItemClick}) => {
  const [productsOpen, setProductsOpen] = useState<boolean>(false);

  const handleCloseProducts = () => setProductsOpen(false);
  const handleToggleProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    setProductsOpen((v) => !v);
  };

  return (
    <ul>
      {items.map((item) =>
        item.label === "Products" ? (
          <li className="menu-item-with-dropdown" key={item.id}>
            <NavLink
              to={item.href}
              onClick={onItemClick}
              className={({isActive}) =>
                isActive || productsOpen ? "active" : undefined
              }
            >
              <span>{item.label}</span>
              <i
                className="fa-solid fa-angle-right mobile-only"
                aria-hidden="true"
              ></i>
            </NavLink>
            <button
              type="button"
              className="dropdown-toggle"
              onClick={handleToggleProducts}
              title={
                productsOpen ? "Close products menu" : "Open products menu"
              }
            >
              <i
                className={`fa-solid fa-chevron-${
                  productsOpen ? "up" : "down"
                }`}
              />
            </button>
            {productsOpen && (
              <>
                <div className="nav-overlay" onClick={handleCloseProducts} />
                <ProductsDropdownPanel />
              </>
            )}
          </li>
        ) : (
          <li key={item.id}>
            <NavLink
              to={item.href}
              onClick={onItemClick}
              className={({isActive}) => (isActive ? "active" : undefined)}
            >
              {item.icon && <i className={item.icon} aria-hidden="true"></i>}
              <span>{item.label}</span>
              <i
                className="fa-solid fa-angle-right mobile-only"
                aria-hidden="true"
              ></i>
            </NavLink>
          </li>
        )
      )}
    </ul>
  );
};

export default NavList;
