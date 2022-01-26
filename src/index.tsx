import React from "react";
import ReactDOM from "react-dom";
import { AuthProvider } from "./context/Authentication";
import Router from "./Routes";

import "./styles/global.scss";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
