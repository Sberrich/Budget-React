import { fork, all } from "redux-saga/effects";
import registerSaga from "./RegisterSaga";
import LoginSaga from "./LoginSaga";
// eslint-disable-next-line
export default function* () {
  yield all([fork(registerSaga), fork(LoginSaga)]);
}
