const initialState = {
  token: localStorage.getItem("authToken") || null,
  
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(action.payload);
      return {  token: action.payload };
    case "LOGOUT":
      return { token: null };
    case "REFRESH":
      return { token: action.payload };
    default:
      return state;
  }
};
