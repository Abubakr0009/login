import { createStore } from "redux";
import { counterReducer } from "./reduser";

export const store = createStore(counterReducer, );

