let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user, registerNotification: "" } : { loggedIn: false };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USERS_LOGIN_REQUEST":
      console.log("REQUEST");
      return {
        ...state,
        loggedIn: false,
        user: action.payload,
      };
    case "USERS_LOGIN_SUCCESS":
      console.log("SUCCESS");
      return {...state,
        loggedIn: true,
        user: action.payload,
      };
    case "USERS_LOGIN_FAILURE":
      console.log("FAILURE");
      return {};
    case "USERS_LOGOUT":
      console.log("LOGUOT");
      return { loggedIn: false };
    case "USERS_REGISTER_REQUEST":
      console.log("REQUEST");
      return {
        ...state,
        loggedIn: false,
        registerNotification: ""
      };
    case "USERS_REGISTER_SUCCESS":
      console.log("SUCCESS");
      console.log(action.payload)
      return {
        ...state,
        loggedIn: false,
        registerNotification : action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
