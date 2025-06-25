import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./ui/components/App/App";
import "@fontsource-variable/rubik/index.css";
import "./ui/styles/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
