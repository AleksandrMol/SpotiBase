
import { baseApi } from "@store/api/base/base-api";
import { IGetAccessBodyResponse, IGetAccesTokenBody } from "./interfaces";

export const accessTokenApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAccesToken: builder.mutation<IGetAccessBodyResponse, IGetAccesTokenBody>({
      query: (body) => {
        return {
          url: 'token',
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            ...body
          }),
        }
      },
    })
  }),
});

export const { useGetAccesTokenMutation } = accessTokenApi;
