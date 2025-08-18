import React from "react";
import SidebarHeader from "./SidebarHeader";
import UtilityNav from "./UtilityNav";
import MainNav from "./MainNav";

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <SidebarHeader />
      <UtilityNav />
      <MainNav />
    </aside>
  );
};
export default Sidebar;
