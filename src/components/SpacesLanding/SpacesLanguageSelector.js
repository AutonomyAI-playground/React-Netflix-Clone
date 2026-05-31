import React from "react";
import "./SpacesLandingStyles.css";

function SpacesLanguageSelector({ ...restProps }) {
  return (
    <button type="button" className="spaces-language-selector" {...restProps}>
      <img
        src="./images/misc/us-flag.svg"
        alt="US Flag"
        className="spaces-flag-icon"
      />
      <span>EN</span>
    </button>
  );
}

export default SpacesLanguageSelector;
