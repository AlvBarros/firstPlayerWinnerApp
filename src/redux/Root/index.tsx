import { combineReducers } from "redux";
import { AuthReducer } from "../Auth";
import { ConfigReducer } from "../Config";

export const RootReducer = combineReducers({auth: AuthReducer, config: ConfigReducer});