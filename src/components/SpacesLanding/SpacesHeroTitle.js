import React from "react";
import "./SpacesLandingStyles.css";

function SpacesHeroTitle({ children, ...restProps }) {
  return (
    <h1 className="spaces-hero-title" {...restProps}>
      {children}
    </h1>
  );
}

export default SpacesHeroTitle;
