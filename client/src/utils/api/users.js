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

const combineSocial = data =>
  api
    .callApi({
      url: `${prefix}/combineSocial`,
      method: "post",
      data
    })
    .then(result => result.data);
const signout = data =>
  api
    .callApi({
      url: `${prefix}/signout`,
      method: "post",
      data
    })
    .then(result => result.data);

const resetpass = data =>
  api
    .callApi({
      url: `${prefix}/resetpass`,
      method: "post",
      data
    })
    .then(result => result.data);

const confirmpass = data =>
  api
    .callApi({
      url: `${prefix}/confirmpass`,
      method: "post",
      data
    })
    .then(result => result.data);

const resendcode = data =>
  api
    .callApi({
      url: `${prefix}/resendcode`,
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
  resetpass,
  combineSocial,
  confirmpass,
  resendcode,
  fetchMe,
  fetchUsers,
  signout
};
