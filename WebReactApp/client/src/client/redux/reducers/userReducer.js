let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : { loggedIn: false };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USERS_LOGIN_REQUEST":
      console.log("REQUEST");
      return {
        loggedIn: false,
        user: action.user,
      };
    case "USERS_LOGIN_SUCCESS":
      console.log("SUCCESS");
      return {
        loggedIn: true,
        user: action.user,
      };
    case "USERS_LOGIN_FAILURE":
      console.log("FAILURE");
      return {};
    case "USERS_LOGOUT":
      console.log("LOGUOT")
      return {loggedIn: false};
    default:
      return state;
  }
};

export default userReducer;
