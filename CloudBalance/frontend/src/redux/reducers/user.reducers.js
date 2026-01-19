const initialState = {
  userId : null,
  username: null,
  role: null,
  email: null,
  isLoading: false,
  isFetched: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_FETCH_USER_START":
    
      return { ...state, isLoading: true };

    case "AUTH_SET_CURRENT_USER":
      
      return {
        ...state,
        userId : action.payload.usersId,
        username: action.payload.username,
        role: action.payload.role,
        email: action.payload.email,
        isLoading: false,
        isFetched: true,
      };

    case "AUTH_FETCH_USER_FAILURE":
      return {
        ...state,
        isLoading: false,
        isFetched: true, 
      };

    case "LOGOUT":
      return initialState;

    default:
      return state;
  }
};
