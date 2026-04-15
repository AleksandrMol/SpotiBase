import { IEntity, IFollowers, IImage } from "../../entities/common/interfaces";

export interface IArtistEntity extends IEntity {
  followers: IFollowers;
  genres: string[];
  images: IImage[];
  popularity: number;
}
