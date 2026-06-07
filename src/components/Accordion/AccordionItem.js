import React, { useState } from "react";
import AccordionContext from "./AccordionContext";
import "./AccordionStyles.css";

function AccordionItem({ children, ...restProps }) {
  // Each accordion item maintains its own expanded/collapsed state
  const [accordionShow, setAccordionShow] = useState(false);
  return (
    <AccordionContext.Provider
      value={[accordionShow, setAccordionShow]}
      {...restProps}
    >
      <div className="accordion-item">{children}</div>
    </AccordionContext.Provider>
  );
}

export default AccordionItem;
