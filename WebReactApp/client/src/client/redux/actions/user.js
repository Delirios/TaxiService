import { history } from '../../../services/utils/history';


const requestLogin = (request) => {
  return {
    type: "USERS_LOGIN_REQUEST",
    payload: request,
  };
};
const successLogin = (request) => {
  console.log(request)
  return { 
    type: "USERS_LOGIN_SUCCESS",
    payload: request,
  };
};
const successLogout = () => {
  return {
    type: "USERS_LOGOUT"
  };
};


const login = (taxiService, values) => () => async (dispatch) => {
  const {username} = values
  dispatch(requestLogin(username));
  let user = await taxiService.login(values);
    console.log(user)
    dispatch(successLogin(user));
    history.push("/");
};

const logout=(taxiService) =>() => (dispatch) =>{
  dispatch(successLogout());
    taxiService.logout();
}

const register=()=>{

}
export { login ,logout,register};