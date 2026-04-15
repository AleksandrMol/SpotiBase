import { IAlbumEntity } from "@store/api/base/entities/albums/interfaces";
import { IArtistEntity } from "@store/api/base/entities/artists/interface";
import { IAudiobookEntity } from "@store/api/base/entities/audiobooks/interfaces";
import { IPaginated } from "@store/api/base/entities/common/interfaces";
import { IEpisodeEntity } from "@store/api/base/entities/episodes/interfaces";
import { IPlaylistEntity } from "@store/api/base/entities/playlists/interfaces";
import { IShowEntity } from "@store/api/base/entities/shows/interfaces";
import { ITrackEntity } from "@store/api/base/entities/tracks/interfaces";

export interface ISearchRequestBody {
  q: string;
  type: string[];
  market: string;
  limit: number;
  offset: number;
  include_external: string;
}

export interface ISearchResponse {
  tracks: IPaginated<ITrackEntity>;
  artists: IPaginated<IArtistEntity>;
  albums: IPaginated<IAlbumEntity>;
  playlists: IPaginated<IPlaylistEntity>;
  shows: IPaginated<IShowEntity>;
  episodes: IPaginated<IEpisodeEntity>;
  audiobooks: IPaginated<IAudiobookEntity>;
}
