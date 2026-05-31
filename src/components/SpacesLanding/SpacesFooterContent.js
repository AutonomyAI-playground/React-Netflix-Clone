import React from "react";
import "./SpacesLandingStyles.css";

function SpacesFooterContent({ children, ...restProps }) {
  return (
    <div className="spaces-footer-content" {...restProps}>
      {children}
    </div>
  );
}

export default SpacesFooterContent;
