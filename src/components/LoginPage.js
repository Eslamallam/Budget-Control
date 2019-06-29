import React from "react";
import { startLogin } from "../actions/auth";
import { connect } from "react-redux";
import "../styles/loginPage.css";

const LoginPage = ({ startLogin }) => {
  return (
    <div className="loginPage">
      <div className="logincard">
        <h1>Expensify</h1>
        <button className="btn btn-lg btn-danger m-1" onClick={startLogin}>
          Sign in with Google {"  "}
          <span>
            <i className="fa fa-google" aria-hidden="true" />
          </span>
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(
  undefined,
  mapDispatchToProps
)(LoginPage);
