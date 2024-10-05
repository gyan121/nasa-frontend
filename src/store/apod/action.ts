import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "utils/common";

export const fetchApdo = createAsyncThunk(
  "fetchApod",
  async (_, { rejectWithValue }) => {
    try {
      const data = await instance.get("/apdo");

      return data.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
