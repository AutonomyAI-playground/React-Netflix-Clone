import React from "react";
import "./SpacesLandingStyles.css";

function SpacesSearchForm({ children, ...restProps }) {
  return (
    <div className="spaces-search-form" {...restProps}>
      {children}
    </div>
  );
}

export default SpacesSearchForm;
