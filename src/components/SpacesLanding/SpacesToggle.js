import React from "react";
import "./SpacesLandingStyles.css";

function SpacesToggle({ children, ...restProps }) {
  return (
    <div className="spaces-toggle-group" {...restProps}>
      {children}
    </div>
  );
}

export default SpacesToggle;
