import React from "react";
import { NavLink } from "react-router-dom";

const HeaderNav = () => {
  return (
    <div className="headernav">
      <header>
        <div className="container">
          <div className="text-box">
            <NavLink to="/">
              <h1>Bible App</h1>
            </NavLink>
          </div>
        </div>

        <nav id="hnavbuttons">
          <NavLink className="main-nav" activeClassName="active" to="/">
            View
          </NavLink>
          {/* <NavLink className="main-nav" activeClassName="active" to="/add">
            Add
          </NavLink> */}
          <NavLink className="main-nav" activeClassName="active" to="/alefbet">
            Alefbet
          </NavLink>
          <NavLink
            className="main-nav"
            activeClassName="active"
            to="/alphabeta"
          >
            AlphaBeta
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default HeaderNav;
