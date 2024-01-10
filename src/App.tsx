import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { CssVarsProvider } from "@mui/joy";
import CustomBreadcrumbs from "./components/Breadcrumbs";

function App() {
  return (
    <CssVarsProvider>
      <div className="flex flex-col gap-2">
        <Navbar />
        <CustomBreadcrumbs />
        <Outlet />
      </div>
    </CssVarsProvider>
  );
}

export default App;
