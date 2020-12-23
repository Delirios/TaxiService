import { history } from '../../../services/utils/history';


const requestLogin = (request) => {
  return {
    type: "USERS_LOGIN_REQUEST",
    payload: request,
  };
};
const successLogin = (request) => {
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


const login = (taxiService, values) => () => (dispatch) => {
  const {username} = values
  dispatch(requestLogin(username));
  taxiService.login(values).then(data => {
    dispatch(successLogin(data));
    history.push("/");
  });
};

const logout=(taxiService) =>() => (dispatch) =>{
  dispatch(successLogout());
    taxiService.logout();
}

const register=()=>{

}
export { login ,logout,register};