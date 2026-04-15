import { ReducerNamesEnum } from '@app/enums/reducer-names-enum';
import { SessionStorageKeysEnum } from '@app/enums/session-storage-keys-enum';
import { getSessionStorage } from '@app/tools/session-storage/session-storage';
import { createApi, FetchArgs, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '@store/store';

const rawBaseQuery = fetchBaseQuery();

const dynamicBaseQuery: typeof rawBaseQuery = async (args, api, extraOptions) => {
  const accessToken = getSessionStorage<string>(SessionStorageKeysEnum.ACCESS_TOKEN);

  const state = api.getState() as RootState;

  const baseUrl = state.appConfig.apiURL;

  const headers: FetchArgs['headers'] = {
    Authorization: accessToken ? `Bearer ${accessToken}` : undefined,
  }

  const adjustedArgs: string | FetchArgs =
    typeof args === 'string'
      ? {
          url: baseUrl + args,
          headers,
        }
      : {
          ...args,
          url: baseUrl + args.url,
          headers: {
            ...args.headers,
            ...headers,
          },
        };


  return rawBaseQuery(adjustedArgs, api, extraOptions);
};

export const baseApi = createApi({
  reducerPath: ReducerNamesEnum.API,
  baseQuery: dynamicBaseQuery,
  endpoints: () => ({})
});

export const apiReducer = baseApi.reducer
