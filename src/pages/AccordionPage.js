import React from "react";
import HeaderCompound from "../compounds/HeaderCompound";
import AccordionCompound from "../compounds/AccordionCompound";
import FooterCompound from "../compounds/FooterCompound";

/**
 * AccordionPage displays a Netflix-style landing page with FAQ accordion.
 *
 * Composition:
 * - HeaderCompound: Netflix logo, Sign In button, and hero text
 * - AccordionCompound: Frequently Asked Questions accordion list
 * - FooterCompound: Footer links and contact information
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
