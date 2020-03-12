import { createAction } from "@reduxjs/toolkit";

export const CHANGE_THEME = "[global] change theme";

export const changeThemeAction = createAction(CHANGE_THEME);

export const TOGGLE_SIDE_NAV = "[global] toggle side nav";
export const toggleSideNavAction = createAction(TOGGLE_SIDE_NAV);
