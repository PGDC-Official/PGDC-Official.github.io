import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function MainLayout() {
  return (
    <>
      <Header />
      <div>MainLayout</div>
      <Outlet />
    </>
  );
}

export default MainLayout;
