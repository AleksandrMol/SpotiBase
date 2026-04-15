import { IEntity, IImage, IRestrictions } from "../common/interfaces";

export interface IAlbumEntity extends IEntity {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  images: IImage[];
  release_date: string;
  release_date_precision: string;
  restrictions?: IRestrictions;
  artists: IEntity[];
}
