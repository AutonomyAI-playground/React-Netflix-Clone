import React from "react";
import HeaderCompound from "../compounds/HeaderCompound";
import AccordionCompound from "../compounds/AccordionCompound";
import FooterCompound from "../compounds/FooterCompound";

/**
 * AccordionPage displays the FAQ section with header and footer.
 * Composes the three main compounds: HeaderCompound for navigation,
 * AccordionCompound for frequently asked questions, and FooterCompound
 * for site links and legal information.
 */
function AccordionPage() {
  return (
    <>
      <HeaderCompound />
      <AccordionCompound />
      <FooterCompound />
    </>
  );
}

export default AccordionPage;
