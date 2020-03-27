import { createReducer } from "@reduxjs/toolkit";
import {
  USER_SIGN_UP_REQUEST,
  USER_SIGN_UP_FAILURE,
  USER_SIGN_UP_SUCCESS,
  USER_SIGN_OUT_SUCCESS,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_RESETPASS_SUCCESS,
  USER_RESETPASS_FAILURE,
  USER_CONFIRMPASS_SUCCESS,
  USER_CONFIRMPASS_FAILURE,
  FETCH_ME_REQUEST,
  FETCH_ME_SUCCESS,
  FETCH_ME_FAILURE,
  FETCH_USERS_SUCCESS,
  SELECT_USER,
} from "../actions/users";

export const initialState = {
  token: null,
  isAuthorized: false,
  loading: false,
  currentUser: {},
  entities: [],
  selected: "",
  FailedMsg:"",
  AuthFlag: false,
  AuthLoading: false,
  ResetPassFlag: false,
  Sentuser: null,
  confirmType: null
};

const usersReducer = createReducer(initialState, {
  [USER_SIGN_UP_REQUEST]: (state, payload) => {
    state.AuthLoading = true;
    state.Sentuser = payload.payload;
  },
  [USER_SIGN_UP_SUCCESS]: (state, payload) => {
    state.AuthLoading = false;
    state.AuthFlag =  true;
    state.FailedMsg = "";
    state.confirmType = "register";
  },
  [USER_SIGN_UP_FAILURE]: (state , {payload}) => {
    state.AuthLoading = false;
    state.AuthFlag =  false;
    state.Sentuser = null;
    if(payload.status === 400)
    {
      state.FailedMsg = payload.data.message
    }
  },
  [USER_LOGIN_REQUEST]: (state) => {
    state.AuthLoading = true;
  },
  [USER_LOGIN_SUCCESS]: (state) => {
    state.AuthLoading = false;
  },
  [USER_LOGIN_FAILURE]: (state , {payload}) => {
    state.loading = false;
    state.AuthLoading = false;
    state.AuthFlag =  false;
    if(payload.status === 404)
    {
      state.FailedMsg = payload.data.message
    }
  },
  [USER_SIGN_OUT_SUCCESS]: (state) => {
    state.isAuthorized = false;
    state.loading = false;
    state.token = null;
    state.currentUser = {};
  },
  [USER_RESETPASS_SUCCESS]: (state, {payload}) => {
    state.confirmType = "resetpass";
    state.Sentuser = payload;
    state.ResetPassFlag = true;
  },
  [USER_RESETPASS_FAILURE]: (state, {payload}) => {
    state.FailedMsg = payload.data.message;
    state.ResetPassFlag = false;
  },
  [USER_CONFIRMPASS_SUCCESS]: (state) => {
    state.Sentuser = null;
    state.ResetPassFlag = false;
    state.confirmType = null;
  },
  [USER_CONFIRMPASS_FAILURE]: (state, {payload}) => {
    state.FailedMsg = payload.data.message
  },
  [FETCH_ME_REQUEST]: state => {
    state.loading = true;
  },
  [FETCH_ME_SUCCESS]: (state, { payload }) => {
    state.isAuthorized = true;
    state.loading = false;
    state.token = payload.token;
    state.currentUser = payload.me;
    state.Sentuser = null;
    state.confirmType = null;
    state.ResetPassFlag = false;
  },
  [FETCH_ME_FAILURE]: state => {
    state.isAuthorized = false;
    state.loading = false;
    state.token = null;
    state.currentUser = {};
  },
  [FETCH_USERS_SUCCESS]: (state, { payload }) => {
    state.entities = payload;
  },
  [SELECT_USER]: (state, { payload }) => {
    state.selected = payload;
  }
});

export default usersReducer;
