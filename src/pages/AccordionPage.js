import React from "react";
import HeaderCompound from "../compounds/HeaderCompound";
import AccordionCompound from "../compounds/AccordionCompound";
import FooterCompound from "../compounds/FooterCompound";
import Seperator from "../components/Seperator/Seperator";

/**
 * AccordionPage displays the FAQ section with header, accordion content, and footer.
 * This page uses compound components to compose the layout - each compound encapsulates
 * the styling and structure of a major section.
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
