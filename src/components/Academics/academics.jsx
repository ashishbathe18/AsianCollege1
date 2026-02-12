import React from "react";
import { Outlet } from "react-router-dom";

function Academics() {
  return (
    <div>
      <h2>Activities Page</h2>
      <Outlet />
    </div>
  );
}

export default Academics;
