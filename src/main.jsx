import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Fallback from "./components/Fallback.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Suspense fallback={<Fallback />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </StrictMode>
);
