import { ReducerNamesEnum } from '@app/enums/reducer-names-enum';
import { createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '@store/store';

const rawBaseQuery = fetchBaseQuery();

const dynamicBaseQuery: typeof rawBaseQuery = async (args, api, extraOptions) => {
  const state = api.getState() as RootState;

  const baseUrl = state.appConfig.accountsURL;

  const adjustedArgs: string | FetchArgs =
    typeof args === 'string'
      ? {
        url: baseUrl + args
      }
      : {
        ...args,
        url: baseUrl + args.url
      };

  return rawBaseQuery(adjustedArgs, api, extraOptions);
};

export const accountsApi = createApi({
  reducerPath: ReducerNamesEnum.API,
  baseQuery: dynamicBaseQuery,
  endpoints: () => ({})
});

export const accApiReducer = accountsApi.reducer
