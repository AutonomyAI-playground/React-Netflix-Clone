import React from "react";
import "./SpacesLandingStyles.css";

function SpacesHero({ children, ...restProps }) {
  return (
    <div className="spaces-hero" {...restProps}>
      {children}
    </div>
  );
}

export default SpacesHero;
