import React from "react";
import Header from "../Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer";
import {FOOTER_DATA} from "../../constants/footer.constants";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer data={FOOTER_DATA} />
    </>
  );
};

export default Layout;
