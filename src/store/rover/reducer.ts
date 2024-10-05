import { createReducer } from "@reduxjs/toolkit";
import { fetchRoverImages } from "./action";
import { RoverContainer } from "models/store/apod/container";

const initialState: RoverContainer = {
  data: {
    images: [],
  },
  isLoading: false,
};

export const roverReducer = createReducer(initialState, (apod) => {
  apod.addCase(fetchRoverImages.pending, (state) => {
    state.isLoading = true;
  });
  apod.addCase(fetchRoverImages.fulfilled, (state, { payload }) => {
    state.data.images = payload;
    state.isLoading = false;
  });
  apod.addCase(fetchRoverImages.rejected, (state, { payload }) => {
    state.isLoading = false;
  });
});
