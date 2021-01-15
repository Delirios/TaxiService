import { Component } from "react";
import { Link } from "react-router-dom";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { register } from "../../redux/actions/user";
import { NotificationContainer } from "react-notifications";
import Notification from "../notification/Notification";

import WithTaxiService from "../hoc-helpers/WithTaxiService";
import compose from "../../../services/utils/compose";

import "./Register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      notification: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const { firstName, lastName, username, password } = this.state;
    const values = {
      firstName,
      lastName,
      username,
      password,
    };

    const result = await this.props.register(values);

    this.setState({ notification: result });

    await Notification(this.state.notification);
  };

  render() {
    return (
      <div className="register-background">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <form className="box-register" onSubmit={this.handleSubmit}>
                <h1>Register</h1>
                <p className="text-muted">Please fill in all fields!</p>
                <div className="form-row">
                  <div className="form-group col-md-6 ">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      placeholder="First Name"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6 ">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      placeholder="Last Name"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6 ">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder="Username"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6 ">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
                <NotificationContainer />
                <div className="col-md-12">
                  <ul className="social-network social-circle">
                    <li>
                      <Link to="#" className="icoFacebook" title="Facebook">
                        <i className="fa fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="icoTwitter" title="Twitter">
                        <i className="fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="icoGoogle" title="Google +">
                        <i className="fa fa-google-plus"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ userReducer: { user, registerNotification } }) => {
  return { user, registerNotification };
};
const mapDispatchToProps = (dispatch, { taxiService }) => {
  return bindActionCreators(
    {
      register: (values) => dispatch(register(taxiService, values)),
    },
    dispatch
  );
};

export default compose(
  WithTaxiService(),
  connect(mapStateToProps, mapDispatchToProps)
)(Register);
