import { IEntity, IAuthor, ICopyright, IImage } from "../common/interfaces";

export interface IAudiobookEntity extends IEntity {
  authors: IAuthor[];
  available_markets: string[];
  copyrights: ICopyright[];
  description: string;
  html_description: string;
  edition: string;
  explicit: boolean;
  images: IImage[];
  languages: string[];
  media_type: string;
  narrators: IAuthor[];
  publisher: string;
  total_chapters: number;
}
