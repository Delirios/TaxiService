import { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { register } from "../../redux/actions/user";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

import WithTaxiService from "../hoc-helpers/WithTaxiService";
import renderField from "../../../services/utils/renderField";
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
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({ target }) {
    console.log(target.name, target.value);
    this.setState({
      [target.name]: target.value,
    });
  }
  handleSubmit = async (event) => {
    console.log(event);
    event.preventDefault();
    const { firstName, lastName, username, password } = this.state;
    const values = {
      firstName,
      lastName,
      username,
      password,
    };
    console.log(values);
    this.props.register(values);
  };
  createNotification = (type) => {
    console.log(type);
   
    return () => {
      switch (String(type)) {
        case "OK":
          NotificationManager.success("Success message", "Title here");
          break;
        case "Username already taken":
          NotificationManager.error("Error message", "Click me!", 5000, () => {
            alert("callback");
          });
          break;
        default:
          return null;
      }
    };
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
                      class="form-control"
                      name="firstName"
                      placeholder="First Name"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6 ">
                    <label>Last Name</label>
                    <input
                      type="text"
                      class="form-control"
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
                      class="form-control"
                      name="username"
                      placeholder="Username"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group col-md-6 ">
                    <label>Password</label>
                    <input
                      type="password"
                      class="form-control"
                      name="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.createNotification(this.props.registerNotification)}
                >
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

export default reduxForm({
  form: "RegisterForm",
})(
  compose(
    WithTaxiService(),
    connect(mapStateToProps, mapDispatchToProps)
  )(Register)
);
