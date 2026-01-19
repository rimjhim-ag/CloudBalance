// accountsReducer.js
import { SET_ACCOUNTS } from "../actions/account.actions";

const initialState = {
  accounts: [],
  selectedAccount: null,
  loading: false,
  error: null,
};

export const accountsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACCOUNTS:
      return {
        ...state,
        accounts: action.payload.data,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    case "SET_SELECTED_ACCOUNT":
      return { ...state, selectedAccount: action.payload };
    default:
      return state;
  }
};
