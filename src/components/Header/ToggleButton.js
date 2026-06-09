import React from "react";
import "./HeaderStyles.css";

function ToggleButton({ children, isActive, ...restProps }) {
  return (
    <button
      className={isActive ? "toggle-button-active" : "toggle-button"}
      {...restProps}
    >
      {children}
    </button>
  );
}

export default ToggleButton;
