import { SnackbarProvider } from "notistack";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

import "./index.scss";

function App(): JSX.Element {
  return (
    <SnackbarProvider maxSnack={ 3 } autoHideDuration={ 2000 }>
      <RouterProvider router={ router }/>
    </SnackbarProvider>
  );
}

export default App;
