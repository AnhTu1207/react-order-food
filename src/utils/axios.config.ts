/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from "axios";

import Config from "config";

export const axiosBaseConfig = () => {
  axios.defaults.baseURL = Config.API_URL;
  axios.defaults.headers.common.Accept = "application/json";
  axios.defaults.headers.common["Content-Type"] =
    "application/x-www-form-urlencoded";
};

export const axiosSetAuthToken = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const axiosRemoveAuthToken = () => {
  delete axios.defaults.headers.common.Authorization;
  sessionStorage.clear();
};

export const setUpInterceptors = (history: any) => {
  axios.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 401) {
        history.push("/login");
        axiosRemoveAuthToken();
        sessionStorage.clear();
      }
      return Promise.reject(error);
    }
  );
};
