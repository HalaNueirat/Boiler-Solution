import React from "react";
import Logo from "../../common/Logo";
import {closeSidebar} from "../../../store/sidebar.slice";
import { useAppDispatch } from "../../../hooks/store/useAppDispatch";

const SidebarHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="sidebar-header">
      {/* Website logo */}
      <Logo />
      {/* Close icon */}
      <button
        type="button"
        className="close-icon"
        aria-label="Close menu"
        onClick={() => dispatch(closeSidebar())}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

export default SidebarHeader;
