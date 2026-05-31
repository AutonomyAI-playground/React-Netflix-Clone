import React from "react";
import "./SpacesLandingStyles.css";

function SpacesFooter({ children, ...restProps }) {
  return (
    <footer className="spaces-footer" {...restProps}>
      {children}
    </footer>
  );
}

export default SpacesFooter;
