import { createSlice } from "@reduxjs/toolkit";
import { gallertListInitial } from "../initial-states/gallery-initial-state";

export const galleryListSlice = createSlice({
  name: 'galleryList',
  initialState: gallertListInitial,
  reducers: {
    getList: () => {
      console.log('getList');
    }
  }
});

export const galleryReducer = galleryListSlice.reducer;

export const galleryActions = galleryListSlice.actions;
