
export interface IPaginated<T> {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: T[];
}

export interface IExternalUrls {
  spotify: string;
}

export interface IImage {
  url: string;
  height: number;
  width: number;
}

export interface IRestrictions {
  reason: string;
}

export interface IFollowers {
  href: string | null;
  total: number;
}

export interface IOwner {
  external_urls: IExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name: string;
}

export interface ITracksRef {
  href: string;
  total: number;
}

export interface IAuthor {
  name: string;
}

export interface ICopyright {
  text: string;
  type: string;
}

export interface IEntity {
  external_urls: IExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
  name: string;
}
