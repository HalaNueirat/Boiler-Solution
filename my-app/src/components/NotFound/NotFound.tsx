import React from "react";
import {Link} from "react-router-dom";
import "./NotFound.css";

const NotFound: React.FC = () => {
  return (
    <div className="notfound-container">
      <i className="fas fa-sad-tear notfound-icon"></i>
      <h1 className="notfound-title">404 Error</h1>
      <Link to="/" className="notfound-link">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
