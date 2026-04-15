import { IGetAccessBodyResponse, IGetAccesTokenBody } from "./interfaces";
import { accountsApi } from "@store/api/access-token/access-token";

export const accessTokenApi = accountsApi.injectEndpoints({
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
