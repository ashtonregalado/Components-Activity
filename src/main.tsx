import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PlayerList from "./components/PlayerList";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PlayerList />
  </StrictMode>
);
