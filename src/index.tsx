import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import Router from "./Router";
import ThemeProvider from "./context/themeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
