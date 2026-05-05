import React, { useContext } from "react";
import AccordionContext, { AccordionWrapperContext } from "./AccordionContext";
import "./AccordionStyles.css";

function AccordionItem({ id, children, ...restProps }) {
  const { activeItemId, setActiveItemId } = useContext(AccordionWrapperContext);
  const isOpen = activeItemId === id;

  // Toggle this item: close if already open, open and close others if closed
  function toggleAccordion() {
    setActiveItemId(isOpen ? null : id);
  }

  return (
    <AccordionContext.Provider value={[isOpen, toggleAccordion]} {...restProps}>
      <div className="accordion-item">{children}</div>
    </AccordionContext.Provider>
  );
}

export default AccordionItem;
