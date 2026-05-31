import React from "react";
import "./SpacesLandingStyles.css";

function SpacesTab({ children, active = false, ...restProps }) {
  const className = active ? "spaces-tab spaces-tab-active" : "spaces-tab";

  return (
    <button type="button" className={className} {...restProps}>
      {children}
    </button>
  );
}

export default SpacesTab;
