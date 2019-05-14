import axios from "axios";

import browserStorage from "./browserStorage";

const token = browserStorage.getKey("token") || null;

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URI || "http://localhost:6900",
  timeout: 2000,
  headers: {
    // will be replaced by actual token header
    Authorization: `Bearer ${token}` || ""
  }
});

const requestAPI = async ({ method, url, data }) => {
  try {
    const response = await axiosInstance({
      method: method || "get", // either get, post, delete, put
      url: url || "/",
      data: data || {}
    });
    return response;
  } catch (error) {
    return error;
  }
};

export default requestAPI;
