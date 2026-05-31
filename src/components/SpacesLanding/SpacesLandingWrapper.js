import React from "react";
import "./SpacesLandingStyles.css";

function SpacesLandingWrapper({ children, ...restProps }) {
  return (
    <div className="spaces-landing-wrapper" {...restProps}>
      {children}
    </div>
  );
}

export default SpacesLandingWrapper;
