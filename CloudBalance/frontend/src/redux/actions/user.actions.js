import {API} from "../../api";

export const fetchCurrentUser = () => async (dispatch) => {
  dispatch({ type: "AUTH_FETCH_USER_START" });

  try {
    const res = await API.get("user/profile");
    dispatch({
      type: "AUTH_SET_CURRENT_USER",
      payload: res.data,
    });
    return res.data;
  } catch (err) {
    
    dispatch({ type: "AUTH_FETCH_USER_FAILURE" });
    throw err;
  }
};
