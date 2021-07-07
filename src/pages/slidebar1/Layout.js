import React, { useState } from "react";
import Aside from "./Aside";

function Layout() {
  const [toggled, setToggled] = useState(false);

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div className={`app  ${toggled ? "toggled" : ""}`}>
      <Aside toggled={toggled} handleToggleSidebar={handleToggleSidebar} />
    </div>
  );
}

export default Layout;
