import React, { useContext } from "react";
import AccordionContext from "./AccordionContext";
import "./AccordionStyles.css";

function AccordionHeader({ children, id, ...restProps }) {
  const [isOpen, toggleAccordion] = useContext(AccordionContext);

  function handleKeyDown(event) {
    // Space and Enter keys toggle the accordion (matches button behavior)
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleAccordion();
    }
  }

  return (
    <div
      className="accordion-header"
      id={`accordion-header-${id}`}
      onClick={toggleAccordion}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-expanded={isOpen}
      aria-controls={`accordion-body-${id}`}
      {...restProps}
    >
      {children}
      {isOpen ? (
        <img
          className="accordion-image"
          src="../images/icons/close-slim.png"
          alt="Close"
        />
      ) : (
        <img
          className="accordion-image"
          src="../images/icons/add.png"
          alt="Open"
        />
      )}
    </div>
  );
}

export default AccordionHeader;
