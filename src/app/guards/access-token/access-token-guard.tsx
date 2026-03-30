import { post } from "@app/axios/base/requests";
import { SessionStorageKeysEnum } from "@app/enums/session-storage-keys-enum";
import { LoaderComponent } from "@app/modules/loader/view/loader-component";
import { getSessionStorage } from "@app/tools/session-storage/session-storage";
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom";

export const AccessTokenGuard = (): JSX.Element => {
  // const [isAccessToken, setIsAccessToken] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAccessToken = async (): Promise<void> => {
      if (getSessionStorage<string>(SessionStorageKeysEnum.ACCESS_TOKEN)) {
        setIsLoading(true);

        return;
      }

      post('token', {
      'grant_type': 'client_credentials',
      'client_id': 'aa3577e3763047c18c7c0acc3e4fcd91',
      'client_secret': '7e68841ea40041adb631d8b6b4370cba',
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).then(() => {
      })
    }

    getAccessToken();
  }, [])

  if (isLoading) {
    return <LoaderComponent />
  }

  return <Outlet />
}
