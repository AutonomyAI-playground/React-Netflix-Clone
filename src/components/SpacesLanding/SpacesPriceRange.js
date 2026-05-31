import React from "react";
import "./SpacesLandingStyles.css";

function SpacesPriceRange({
  label,
  minValue = "500",
  maxValue = "2500",
  ...restProps
}) {
  const rangeId = `price-range-${label ? label.toLowerCase().replace(/\s+/g, '-') : 'field'}`;
  return (
    <div className="spaces-form-group">
      {label && <label htmlFor={rangeId} className="spaces-form-label">{label}</label>}
      <div id={rangeId} className="spaces-price-range" {...restProps}>
        <input
          type="text"
          className="spaces-price-input"
          defaultValue={`$${minValue}`}
        />
        <span className="spaces-price-separator">-</span>
        <input
          type="text"
          className="spaces-price-input"
          defaultValue={`$${maxValue}`}
        />
      </div>
    </div>
  );
}

export default SpacesPriceRange;
