import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <App/>
      <h1>Olá, mundo (do MAIN!)</h1>
    </>
  </StrictMode>
);
