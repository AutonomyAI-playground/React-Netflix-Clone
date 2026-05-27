import React from "react";
import AccordionWrapper from "./AccordionWrapper";
import AccordionTitle from "./AccordionTitle";
import AccordionItem from "./AccordionItem";
import AccordionHeader from "./AccordionHeader";
import AccordionBody from "./AccordionBody";
import AccordionCompound from "../../compounds/AccordionCompound";

export default {
  title: "Components/Accordion",
  parameters: {
    layout: "fullscreen",
  },
};

// Full Accordion Compound - using the complete FAQ compound component
export const FullAccordion = () => <AccordionCompound />;

// Individual AccordionItem with Header and Body
export const SingleItem = () => (
  <AccordionWrapper>
    <AccordionItem>
      <AccordionHeader>What is Netflix?</AccordionHeader>
      <AccordionBody>
        Netflix is a streaming service that offers a wide variety of
        award-winning TV programmes, films, anime, documentaries and more – on
        thousands of internet-connected devices.
      </AccordionBody>
    </AccordionItem>
  </AccordionWrapper>
);

// Multiple Accordion Items
export const MultipleItems = () => (
  <AccordionWrapper>
    <AccordionTitle>Frequently Asked Questions</AccordionTitle>
    <AccordionItem>
      <AccordionHeader>What is Netflix?</AccordionHeader>
      <AccordionBody>
        Netflix is a streaming service that offers a wide variety of
        award-winning TV programmes, films, anime, documentaries and more – on
        thousands of internet-connected devices.
      </AccordionBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader>How much does it cost?</AccordionHeader>
      <AccordionBody>
        Watch Netflix on your smartphone, tablet, smart TV, laptop or streaming
        device, all for one low fixed monthly fee. Plans start from £5.99 a
        month. No extra costs or contracts.
      </AccordionBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader>Where can I watch?</AccordionHeader>
      <AccordionBody>
        Watch anywhere, anytime, on an unlimited number of devices. Sign in with
        your Netflix account to watch instantly on the web at netflix.com from
        your personal computer or on any internet-connected device.
      </AccordionBody>
    </AccordionItem>
  </AccordionWrapper>
);

// AccordionWrapper Only - showing the wrapper component structure
export const WrapperOnly = () => (
  <AccordionWrapper>
    <AccordionTitle>Section Title</AccordionTitle>
    <p style={{ color: "#fff", textAlign: "center" }}>
      Content goes inside the AccordionWrapper
    </p>
  </AccordionWrapper>
);

// AccordionHeader showcase - demonstrating the clickable header
export const HeaderDemo = () => (
  <AccordionWrapper>
    <AccordionTitle>Click Headers to Toggle</AccordionTitle>
    <AccordionItem>
      <AccordionHeader>Click me to expand!</AccordionHeader>
      <AccordionBody>
        This content appears when you click the header above. Click again to
        collapse.
      </AccordionBody>
    </AccordionItem>
    <AccordionItem>
      <AccordionHeader>Another expandable section</AccordionHeader>
      <AccordionBody>
        Each AccordionItem maintains its own open/closed state independently.
      </AccordionBody>
    </AccordionItem>
  </AccordionWrapper>
);
