import { createAction } from "@reduxjs/toolkit";

export const USER_LOGIN_REQUEST = "[user] user login request";
export const USER_LOGIN_SUCCESS = "[user] user logged success";
export const USER_LOGIN_FAILURE = "[user] user logging failure";

export const userLoginRequestAction = createAction(USER_LOGIN_REQUEST);
export const userLoginSuccessAction = createAction(USER_LOGIN_SUCCESS);
export const userLoginFailureAction = createAction(USER_LOGIN_FAILURE);

export const USER_SIGN_UP_REQUEST = "[user] user signup request";
export const USER_SIGN_UP_SUCCESS = "[user] user signup success";
export const USER_SIGN_UP_FAILURE = "[user] user signup failure";

export const userSignupRequestAction = createAction(USER_SIGN_UP_REQUEST);
export const userSignupSuccessAction = createAction(USER_SIGN_UP_SUCCESS);
export const userSignupFailureAction = createAction(USER_SIGN_UP_FAILURE);

export const USER_SIGN_OUT_REQUEST = "[user] user signout request";
export const USER_SIGN_OUT_SUCCESS = "[user] user signout success";
export const USER_SIGN_OUT_FAILURE = "[user] user signout failure";

export const userSignoutRequestAction = createAction(USER_SIGN_OUT_REQUEST);
export const userSignoutSuccessAction = createAction(USER_SIGN_OUT_SUCCESS);
export const userSignoutFailureAction = createAction(USER_SIGN_OUT_FAILURE);

export const USER_RESETPASS_REQUEST = "[user] user resetpass request";
export const USER_RESETPASS_SUCCESS = "[user] user resetpass success";
export const USER_RESETPASS_FAILURE = "[user] user resetpass failure";

export const userResetpassRequestAction = createAction(USER_RESETPASS_REQUEST);
export const userResetpassSuccessAction = createAction(USER_RESETPASS_SUCCESS);
export const userResetpassFailureAction = createAction(USER_RESETPASS_FAILURE);

export const USER_CONFIRMPASS_REQUEST = "[user] user confirmpass request";
export const USER_CONFIRMPASS_SUCCESS = "[user] user confirmpass success";
export const USER_CONFIRMPASS_FAILURE = "[user] user confirmpass failure";

export const userConfirmpassRequestAction = createAction(USER_CONFIRMPASS_REQUEST);
export const userConfirmpassSuccessAction = createAction(USER_CONFIRMPASS_SUCCESS);
export const userConfirmpassFailureAction = createAction(USER_CONFIRMPASS_FAILURE);

export const FETCH_ME_REQUEST = "[user] fetch current user request";
export const FETCH_ME_SUCCESS = "[user] fetch current user success";
export const FETCH_ME_FAILURE = "[user] fetch current user failure";

export const fetchMeRequestAction = createAction(FETCH_ME_REQUEST);
export const fetchMeSuccessAction = createAction(FETCH_ME_SUCCESS);
export const fetchMeFailureAction = createAction(FETCH_ME_FAILURE);

export const FETCH_USERS_REQUEST = "[users] fetch users request";
export const FETCH_USERS_SUCCESS = "[users] fetch users success";
export const FETCH_USERS_FAILURE = "[users] fetch users failure";

export const fetchUsersRequestAction = createAction(FETCH_USERS_REQUEST);
export const fetchUsersSuccessAction = createAction(FETCH_USERS_SUCCESS);
export const fetchUsersFailureAction = createAction(FETCH_USERS_FAILURE);

export const SELECT_USER = "[users] select user";
export const selectUserAction = createAction(SELECT_USER);
