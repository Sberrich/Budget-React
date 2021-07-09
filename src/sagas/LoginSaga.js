import { takeLatest, put, call, delay } from "redux-saga/effects";
import { push } from "react-router-redux";
import { resetState } from "../actions/ResetAction";
import { loginError, loginUserSuccess } from "../actions/LoginAction";
import { request } from "./helper";

const login = function* login({ data }) {
  try {
    const response = yield call(request, {
      url: "http://localhost:8000/auth/login",
      data,
      method: "post",
    });
    localStorage.setItem("Token", response.data.access_token);
    yield put(loginUserSuccess());
    yield put(push("/home"));
    yield delay(4000);
    yield put(resetState());
  } catch (error) {
    if (error.response) {
      yield put(
        loginError("error.response.statusText", "error.response.status")
      );
    }
  }
};
// eslint-disable-next-line
export default function* () {
  yield takeLatest("LOGIN_USER", login);
}
