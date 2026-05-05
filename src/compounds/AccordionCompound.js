import React from "react";
import AccordionWrapper from "../components/Accordion/AccordionWrapper";
import AccordionTitle from "../components/Accordion/AccordionTitle";
import AccordionImage from "../components/Accordion/AccordionImage";
import AccordionItem from "../components/Accordion/AccordionItem";
import AccordionHeader from "../components/Accordion/AccordionHeader";
import AccordionBody from "../components/Accordion/AccordionBody";
import FAQData from "../data/faqs.json";

function AccordionCompound() {
  return (
    <AccordionWrapper>
      <AccordionImage src="../images/users/anime-avatar.jpg" alt="Profile" />
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
