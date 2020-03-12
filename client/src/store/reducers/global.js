import { createReducer } from "@reduxjs/toolkit";
import { CHANGE_THEME, TOGGLE_SIDE_NAV } from "../actions/global";

export const initialState = {
  // theme: "messenger",
  theme: "poocho",
  openSideNav: false
};

const global = createReducer(initialState, {
  [CHANGE_THEME]: (state, { payload }) => {
    state.theme = payload;
  },
  [TOGGLE_SIDE_NAV]: state => {
    state.openSideNav = !state.openSideNav;
  }
});

export default global;
