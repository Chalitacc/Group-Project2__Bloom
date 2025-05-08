import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import styles from "./main.module.css";
import "./style/reset.css";
import "./style/variables.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes.jsx";
import { PlantListProvider } from "./context/PlantListContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlantListProvider>
      <RouterProvider router={router}></RouterProvider>
    </PlantListProvider>
  </StrictMode>
);
