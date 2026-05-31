import React from "react";
import HeaderCompound from "../compounds/HeaderCompound";
import AccordionCompound from "../compounds/AccordionCompound";
import Seperator from "../components/Seperator/Seperator";
import FooterCompound from "../compounds/FooterCompound";

/**
 * AccordionPage - Main landing page featuring the FAQ accordion section.
 *
 * Displays the Netflix-style landing page with header, FAQ accordion, and footer.
 * Separators provide visual spacing between major sections.
 */
function AccordionPage() {
  return (
    <>
      <HeaderCompound />
      <Seperator />
      <AccordionCompound />
      <Seperator />
      <FooterCompound />
    </>
  );
}

export default AccordionPage;
