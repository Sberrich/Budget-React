// Register Saga

import { takeLatest, put, delay } from "redux-saga/effects";
import { push } from "react-router-redux";
import { resetState } from "../actions/ResetAction";
import {
  inscriptionError,
  inscriptionUserSuccess,
} from "../actions/RegisterAction";
import axios from "axios";

const inscription = function* inscription({ data }) {
  try {
    const res = yield axios.post("http://localhost:8000/auth/register", data);

    if (res.data.access_token) {
      localStorage.setItem("Token", res.data.access_token);
      yield put(inscriptionUserSuccess(data));
      yield put(push("/login"));
    } else {
      yield put(inscriptionError("Username and email already exist"));
    }
    yield delay(4000);
    yield put(resetState());
  } catch (error) {
    if (error.response) {
      yield put(
        inscriptionError("error.response.statusText", "error.response.status")
      );
    }
  }
};
// eslint-disable-next-line
export default function* () {
  yield takeLatest("INSCRIPTION_USER", inscription);
}
