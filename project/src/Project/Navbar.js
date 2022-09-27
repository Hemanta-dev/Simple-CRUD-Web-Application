import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
function Navbar() {
  return (
    <div>
      <nav className="style4">
        <NavLink to="/Home">
          <h2 className="style3">Home</h2>
        </NavLink>

        <NavLink to="/User">
          <h2 className="style1">User</h2>
        </NavLink>

        <NavLink to="/UpdateEmp">
          <h2 className="style">Update</h2>
        </NavLink>
      </nav>

      <NavLink to="/List">
        <h2 className="style">List</h2>
      </NavLink>
    </div>
  );
}
export default Navbar;
