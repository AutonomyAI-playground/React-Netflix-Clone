import React from "react";
import "./SpacesLandingStyles.css";

function SpacesFormInput({ label, ...restProps }) {
  const inputId = restProps.id || `input-${label ? label.toLowerCase().replace(/\s+/g, '-') : 'field'}`;
  return (
    <div className="spaces-form-group">
      {label && <label htmlFor={inputId} className="spaces-form-label">{label}</label>}
      <input id={inputId} className="spaces-form-input" {...restProps} />
    </div>
  );
}

export default SpacesFormInput;
