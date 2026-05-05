import React, { useState } from "react";
import { AccordionWrapperContext } from "./AccordionContext";
import "./AccordionStyles.css";

function AccordionWrapper({ children, ...restProps }) {
  // Track which accordion item is currently open (null = all closed)
  const [activeItemId, setActiveItemId] = useState(null);

  return (
    <AccordionWrapperContext.Provider value={{ activeItemId, setActiveItemId }}>
      <section className="accordion-wrapper" {...restProps}>
        {children}
      </section>
    </AccordionWrapperContext.Provider>
  );
}

export default AccordionWrapper;
