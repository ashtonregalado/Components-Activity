import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import EmployeeList from "./components/employeeList.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <EmployeeList></EmployeeList>
  </StrictMode>
);
