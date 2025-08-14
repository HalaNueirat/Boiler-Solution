import React from "react";
import Logo from "../../common/Logo";
import type {ISidebarCloseProps} from "../Header.types";

const SidebarHeader: React.FC<ISidebarCloseProps> = ({onSidebarClose}) => {
  return (
    <div className="sidebar-header">
      {/* Website logo */}
      <Logo />
      {/* Close icon */}
      <button
        type="button"
        className="close-icon"
        aria-label="Close menu"
        onClick={onSidebarClose}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default SidebarHeader;
