import React from "react";
import logo from "/images/logo.svg";

const Logo: React.FC = () => {
  return (
    <a href="/" className="logo-link">
      <img src={logo} alt="Xngage Logo" className="logo" loading="lazy" />
    </a>
  );
};

export default Logo;
