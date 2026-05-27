import React from "react";
import AccordionPage from "./AccordionPage";

export default {
  title: "Pages/AccordionPage",
  component: AccordionPage,
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * Default story showing the complete AccordionPage with header, FAQ accordion, and footer.
 */
export const Default = {
  render: () => <AccordionPage />,
};
