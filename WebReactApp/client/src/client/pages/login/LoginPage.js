import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="container-fluid">
    <div className="sidenav">
      <div className="login-main-text">
        <h2>
          Application
          <br/>
            Login Page <br />
          </h2>
          <p>Login or register from here to access.</p>
      </div>
      <div className="login-main">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <form>
              <div className="form-group">
                <label>User Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="User Name"
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-black">
                Login
              </button>
              <button type="submit" className="btn btn-secondary">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};


export default LoginPage;