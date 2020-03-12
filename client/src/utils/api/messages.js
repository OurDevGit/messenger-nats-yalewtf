import API from "./API";

const api = new API();
const prefix = "/messages";

const createMessage = data =>
  api
    .callApi({
      url: `${prefix}`,
      method: "post",
      data
    })
    .then(result => result.data);

const getPrevMessages = ({ pub, sub }) =>
  api
    .callApi({
      url: `${prefix}/${pub}/${sub}`,
      method: "get"
    })
    .then(result => result.data);

export default {
  createMessage,
  getPrevMessages
};
