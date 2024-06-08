import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page2 from "./Page/Page2.jsx";
import { ThemeContext } from "./context/ThemeContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Page2",
    element: <Page2 />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContext>
      <RouterProvider router={router} />
    </ThemeContext>
  </React.StrictMode>
);
