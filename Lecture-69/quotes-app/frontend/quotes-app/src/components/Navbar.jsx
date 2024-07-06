import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/new-quotes">new quots</Link>
        </li>
        <li>
          <Link to="/">home</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
