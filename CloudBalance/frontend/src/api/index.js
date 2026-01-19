
// API.js
import axios from "axios";
import store from "../redux/store";
import { refreshTokenThunk, logoutThunk } from "../redux/actions/auth.actions";


export const API = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
  timeout: 8000,
});

export const authAPI = axios.create({
  baseURL: "http://localhost:8080/api",
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
  timeout: 8000,
});


API.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

API.interceptors.response.use(
  (res) => res,
  async (error) => {
    const status = error.response?.status;
    if (status === 401 && !error.config._retry) {
      error.config._retry = true;
      try {
     
        
        const newToken = await store.dispatch(refreshTokenThunk());
        error.config.headers.Authorization = `Bearer ${newToken}`;
        return API(error.config);
      } catch (refreshError) {
        await store.dispatch(logoutThunk());
       
        return Promise.reject(refreshError);
      }
    }

   
    return Promise.reject(error);
  }
);



