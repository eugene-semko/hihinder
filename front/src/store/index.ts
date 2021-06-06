import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./postReducer";

const reducers = combineReducers({
  postReducer: postReducer.reducer,
});

export const store = configureStore({ reducer: reducers });
export type StateType = ReturnType<typeof reducers>;
