import { combineReducers } from "redux";
import {authReducer} from "../reducers/auth.reducers";
import { userReducer } from "../reducers/user.reducers";
import { accountsReducer } from "../reducers/account.reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  user : userReducer,
  accounts : accountsReducer
});

export default rootReducers;
