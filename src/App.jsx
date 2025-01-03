import { Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { PATHS } from "./routes";
import React, { useEffect } from "react";
import { Modal } from "antd";

const HomePage = React.lazy(() => import("./pages/HomePage"));

function App() {
  const location = useLocation();

  useEffect(() => {
    Modal.destroyAll();
  }, [location]);
  
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route path={PATHS.NOT_FOUND} element={<div>Not Found</div>} />
    </Routes>
  );
}

export default App;
