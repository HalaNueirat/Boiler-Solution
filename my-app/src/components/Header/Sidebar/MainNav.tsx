import React from "react";
import Logo from "../../common/Logo";
import NavList from "../../common/NavList";
import {MAIN_ITEMS} from "../../../constants/header.constants";

const MainNav: React.FC = () => {
  return (
    <div className="main-nav-row">
      <div className="container">
        {/* Website logo */}
        <Logo />

        {/* Main navigation links */}
        <nav id="main-nav" aria-label="Main Navigation">
          <NavList
            items={MAIN_ITEMS}
          />
        </nav>

        {/* Search box */}
        <div className="search-box">
          <span>Search</span>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
