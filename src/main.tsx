import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./scss/style.scss";

// import { initializeAPiService } from "./services/api_service.ts";

// initializeAPiService();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
