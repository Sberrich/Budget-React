import * as types from "./index";

export const RegisterAction = (data) => ({
  type: types.REGISTER_USER,
  data,
  // data: payload,
});

export const RegisterUserSuccess = (data) => ({
  type: types.REGISTER_USER_SUCCESS,
  data,
});

export const RegisterUserError = (data) => ({
  type: types.REGISTER_USER_ERROR,
  data,
});

export const loginUserAction = (user) => {
  return {
    type: types.LOGIN_USER,
    user,
  };
};
export const LoginUserSuccess = (data) => ({
  type: types.LOGIN_USER_SUCCESS,
  data,
});
export const LoginUserError = (data) => ({
  type: types.LOGIN_USER_ERROR,
  data,
});
