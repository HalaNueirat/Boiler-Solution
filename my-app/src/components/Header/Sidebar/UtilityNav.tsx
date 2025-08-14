import React from "react";
import NavList from "../../common/NavList";
import {UTILITY_ITEMS} from "../../../constants/header.constants";
import type {ISidebarCloseProps} from "../Header.types";

const UtilityNav: React.FC<ISidebarCloseProps> = ({onSidebarClose}) => {
  return (
    <div className="utility-nav-row">
      <div className="container">
        <nav id="utility-nav" aria-label="Utility Navigation">
          <NavList items={UTILITY_ITEMS} onItemClick={onSidebarClose} />
        </nav>
      </div>
    </div>
  );
};

export default UtilityNav;
