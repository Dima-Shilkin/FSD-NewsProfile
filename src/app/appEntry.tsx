import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/shared/index.css";
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import AppRouter from "./AppRouter.tsx";
import { store } from "./appStore.ts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StrictMode>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </StrictMode>
  </Provider>
);
