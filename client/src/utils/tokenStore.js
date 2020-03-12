import { tokenKey } from "../constants/global";

export const storeToken = (tokens = {}) => {
  localStorage.setItem(tokenKey, JSON.stringify(tokens));
};

export const getToken = () => {
  try {
    const token = localStorage.getItem(tokenKey);
    return JSON.parse(token);
  } catch (e) {
    return null;
  }
};
