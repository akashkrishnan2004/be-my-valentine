import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

/* Guaranteed dev fix: always go to Home on refresh */
if (window.location.pathname !== "/") {
  window.location.replace("/");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
