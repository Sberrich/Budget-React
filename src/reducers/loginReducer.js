import {
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
} from "../actions/LoginAction";

import { RESET_STATE } from "../actions/ResetAction";

const DEFAULT_STATE = {
  status: "offline",
  error: null,
};
// eslint-disable-next-line
export default function (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        status: "loading",
        error: null,
      };
    case LOGIN_USER_SUCCESS:
      return {
        status: "online",
        error: null,
      };
    case LOGIN_USER_ERROR:
      return {
        status: "error",
        error: action.error,
      };

    case RESET_STATE:
      return "initial state";
    default:
      return state;
  }
}
