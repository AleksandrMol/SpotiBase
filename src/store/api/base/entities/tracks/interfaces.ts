import { IAlbumEntity } from "../albums/interfaces";
import { IEntity } from "../common/interfaces";

export interface ITrackEntity extends IEntity {
  album: IAlbumEntity;
  artists: IEntity[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
    ean: string;
    upc: string;
  };
  is_local: boolean;
  is_playable: boolean;
  track_number: number;
}