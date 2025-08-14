import React from "react";
import Logo from "../common/Logo";
import type {IMobileHeaderBarProps} from "./Header.types";

const MobileHeaderBar: React.FC<IMobileHeaderBarProps> = ({onMenuToggle}) => {
  return (
    <div className="mobile-header-bar">
      <div className="container">
        {/* Menu icon */}
        <button
          type="button"
          className="menu-icon"
          aria-label="Toggle menu"
          onClick={onMenuToggle}
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Website logo */}
        <Logo />

        {/* Search icon */}
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default MobileHeaderBar;
