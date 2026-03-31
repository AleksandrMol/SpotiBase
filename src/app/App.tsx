import { SnackbarProvider } from "notistack";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

import "./index.scss";

/**
 * Корневой компонент
 * @returns JSX
 */
function App(): JSX.Element {
  return (
    <SnackbarProvider maxSnack={ 3 } autoHideDuration={ 2000 }>
      <RouterProvider router={ router }/>
    </SnackbarProvider>
  );
}

export default App;
