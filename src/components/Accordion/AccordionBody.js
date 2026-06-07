import React, { useContext } from "react";
import AccordionContext from "./AccordionContext";
import "./AccordionStyles.css";

function AccordionBody({ children, ...restProps }) {
  const [accordionShow] = useContext(AccordionContext);

  // Only render the body content when the accordion is expanded
  return accordionShow ? (
    <div className="accordion-body" {...restProps}>
      {children}
    </div>
  ) : null;
}
export default AccordionBody;
