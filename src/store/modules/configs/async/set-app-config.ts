import { createAsyncThunk } from "@reduxjs/toolkit";
import { appConfigInitialState } from "../initial-states/app-config-initial-state";
import { IAppConfig } from "../interfaces/app-config";

export const setAppConfig = createAsyncThunk(
  'appConfig/setConfig',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('/configs/config.json');
      const json = await response.json() as IAppConfig | undefined;
      if (json) {
        return json
      }
  
      return appConfigInitialState;
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)
