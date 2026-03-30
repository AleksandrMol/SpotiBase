import { ReducerNamesEnum } from '@app/enums/reducer-names-enum';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '@store/store';

const rawBaseQuery = fetchBaseQuery();

const dynamicBaseQuery: typeof rawBaseQuery = async (args, api, extraOptions) => {
  const state = api.getState() as RootState;

  const baseUrl = state.appConfig.baseURL;

  const adjustedArgs =
    typeof args === 'string'
      ? { url: baseUrl + args }
      : { ...args, url: baseUrl + args.url };

  return rawBaseQuery(adjustedArgs, api, extraOptions);
};

export const baseApi = createApi({
  reducerPath: ReducerNamesEnum.API,
  baseQuery: dynamicBaseQuery,
  endpoints: () => ({})
});

export const apiReducer = baseApi.reducer
