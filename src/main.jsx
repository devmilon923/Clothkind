import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ContextProvider } from "./contexts/AuthContext.jsx";
import "./index.css";
import { routes } from "./routes/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={routes}></RouterProvider>
    </ContextProvider>
  </StrictMode>
);
