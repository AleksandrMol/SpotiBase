import { SnackbarProvider } from "notistack";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useGetAccesTokenMutation } from "@store/api/endpoints/get-access-token/get-access-token";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";

import "./index.scss";

/**
 * Корневой компонент
 * @returns JSX
 */
function App(): JSX.Element {
  const { clientID, clientSecret } = useSelector((store: RootState) => store.appConfig);

  const [ getToken ] = useGetAccesTokenMutation();

  useEffect(() => {
    getToken({
      'grant_type': 'client_credentials',
      'client_id': clientID,
      'client_secret': clientSecret,
    })
  }, [])

  return (
    <SnackbarProvider maxSnack={ 3 } autoHideDuration={ 2000 }>
      <RouterProvider router={ router }/>
    </SnackbarProvider>
  );
}

export default App;
