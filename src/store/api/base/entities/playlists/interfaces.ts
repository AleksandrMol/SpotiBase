import { IEntity, IImage, IOwner, ITracksRef } from "../common/interfaces";

export interface IPlaylistEntity extends IEntity {
  collaborative: boolean;
  description: string;
  images: IImage[];
  owner: IOwner;
  public: boolean;
  snapshot_id: string;
  tracks: ITracksRef;
}