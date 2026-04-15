import { SessionStorageKeysEnum } from "@app/enums/session-storage-keys-enum";
import { getSessionStorage, setSessionStorage } from "@app/tools/session-storage/session-storage";
import { useGetAccesTokenMutation } from "@store/api/access-token/endpoints/get-access-token/get-access-token";
import { RootState } from "@store/store";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";

interface IBaseLayaoutPresenter {
  isLoading: boolean,
}

export const baseLayaoutPresenter = (): IBaseLayaoutPresenter => {
  const { clientID, clientSecret } = useSelector((store: RootState) => store.appConfig);

  const [ getToken, { isLoading, isSuccess, isUninitialized, data } ] = useGetAccesTokenMutation();

  const accessToken = getSessionStorage<string>(SessionStorageKeysEnum.ACCESS_TOKEN);

  const isSendRequest = !accessToken && isUninitialized

  const isAppLoading = isLoading || isSendRequest;

  const accessTokenData = useMemo(() => isSuccess ? data : undefined, [isSuccess]);

  useEffect(() => {
    if (isSendRequest) {
      getToken({
        'grant_type': 'client_credentials',
        'client_id': clientID,
        'client_secret': clientSecret,
      })
    }
  }, [])

  useEffect(() => {
    if (accessTokenData) {
      setSessionStorage(SessionStorageKeysEnum.ACCESS_TOKEN, accessTokenData.access_token);
    }
  }, [accessTokenData])

  return {
    isLoading: isAppLoading,
  }
}
