import { createReducer } from "@reduxjs/toolkit";
import { fetchApdo } from "./action";
import { ApodContainer } from "models/store/apod/container";

const initialState: ApodContainer = {
  data: {
    copyright: "",
    date: "",
    explanation: "",
    hdurl: "",
    media_type: "",
    service_version: "",
    title: "",
    url: "",
  },
  isLoading: false,
};

export const apodReducer = createReducer(initialState, (apod) => {
  apod.addCase(fetchApdo.pending, (state, { payload }) => {
    state.isLoading = true;
  });
  apod.addCase(fetchApdo.fulfilled, (state, { payload }) => {
    state.data = payload;
    state.isLoading = false;
  });
  apod.addCase(fetchApdo.rejected, (state, { payload }) => {
    state.isLoading = false;
  });
});
