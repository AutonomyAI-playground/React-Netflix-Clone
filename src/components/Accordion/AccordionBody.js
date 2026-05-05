import React, { useContext } from "react";
import AccordionContext from "./AccordionContext";
import "./AccordionStyles.css";

function AccordionBody({ children, id, ...restProps }) {
  const [isOpen] = useContext(AccordionContext);

  return (
    <div
      className={`accordion-body ${
        isOpen ? "accordion-body-open" : "accordion-body-closed"
      }`}
      id={`accordion-body-${id}`}
      role="region"
      aria-labelledby={`accordion-header-${id}`}
      {...restProps}
    >
      {children}
    </div>
  );
}
export default AccordionBody;
