import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./router/index.jsx";
import 'atropos/css'
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
