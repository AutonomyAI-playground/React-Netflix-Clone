import React from "react";
import "./SpacesLandingStyles.css";

function SpacesFooterLink({ children, ...restProps }) {
  return (
    <a
      className="spaces-footer-link"
      href="#"
      onClick={(e) => e.preventDefault()}
      {...restProps}
    >
      {children}
    </a>
  );
}

export default SpacesFooterLink;
