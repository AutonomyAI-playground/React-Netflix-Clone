import React from "react";
import "./AccordionStyles.css";

/**
 * AccordionImage renders a circular image above the accordion.
 * Typically used for profile pictures or decorative imagery with the FAQ section.
 */
function AccordionImage({ src, alt, ...restProps }) {
  return (
    <img
      className="accordion-circle-image"
      src={src}
      alt={alt}
      {...restProps}
    />
  );
}

export default AccordionImage;
