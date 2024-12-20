import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { FloatButton } from "antd";


function MainLayout() {
  return (
    <div className="main-layout">
      <Header />
      <main className="main-content-container">
        <Outlet />
      </main>
      <Footer />

      <FloatButton.BackTop />
    </div>
  );
}

export default MainLayout;
