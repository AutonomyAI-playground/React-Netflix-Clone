import React from "react";
import "./SpacesLandingStyles.css";

function SpacesLogo({ ...restProps }) {
  return (
    <a href="/" className="spaces-logo" {...restProps}>
      <img src="./images/misc/suddenly-spaces-logo.svg" alt="SuddenlySpaces" />
    </a>
  );
}

export default SpacesLogo;
