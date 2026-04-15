import { baseApi } from "@store/api/base/base-api";
import { ISearchRequestBody, ISearchResponse } from "./interfaces";

export const searchApiEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    search: builder.query<ISearchResponse, ISearchRequestBody>({
      query: (body) => ({
        url: `search/`,
        body
      }),
    })
  }),
});

export const { useLazySearchQuery } = searchApiEndpoints;
