import { createSlice } from "@reduxjs/toolkit";
import { gallertListInitial } from "../initial-states/gallery-initial-state";
import { ReducerNamesEnum } from "@app/enums/reducer-names-enum";

export const galleryListSlice = createSlice({
  name: ReducerNamesEnum.GALLERY_LIST,
  initialState: gallertListInitial,
  reducers: {
    getList: () => {}
  }
});

export const galleryReducer = galleryListSlice.reducer;

export const galleryActions = galleryListSlice.actions;
