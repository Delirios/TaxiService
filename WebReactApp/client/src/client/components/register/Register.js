import { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { register } from "../../redux/actions/user";


import WithTaxiService from "../hoc-helpers/WithTaxiService";
import renderField from "../../../services/utils/renderField";
import compose from "../../../services/utils/compose";

import "./Register.css";

class Register extends Component {
  onSubmit(values) {
    console.log(values);
    this.props.login(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form
              className="box-register"
              onSubmit={handleSubmit(this.onSubmit.bind(this))}
            >
              <h1>Register</h1>
              <p className="text-muted">Please fill in all fields!</p>
              <div className="form-row">
                <div className="form-group col-md-6 ">
                  <Field
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    label="Your Name"
                    component={renderField}
                  />
                </div>
                <div className="form-group col-md-6 ">
                  <Field
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    label="Your Surname"
                    component={renderField}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6 ">
                  <Field
                    placeholder="Username"
                    type="text"
                    name="username"
                    label="Login"
                    component={renderField}
                  />
                </div>
                <div className="form-group col-md-6 ">
                  <Field
                    placeholder="Password"
                    type="password"
                    name="password"
                    label="Password"
                    component={renderField}
                  />
                </div>
              </div>
              <input type="submit" name="" value="Register" to="#" />
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
    );
  }
}

const mapStateToProps = ({ userReducer: { user } }) => {
    return { user };
  };
  const mapDispatchToProps = (dispatch, { taxiService }) => {
    return bindActionCreators(
      {
        login: (username, password) =>
          dispatch(register(taxiService, username, password)),
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
