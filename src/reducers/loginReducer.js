import * as types from "../actions";
// eslint-disable-next-line
export default function (state = [], action) {
  const response = action.response;

  switch (action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { loginStatus: "success" };
    case types.LOGIN_USER_ERROR:
      return { loginStatus: "error" };
    default:
      return state;
  }
}
