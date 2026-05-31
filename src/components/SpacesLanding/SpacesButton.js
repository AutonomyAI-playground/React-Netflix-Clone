import React from "react";
import "./SpacesLandingStyles.css";

function SpacesButton({ children, variant = "default", ...restProps }) {
  const className =
    variant === "primary" ? "spaces-button-primary" : "spaces-button";

  return (
    <button type="button" className={className} {...restProps}>
      {children}
    </button>
  );
}

export default SpacesButton;
