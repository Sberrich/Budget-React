import * as types from "../actions";

// eslint-disable-next-line
export default function (state = "", action) {
  switch (action.type) {
    case types.REGISTER_USER_SUCCESS:
      return { registerStatus: "success" };
    case types.REGISTER_USER_ERROR:
      return { registerStatus: "error" };
    default:
      return state;
  }
}
