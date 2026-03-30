import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "@app/App";
import { store } from "@store/store";
import { setAppConfig } from "@store/modules/configs/async/set-app-config";
import { Provider } from "react-redux";

import "./index.scss";
import "./output.css"

/**
 * Функция - инициализатор приложения
 */
const bootstrap = async (): Promise<void> => {
  try {
    await store.dispatch(setAppConfig()).unwrap();

    const root = ReactDOM.createRoot(
      document.getElementById('root') as HTMLElement
    )

    root.render(
      <StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </StrictMode>
    )
  } catch (err) {
    console.error('App init failed', err);

    const root = ReactDOM.createRoot(document.getElementById('root')!);
    root.render(<div>Failed to start app</div>);
  }
}

bootstrap();
