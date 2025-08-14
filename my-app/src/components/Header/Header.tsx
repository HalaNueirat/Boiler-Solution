import {useState} from "react";
import "./Header.css";

import MobileHeaderBar from "./MobileHeaderBar";
import Sidebar from "./Sidebar/Sidebar";
import TopMessage from "./TopMessage";
import UtilityNav from "./Sidebar/UtilityNav";
import MainNav from "./Sidebar/MainNav";

const Header: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  // sidebar handlers
  const handleCloseSidebar = () => setSidebarOpen(false);
  const handleToggleSidebar = () => setSidebarOpen((v) => !v);

  return (
    <header>
      <TopMessage />
      <MobileHeaderBar onMenuToggle={handleToggleSidebar} />
      <div className="desktop-nav-area">
        <UtilityNav />
        <MainNav />
      </div>
      {sidebarOpen && <Sidebar onSidebarClose={handleCloseSidebar} />}
    </header>
  );
};
export default Header;
