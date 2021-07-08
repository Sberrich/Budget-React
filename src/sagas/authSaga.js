import { put, call } from "redux-saga/effects";

import axios from "axios";
import { push } from "react-router-redux";

import {
  RegisterUserSuccess,
  RegisterUserError,
  LoginUserError,
  LoginUserSuccess,
} from "../actions/authActions";

// Register User
export function* registerSaga(payload) {
  try {
    const response = yield call(adduser, payload.data);

    yield put(RegisterUserSuccess(response.data));
    if (response.status === 201) {
      yield put(push("/login"));
    }
  } catch (error) {
    yield put(RegisterUserError(error));
  }
}

async function adduser(data) {
  const res = await axios.post("http://localhost:3001/register", {
    data,
  });

  return res;
}

// Login User

export function* loginSaga(data) {
  try {
    const response = yield call(LoginUser, data);
    const { access_token } = response;
    yield put(LoginUserSuccess(response.data));
    localStorage.setItem("token", access_token);
    yield put(push("/home"));
  } catch (error) {
    yield put(LoginUserError(error));
    localStorage.removeItem("token");
  }
}

async function LoginUser(data) {
  const res = await axios.post("http://localhost:3001/login", {
    data,
  });
  return res;
}
