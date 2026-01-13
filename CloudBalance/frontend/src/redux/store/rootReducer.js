import { combineReducers } from "redux";
import {authReducer} from "../reducers/auth.reducers";
import { userReducer } from "../reducers/user.reducers";

const rootReducers = combineReducers({
  auth: authReducer,
  user : userReducer,
});

export default rootReducers;
