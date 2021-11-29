import React, { useState } from "react";
import "./sidebar.scss";

const Sidebar = () => {
  const [isCollapsed, setIIsCollapsed] = useState(false);
  const handleClick = () => {
    setIIsCollapsed(!isCollapsed);
  };

  return (
    <div id="sidebar" className={isCollapsed ? "closed" : ""}>
      <button id="trigger" onClick={handleClick}>
        {isCollapsed ? ">" : "<"}
      </button>
    </div>
  );
};

export default React.memo(Sidebar);
