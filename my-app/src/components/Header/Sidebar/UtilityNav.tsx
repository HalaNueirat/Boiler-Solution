import React from "react";
import NavList from "../../common/NavList";
import {UTILITY_ITEMS} from "../../../constants/header.constants";

const UtilityNav: React.FC = () => {
  return (
    <div className="utility-nav-row">
      <div className="container">
        <nav id="utility-nav" aria-label="Utility Navigation">
          <NavList items={UTILITY_ITEMS} />
        </nav>
      </div>
    </div>
  );
};

export default UtilityNav;
