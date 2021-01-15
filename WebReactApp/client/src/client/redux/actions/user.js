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

const requestRegister = () => {
  return {
    type: "USERS_REGISTER_REQUEST"
  };
};
const successRegister = (request) => {
  console.log(request)
  return { 
    type: "USERS_REGISTER_SUCCESS",
    payload: request,
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

const register=(taxiService, values)=>()=> async (dispatch) =>{
  dispatch(requestRegister());
  const result  =await taxiService.register(values);
  console.log(result)
  dispatch(successRegister(result));
  return result
}
const logout=(taxiService) =>() => (dispatch) =>{
  dispatch(successLogout());
    taxiService.logout();
}

export { login ,logout,register};