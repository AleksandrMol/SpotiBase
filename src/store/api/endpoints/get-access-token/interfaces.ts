export interface IGetAccesTokenBody {
  'grant_type': string,
  'client_id': string,
  'client_secret': string,
}

export interface IGetAccessBodyResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}
