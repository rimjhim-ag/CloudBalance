
import {API, refreshAPI} from "../../api";



export const loginThunk = (payload) => async (dispatch) => {
  const res = await API.post("auth/login", payload)
  localStorage.setItem("authToken", res.data.authToken);
  dispatch({ type: "LOGIN", payload: res.data.authToken });

  return res.data;
};

export const logoutThunk = () => {
  return  async (dispatch) => {
   await API.post("auth/logout")
    localStorage.removeItem("authToken");
    dispatch({ type: "LOGOUT" });
  };
};


export const refreshTokenThunk = () => {
  return async (dispatch) => {
    const res = await refreshAPI.post("auth/refresh");
    console.log("refresj" + res.data.newAuthToken)
    const token = res.data.newAuthToken;

    localStorage.setItem("authToken", token);

    dispatch({
      type: "REFRESH",
      payload: token,
    });

    return token; 
  };
};


