import React from "react";
import SidebarHeader from "./SidebarHeader";
import UtilityNav from "./UtilityNav";
import MainNav from "./MainNav";
import type {ISidebarCloseProps} from "../Header.types";

const Sidebar: React.FC<ISidebarCloseProps> = ({onSidebarClose}) => {
  return (
    <aside className="sidebar">
      <SidebarHeader onSidebarClose={onSidebarClose} />
      <UtilityNav onSidebarClose={onSidebarClose} />
      <MainNav onSidebarClose={onSidebarClose} />
    </aside>
  );
};
export default Sidebar;
