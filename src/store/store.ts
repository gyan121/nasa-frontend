// WARNING: DO NOT DELETE ANY BOILERPLATE COMMENTS IN THIS FILE.
// IF YOU DO, GENERATED REDUCERS WILL NOT BE WIRED UP AUTOMATICALLY.
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { apodReducer } from "./apod/reducer";
import { roverReducer } from "./rover/reducer";

export const store = configureStore({
  reducer: combineReducers({
    apod: apodReducer,
    rover: roverReducer,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
