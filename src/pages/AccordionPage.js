import React from "react";
import AccordionCompound from "../compounds/AccordionCompound";
import FooterCompound from "../compounds/FooterCompound";

/**
 * AccordionPage displays the FAQ accordion section with footer.
 * Used as a standalone demo page for the accordion component.
 */
function AccordionPage() {
  return (
    <>
      <AccordionCompound />
      <FooterCompound />
    </>
  );
}

export default AccordionPage;
