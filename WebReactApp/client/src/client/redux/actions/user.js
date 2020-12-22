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

const login = (taxiService, username, password) => () => (dispatch) => {
  dispatch(requestLogin({ username }));
  taxiService.login(username, password).then(data => {
    dispatch(successLogin(data));
    history.push("/");
  });
};

const logout=(taxiService) =>{
    taxiService.logout();
    return { type: "USERS_LOGOUT" };
}

export { login ,logout};