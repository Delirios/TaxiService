import { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login } from "../../redux/actions/user";

import WithTaxiService from "../hoc-helpers/WithTaxiService";
import renderField from "../../../services/utils/renderField";
import compose from "../../../services/utils/compose";

import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    // reset login status
    //this.props.dispatch(logout());

    this.state = {
      username: "",
      password: "",
      submitted: false,
    };
  }

  onSubmit(values) {
    //console.log(values);
    const { username, password } = values;    
    const {login} = this.props

    this.setState({ username: username, password: password, submitted: true });

    //console.log(username, password)
    if (username && password) {
      login(values);
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <form
              className="box"
              onSubmit={handleSubmit(this.onSubmit.bind(this))}
            >
              <h1>Login</h1>
              <p className="text-muted">
                Please enter your login and password!
              </p>
              <Field
                placeholder="Username"
                type="text"
                name="username"
                label="Login"
                component={renderField}
              />
              <Field
                placeholder="Password"
                type="password"
                name="password"
                label="Password"
                component={renderField}
              />
              <Link className="forgot text-muted" to="/ForgotPassword">
                Forgot password?
              </Link>
              <input type="submit" name="" value="Login" href="#" />
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

const mapStateToProps = ({ userReducer: { loggedIn } }) => {
  return { loggedIn };
};

const mapDispatchToProps = (dispatch, { taxiService }) => {
  return bindActionCreators(
    {
      login: (values) => dispatch(login(taxiService, values)),
    },
    dispatch
  );
};

export default reduxForm({
  form: "LoginForm",
})(
  compose(
    WithTaxiService(),
    connect(mapStateToProps, mapDispatchToProps)
  )(Login)
);
