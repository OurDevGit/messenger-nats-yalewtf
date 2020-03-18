import { createReducer } from "@reduxjs/toolkit";
import {
  USER_SIGN_UP_REQUEST,
  USER_SIGN_UP_FAILURE,
  USER_SIGN_UP_SUCCESS,
  USER_LOGIN_FAILURE,
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
  AuthLoading: false
};

const usersReducer = createReducer(initialState, {
  [USER_SIGN_UP_REQUEST]: (state) => {
    // state.AuthLoading = true;
  },
  [USER_SIGN_UP_SUCCESS]: (state) => {
    state.AuthLoading = false;
    state.AuthFlag =  true;
    state.FailedMsg = "";
  },
  [USER_SIGN_UP_FAILURE]: (state , {payload}) => {
    state.AuthLoading = false;
    state.AuthFlag =  false;
    if(payload.status == 400)
    {
      state.FailedMsg = payload.data.message
    }
  },
  [USER_LOGIN_FAILURE]: (state , {payload}) => {
    state.loading = false;
    if(payload.status == 404)
    {
      state.FailedMsg = payload.data.message
    }
  },
  [FETCH_ME_REQUEST]: state => {
    state.loading = true;
  },
  [FETCH_ME_SUCCESS]: (state, { payload }) => {
    state.isAuthorized = true;
    state.loading = false;
    state.token = payload.token;
    state.currentUser = payload.me;
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
