import React from "react";

const Logo: React.FC = () => {
  return (
    <a href="/" className="logo-link">
      <img
        src="/images/logo.svg"
        alt="Xngage Logo"
        className="logo"
        loading="lazy"
      />
    </a>
  );
};

export default Logo;
