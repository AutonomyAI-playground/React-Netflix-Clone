import React from "react";
import "./SpacesLandingStyles.css";

function SpacesNavBar({ children, ...restProps }) {
  return (
    <nav className="spaces-navbar" {...restProps}>
      {children}
    </nav>
  );
}

export default SpacesNavBar;
