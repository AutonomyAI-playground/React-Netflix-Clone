import React from "react";
import "./SpacesLandingStyles.css";

function SpacesToggleButton({ children, active = false, ...restProps }) {
  const className = active
    ? "spaces-toggle-button spaces-toggle-button-active"
    : "spaces-toggle-button";

  return (
    <button type="button" className={className} {...restProps}>
      {children}
    </button>
  );
}

export default SpacesToggleButton;
