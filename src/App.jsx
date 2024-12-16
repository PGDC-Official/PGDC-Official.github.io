import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { PATHS } from "./routes";

function App() {
  return (
    <Routes>
      <Route path={PATHS.HOME} element={<MainLayout />}>
        <Route index element={<div>Home</div>} />
      </Route>

      <Route path={PATHS.NOT_FOUND} element={<div>Not Found</div>} />
    </Routes>
  );
}

export default App;
