import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CurrencyProvider } from "./contexts/CurrencyContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CurrencyProvider>
      <App />
    </CurrencyProvider>
  </React.StrictMode>
);
