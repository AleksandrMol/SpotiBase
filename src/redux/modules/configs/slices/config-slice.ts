import { createSlice } from "@reduxjs/toolkit";
import { appConfigInitialState } from "../initial-states/app-config-initial-state";
import { setAppConfig } from "../async/set-app-config";

export const configSlice = createSlice({
  name: 'appConfig',
  initialState: appConfigInitialState,
  reducers:{},
  extraReducers: (builder) => {
    builder.addCase(setAppConfig.fulfilled, (_state, action) => {
      return {
        ...action.payload
      }
    })
  }
})

export const configReducer = configSlice.reducer;

export const configActions = configSlice.actions;
