import { takeLatest, takeEvery, put, call, select } from "redux-saga/effects";
import { userApi, messageApi } from "../../utils/api";
import { storeToken, getToken } from "../../utils/tokenStore";

import {
  USER_LOGIN_REQUEST,
  userLoginFailureAction,
  USER_SIGN_UP_REQUEST,
  userSignupSuccessAction,
  userSignupFailureAction,
  FETCH_ME_REQUEST,
  fetchMeFailureAction,
  fetchMeSuccessAction,
  FETCH_USERS_REQUEST,
  fetchUsersSuccessAction,
  fetchUsersFailureAction,
  SELECT_USER
} from "../actions/users";
import { receivedPrevMessages } from "../actions/messages";

function* loginUserSaga(action) {
  try {
    const response = yield call(userApi.login, action.payload);
    storeToken(response);
    yield put({ type: FETCH_ME_REQUEST });
  } catch (e) {
    yield put(userLoginFailureAction(e));
  }
}

function* signupSaga(action) {
  try {
    const response = yield call(userApi.register, action.payload);
    yield put(userSignupSuccessAction(response));
  } catch (e) {
    yield put(userSignupFailureAction(e));
  }
}

function* fetchMe() {
  try {
    const token = getToken();
    if (token) {
      const response = yield call(userApi.fetchMe);
      yield put(fetchMeSuccessAction({ me: response.data, token }));
    } else {
      yield put(fetchMeFailureAction("you should login to app"));
    }
  } catch (error) {
    yield put(fetchMeFailureAction(error));
  }
}

function* fetchUsers() {
  try {
    const response = yield call(userApi.fetchUsers);
    yield put(fetchUsersSuccessAction(response.data));
  } catch (error) {
    yield put(fetchUsersFailureAction(error));
  }
}

function* fetchPreMessage(action) {
  try {
    const currentUser = yield select(state => state.users.currentUser);
    const messages = yield call(messageApi.getPrevMessages, {
      sub: action.payload,
      pub: currentUser.username
    });
    yield put(receivedPrevMessages({ messages, sub: action.payload }));
  } catch (error) {
    console.log(error);
  }
}

export default function*() {
  yield takeLatest(USER_LOGIN_REQUEST, loginUserSaga);
  yield takeLatest(USER_SIGN_UP_REQUEST, signupSaga);
  yield takeLatest(FETCH_ME_REQUEST, fetchMe);
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsers);
  yield takeEvery(SELECT_USER, fetchPreMessage);
}
