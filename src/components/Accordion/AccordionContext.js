import React, { createContext } from "react";

// Item-level context: provides [isOpen, toggleAccordion] to Header and Body components
const AccordionContext = React.createContext();

// Wrapper-level context: manages single-item-open behavior across all accordion items
export const AccordionWrapperContext = createContext();

export default AccordionContext;
