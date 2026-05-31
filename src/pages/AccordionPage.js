import React from "react";
import HeaderCompound from "../compounds/HeaderCompound";
import Seperator from "../components/Seperator/Seperator";
import AccordionCompound from "../compounds/AccordionCompound";
import FooterCompound from "../compounds/FooterCompound";

/**
 * AccordionPage displays a standalone FAQ page with accordion components.
 * Accessible at /faq route, providing a dedicated view of frequently asked questions.
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
