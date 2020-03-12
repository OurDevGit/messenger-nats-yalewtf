import API from "./API";

const api = new API();
const prefix = "/auth";
const usersPrefix = "/users";

const login = data =>
  api
    .callApi({
      url: `${prefix}/login`,
      method: "post",
      data
    })
    .then(result => result.data);

const register = data =>
  api
    .callApi({
      url: `${prefix}/register`,
      method: "post",
      data
    })
    .then(result => result.data);

const fetchMe = () =>
  api.callApi({
    url: `${usersPrefix}/me`
  });

const fetchUsers = () =>
  api.callApi({
    url: `${usersPrefix}`
  });

export default {
  login,
  register,
  fetchMe,
  fetchUsers
};
