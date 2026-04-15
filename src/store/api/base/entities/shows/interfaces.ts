import { IEntity, ICopyright, IImage } from "../common/interfaces";

export interface IShowEntity extends IEntity {
  available_markets: string[];
  copyrights: ICopyright[];
  description: string;
  html_description: string;
  explicit: boolean;
  images: IImage[];
  is_externally_hosted: boolean;
  languages: string[];
  media_type: string;
  publisher: string;
  total_episodes: number;
}
