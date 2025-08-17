import "./Header.css";

import MobileHeaderBar from "./MobileHeaderBar";
import Sidebar from "./Sidebar/Sidebar";
import TopMessage from "./TopMessage";
import UtilityNav from "./Sidebar/UtilityNav";
import MainNav from "./Sidebar/MainNav";
import {useSelector} from "react-redux";
import type {RootState} from "../../store/store";

const Header: React.FC = () => {
  const sidebarOpen = useSelector((state: RootState) => state.sidebar.open);

  return (
    <header>
      <TopMessage />
      <MobileHeaderBar />
      <div className="desktop-nav-area">
        <UtilityNav />
        <MainNav />
      </div>
      {sidebarOpen && <Sidebar />}
    </header>
  );
};
export default Header;
