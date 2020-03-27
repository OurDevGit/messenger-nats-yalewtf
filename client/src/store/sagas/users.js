import { takeLatest, takeEvery, put, call, select } from "redux-saga/effects";
import { userApi, messageApi } from "../../utils/api";
import { storeToken, getToken } from "../../utils/tokenStore";
import { notification } from 'antd'
import { Success_Login_message, Success_Signup_message, Success_Logout_message, Success_ResetPass_message, Error_UsernameExistsException} from '../../constants/text'
import {
  USER_LOGIN_REQUEST,
  userLoginFailureAction,
  USER_SIGN_UP_REQUEST,
  userSignupSuccessAction,
  userSignupFailureAction,
  USER_SIGN_OUT_REQUEST,
  userSignoutSuccessAction,
  userSignoutFailureAction,
  USER_RESETPASS_REQUEST,
  userResetpassSuccessAction,
  userResetpassFailureAction,
  USER_CONFIRMPASS_REQUEST,
  userConfirmpassSuccessAction,
  userConfirmpassFailureAction,
  FETCH_ME_REQUEST,
  fetchMeFailureAction,
  fetchMeSuccessAction,
  FETCH_USERS_REQUEST,
  fetchUsersSuccessAction,
  fetchUsersFailureAction,
  SELECT_USER,
  USER_RESENDCODE_REQUEST,
  userResendcodeFailureAction,
  userResendcodeSuccessAction,
} from "../actions/users";
import { receivedPrevMessages } from "../actions/messages";

function* loginUserSaga(action) {
  try {
    const response = yield call(userApi.login, action.payload);
    storeToken(response);
    yield put({ type: FETCH_ME_REQUEST });
    notification.success({
      message: 'Poocho_Messenger',
      description: Success_Login_message,          
    });
  } catch (e) {
    yield put(userLoginFailureAction(e));
    notification.error({
      message: 'Error',
      description: e.data.message,          
    });
  }
}

function* signupSaga(action) {
  try {
    const response = yield call(userApi.register, action.payload);
    if(response.user_type === "aws_social"){
      yield put({ type: FETCH_ME_REQUEST });
    }else{
      yield put(userSignupSuccessAction(response));
      notification.success({
        message: 'Poocho_Messenger',
        description: Success_Signup_message,          
      });
    }
    
  } catch (e) {
    if(e.data.name === "UsernameExistsException"){
      notification.error({
        message: 'Error',
        description: Error_UsernameExistsException,
      });
      e.data.message = Error_UsernameExistsException;
    }
    yield put(userSignupFailureAction(e));
  }
}

function* signoutSaga(action) {
  try {
    const response = yield call(userApi.signout, action.payload);
    yield put(userSignoutSuccessAction(response));
    storeToken(null);
    notification.success({
      message: 'poocho messenger:logged out',
      description: Success_Logout_message,          
    });
  } catch (e) {
    yield put(userSignoutFailureAction(e));
    notification.error({
      message: 'Error',
      description: e.data.message,
    });
  }
}

function* resetpassSaga(action) {
  try{
    const response = yield call(userApi.resetpass, action.payload);
    yield put( userResetpassSuccessAction(response));
  } catch(e) {
    yield put( userResetpassFailureAction(e));
  }
}

function* confirmpassSaga(action) {
  try{
    const response = yield call(userApi.confirmpass, action.payload);
    if(response.accesstoken)
    {
      storeToken(response);
      yield put({ type: FETCH_ME_REQUEST });
      notification.success({
        message: 'Poocho_Messenger',
        description: Success_Login_message,          
      });
    }else{
      yield put( userConfirmpassSuccessAction(response));
      notification.success({
        message: 'Poocho_Messenger',
        description: Success_ResetPass_message,          
      });
    }
    
  } catch(e) {
    yield put( userConfirmpassFailureAction(e) );
    notification.error({
      message: 'Error',
      description: e.data.message,          
    });
  }
}

function* resendcodeSaga(action) {
  try{
    const response = yield call(userApi.resendcode, action.payload);
    yield put( userResendcodeSuccessAction(response));
    notification.success({
      message: 'Poocho_Messenger',
      description: "Successfully resend",          
    });
  } catch(e) {
    yield put( userResendcodeFailureAction(e) );
    notification.error({
      message: 'Error',
      description: e.data.message,          
    });
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
  } catch (e) {
    yield put(fetchMeFailureAction(e));
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
  yield takeLatest(USER_SIGN_OUT_REQUEST, signoutSaga);
  yield takeLatest(USER_RESETPASS_REQUEST, resetpassSaga);
  yield takeLatest(USER_CONFIRMPASS_REQUEST, confirmpassSaga);
  yield takeLatest(USER_RESENDCODE_REQUEST, resendcodeSaga);
  yield takeLatest(FETCH_ME_REQUEST, fetchMe);
  yield takeEvery(FETCH_USERS_REQUEST, fetchUsers);
  yield takeEvery(SELECT_USER, fetchPreMessage);
}
