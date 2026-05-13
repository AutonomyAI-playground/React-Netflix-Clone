import React from "react";
import "./AvatarStyles.css";

/**
 * AvatarImage renders the circular avatar image.
 * Provides a default alt text if none is specified for accessibility.
 */
function AvatarImage({ src, alt, ...restProps }) {
  return (
    <img
      className="avatar-image"
      src={src}
      alt={alt || "Avatar"}
      {...restProps}
    />
  );
}

export default AvatarImage;
