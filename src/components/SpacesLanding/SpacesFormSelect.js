import React from "react";
import "./SpacesLandingStyles.css";

function SpacesFormSelect({ label, children, ...restProps }) {
  const selectId = restProps.id || `select-${label ? label.toLowerCase().replace(/\s+/g, '-') : 'field'}`;
  return (
    <div className="spaces-form-group">
      {label && <label htmlFor={selectId} className="spaces-form-label">{label}</label>}
      <select id={selectId} className="spaces-form-select" {...restProps}>
        {children}
      </select>
    </div>
  );
}

export default SpacesFormSelect;
