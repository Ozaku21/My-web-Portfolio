import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/My-Portf.github.io">
      <App />
    </BrowserRouter>
  </StrictMode>
);