import React from "react";
import "./AvatarStyles.css";

/**
 * AvatarWrapper provides a circular container with gradient border.
 * The gradient creates a modern, visually distinct border effect.
 */
function AvatarWrapper({ children, ...restProps }) {
  return (
    <div className="avatar-wrapper" {...restProps}>
      {children}
    </div>
  );
}

export default AvatarWrapper;
