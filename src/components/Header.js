import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          Expensify
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              className="nav-item nav-link"
              to="/"
              activeClassName="active"
              exact={true}
            >
              Dashboard
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              to="/create"
              activeClassName="active"
            >
              Create
            </NavLink>
            <NavLink
              className="nav-item nav-link"
              to="/help"
              activeClassName="active"
            >
              Help
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
