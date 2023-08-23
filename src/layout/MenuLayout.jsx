import React from "react";
import { Outlet } from "react-router-dom";

function MenuLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default MenuLayout;
