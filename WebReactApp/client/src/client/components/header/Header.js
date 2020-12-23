import React, { Component } from "react";
import { Link } from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/user";

import WithTaxiService from "../hoc-helpers/WithTaxiService";
import compose from "../../../services/utils/compose";

class Header extends Component {
  onClick = () => {
    const { logout } = this.props;
    console.log("user");
    logout();
  };

  renderLogin = () => {
    const {loggedIn } = this.props;

    if (!loggedIn) {
      console.log("user null");
      return (
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      );
    }
    if (loggedIn) {
      console.log("user not null");
      return (
        <li className="nav-item">
          <Link onClick={this.onClick} to="/login" className="nav-link">
            Logout
          </Link>
        </li>
      );
    }
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link to="/" className="navbar-brand">
            Taxi
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/order" className="nav-link">
                  Order
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pricing/" className="nav-link">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/news" className="nav-link">
                  News
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div id="navbarColor01">
            <ul className="navbar-nav">
              {this.renderLogin()}
              <li className="nav-item">
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ userReducer: { user, loggedIn } }) => {
  return { user,loggedIn };
};

const mapDispatchToProps = (dispatch, { taxiService }) => {
  return bindActionCreators(
    {
      logout: logout(taxiService),
    },
    dispatch
  );
};

export default compose(
  WithTaxiService(),
  connect(mapStateToProps, mapDispatchToProps)
)(Header);
