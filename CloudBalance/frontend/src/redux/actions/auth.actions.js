// auth.actions.js
import { authAPI } from "../../api";

export const loginThunk = (payload) => async (dispatch) => {
  const res = await authAPI.post("auth/login", payload);
  localStorage.setItem("authToken", res.data.authToken);
  dispatch({ type: "LOGIN", payload: res.data });
  return res.data;
};

export const logoutThunk = () => async (dispatch) => {
  try {
      dispatch({ type: "LOGOUT" });
       localStorage.removeItem("authToken");
    await authAPI.post("auth/logout");
    console.log("done")

  } catch (err) {
  
    console.error("Logout API failed", err); 
  } 
};

export const refreshTokenThunk = () => async (dispatch) => {
  const res = await authAPI.post("auth/refresh");
  const token = res.data.newAuthToken;
  localStorage.setItem("authToken", token);
  dispatch({ type: "REFRESH", payload: token });
  return token;
};
