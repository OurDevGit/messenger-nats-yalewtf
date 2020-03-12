import axios from "axios";
import { set } from "lodash";
import { getToken } from "../tokenStore";

export default class API {
  constructor(baseURL = process.env.REACT_APP_API_URL) {
    this.baseURL = baseURL;

    this.instance = axios.create({
      baseURL: this.baseURL,
      headers: {
        "Content-Type": "application/json"
      }
    });

    this.instance.interceptors.request.use(_config => {
      // handle user token here
      const token = getToken();
      if (token && token.accesstoken) {
        set(_config, "headers.Authorization", token.accesstoken);
      }
      return _config;
    });
    this.instance.interceptors.response.use(
      response => {
        // has support since IE8.
        return response;
      },
      data => {
        if (data && data.response && data.response.status) {
          if (data.response.status === 401) {
            // Needs proper fixing, patching it to fix infinite reload
          }
        }
        return Promise.reject(data.response);
      }
    );
  }

  callApi({ method = "get", ...rest }) {
    return this.instance({ method, ...rest });
  }
}
