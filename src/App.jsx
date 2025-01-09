import {
  Route,
  Routes,
  ScrollRestoration,
  useLocation,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { PATHS } from "./routes";
import React, { useEffect } from "react";
import { Modal } from "antd";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const PartnershipInfoPage = React.lazy(() =>
  import("./pages/PartnershipInfoPage")
);
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    }); // Scroll to top on route change
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();

  useEffect(() => {
    Modal.destroyAll();
  }, [location]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path={PATHS.HOME} element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path={PATHS.PARTNERSHIP_INFO}
            element={<PartnershipInfoPage />}
          />
        </Route>

        <Route path={PATHS.NOT_FOUND} element={<div>Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
