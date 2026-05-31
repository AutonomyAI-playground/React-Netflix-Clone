import React from "react";
import "./SpacesLandingStyles.css";

function SpacesTabs({ children, ...restProps }) {
  return (
    <div className="spaces-tabs" {...restProps}>
      {children}
    </div>
  );
}

export default SpacesTabs;
