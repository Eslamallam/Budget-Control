import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { startLogOut } from "../actions/auth";

const Header = ({ startLogOut }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        Budget Control
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
            to="/dashboard"
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
        </div>
      </div>
      <ul className="nav navbar-nav navbar-right">
        <button className="btn btn-primary" onClick={startLogOut}>
          Log Out
        </button>
      </ul>
    </nav>
  );
};

const mapdispatchToProps = dispatch => ({
  startLogOut: () => dispatch(startLogOut())
});

export default connect(
  undefined,
  mapdispatchToProps
)(Header);
