import { createReducer } from "@reduxjs/toolkit";
import {
  FETCH_ME_REQUEST,
  FETCH_ME_SUCCESS,
  FETCH_ME_FAILURE,
  FETCH_USERS_SUCCESS,
  SELECT_USER
} from "../actions/users";

export const initialState = {
  token: null,
  isAuthorized: false,
  loading: false,
  currentUser: {},
  entities: [],
  selected: ""
};

const usersReducer = createReducer(initialState, {
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
