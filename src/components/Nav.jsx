import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="frases">
      <nav>
        <Link to="/" className="nav">
          Welcome
        </Link>
        <Link to="/Frases" className="nav">
          Frases
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
