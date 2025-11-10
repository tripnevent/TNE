import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Standard React application bootstrap for a pure frontend project.
// All backend-related tRPC and authentication logic has been removed.
createRoot(document.getElementById("root")!).render(
  <App />
);
