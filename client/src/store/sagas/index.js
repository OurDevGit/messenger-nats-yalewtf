import { all } from "redux-saga/effects";

import globalSaga from "./global";
import usersSaga from "./users";
import messageSaga from "./messages";

export default function*() {
  yield all([globalSaga(), usersSaga(), messageSaga()]);
}
