import React from "react";
import AccordionWrapper from "../components/Accordion/AccordionWrapper";
import AccordionTitle from "../components/Accordion/AccordionTitle";
import AccordionItem from "../components/Accordion/AccordionItem";
import AccordionHeader from "../components/Accordion/AccordionHeader";
import AccordionBody from "../components/Accordion/AccordionBody";
import FAQData from "../data/faqs.json";

/**
 * AccordionCompound renders the FAQ section with collapsible accordion items.
 * Each item can be expanded/collapsed independently to show/hide the answer.
 */
function AccordionCompound() {
  return (
    <AccordionWrapper>
      <AccordionTitle>Frequently Asked Questions</AccordionTitle>
      {FAQData.map((item) => (
        <AccordionItem key={item.id}>
          <AccordionHeader>{item.header}</AccordionHeader>
          <AccordionBody>{item.body}</AccordionBody>
        </AccordionItem>
      ))}
    </AccordionWrapper>
  );
}

export default AccordionCompound;
