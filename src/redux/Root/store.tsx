import { createStore } from "redux";
import { RootReducer } from ".";

export const RootStore = createStore(RootReducer);