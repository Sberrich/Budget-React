import {
  INSCRIPTION_USER,
  INSCRIPTION_USER_ERROR,
  INSCRIPTION_USER_SUCCESS,
} from "../actions/RegisterAction";
import { RESET_STATE } from "../actions/ResetAction";
// eslint-disable-next-line
export default function (state = "", action) {
  switch (action.type) {
    case INSCRIPTION_USER:
      return { registerStatus: "loading" };
    case INSCRIPTION_USER_SUCCESS:
      return { registerStatus: "success" };
    case INSCRIPTION_USER_ERROR:
      return { registerStatus: "error", error: action.error };
    case RESET_STATE:
      return "initial state";
    default:
      return state;
  }
}
