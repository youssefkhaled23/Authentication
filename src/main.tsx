// React Router
import ReactDOM from "react-dom/client";
import AppRouter from "./Router/AppRouter.tsx";
// Style
import "bootstrap/dist/css/bootstrap.min.css";
import "./GlobalStyle/GlobalStyle.css";

// Redux Store
import { persistor, store } from "./store/index.ts";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// Axios
import "./API/axios-Global.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppRouter />
    </PersistGate>
  </Provider>
);
