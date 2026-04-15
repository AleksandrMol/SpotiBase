import { baseApi } from "@store/api/base/base-api";
import { IArtistEntity } from "../../entities/artists/interface";

export const artistsApiEndpoints = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getArtist: builder.query<IArtistEntity, string>({
      query: (id) => `artists/${id}`,
    })
  }),
});

export const { useGetArtistQuery } = artistsApiEndpoints;
