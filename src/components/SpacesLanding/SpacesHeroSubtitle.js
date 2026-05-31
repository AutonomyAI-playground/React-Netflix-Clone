import React from "react";
import "./SpacesLandingStyles.css";

function SpacesHeroSubtitle({ children, ...restProps }) {
  return (
    <p className="spaces-hero-subtitle" {...restProps}>
      {children}
    </p>
  );
}

export default SpacesHeroSubtitle;
