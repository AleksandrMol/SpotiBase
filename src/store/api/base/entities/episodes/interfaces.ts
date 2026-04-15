import { IEntity, IImage, IRestrictions } from "../common/interfaces";

export interface IEpisodeEntity extends IEntity {
  audio_preview_url: string;
  description: string;
  html_description: string;
  duration_ms: number;
  explicit: boolean;
  images: IImage[];
  is_externally_hosted: boolean;
  is_playable: boolean;
  language: string;
  languages: string[];
  release_date: string;
  release_date_precision: string;
  resume_point: {
    fully_played: boolean;
    resume_position_ms: number;
  };
  restrictions?: IRestrictions;
}
