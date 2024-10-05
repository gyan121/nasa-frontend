import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "utils/common";

export const fetchRoverImages = createAsyncThunk(
  "fetchApod",
  async (_, { rejectWithValue }) => {
    try {
      const data = await instance.get("/rover");

      return data.data.photos;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
