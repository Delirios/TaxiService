let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : {};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case "USERS_LOGIN_REQUEST":
      return {
        loggingIn: true,
        user: action.user,
      };
    case "USERS_LOGIN_SUCCESS":
      return {
        loggedIn: true,
        user: action.user,
      };
    case "USERS_LOGIN_FAILURE":
      return {};
    case "USERS_LOGOUT":
      return {};
    default:
      return state;
  }
};

export default authentication;
