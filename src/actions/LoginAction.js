export const LOGIN_USER = "LOGIN_USER";

export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";

export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";

export const LoginAction = (datalogin) => ({
  type: LOGIN_USER,
  data: datalogin,
});

export const loginUserSuccess = () => ({
  type: LOGIN_USER_SUCCESS,
});

export const loginError = (error) => ({
  type: LOGIN_USER_ERROR,
  error,
});
