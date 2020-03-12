import { takeLatest, put } from "redux-saga/effects";

import { CHANGE_THEME } from "../actions/global";

// TODO: will remove later
function* getGlobalSaga(action) {
  try {
    yield put({
      type: "TEST_REDUX_SAGA",
      payload: action.payload
    });
  } catch (e) {
    console.log("error: ", e);
  }
}

export default function*() {
  yield takeLatest(CHANGE_THEME, getGlobalSaga);
}
