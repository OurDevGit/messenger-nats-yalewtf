import { takeLatest, put, call } from "redux-saga/effects";
import { messageApi } from "../../utils/api";

import {
  CREATE_MESSAGE_REQUEST,
  createMessageSuccessAction,
  createMessageFailureAction
} from "../actions/messages";

function* createMessageSaga(action) {
  try {
    const response = yield call(messageApi.createMessage, action.payload);
    yield put(createMessageSuccessAction({ newMsg: response, sub: response.subscriber }));
  } catch (e) {
    yield put(createMessageFailureAction(e));
  }
}

export default function*() {
  yield takeLatest(CREATE_MESSAGE_REQUEST, createMessageSaga);
}
