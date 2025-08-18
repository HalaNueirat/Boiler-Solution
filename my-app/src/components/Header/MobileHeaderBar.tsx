import React from "react";
import Logo from "../common/Logo";
import {toggleSidebar} from "../../store/sidebar.slice";
import {useAppDispatch} from "../../hooks/store/useAppDispatch";

const MobileHeaderBar: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="mobile-header-bar">
      <div className="container">
        {/* Menu icon */}
        <button
          type="button"
          className="menu-icon"
          aria-label="Toggle menu"
          onClick={() => dispatch(toggleSidebar())}
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
