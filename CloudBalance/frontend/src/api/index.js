import React from "react";
import axios from "axios";
import errorHandler from "./errorHandler";

import store from "../redux/store";
import {
  refreshTokenThunk,

} from "../redux/actions/auth.actions";

const API = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
  timeout: 8000,
});

const refreshAPI = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
  timeout: 8000,
});

API.interceptors.request.use(
  (config) => {
    const url = config?.url || "";

   
    if (
      url.includes("auth/login") ||
      url.includes("auth/logout") 
    ) {
      return config; 
    }

    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(errorHandler(error))
);


API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    const url = originalRequest?.url || "";
   console.log(url);
  
    if (
      url.includes("/auth/login") ||
      url.includes("/auth/logout") 
    ) {
      return Promise.reject(errorHandler(error));
    }

    const status = error.response?.status;

    if (status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        console.log("refresh req send");

        const newToken = await store.dispatch(refreshTokenThunk());

        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return API(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("authToken");
        window.location.href = "/";
        return Promise.reject(errorHandler(refreshError));
      }
    }

    return Promise.reject(errorHandler(error));
  }
);




export {refreshAPI, API};
