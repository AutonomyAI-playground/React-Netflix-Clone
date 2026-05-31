import React from "react";
import { MemoryRouter } from "react-router-dom";
import AccordionPage from "./AccordionPage";

export default {
  title: "Pages/AccordionPage",
  component: AccordionPage,
  parameters: {
    layout: "fullscreen",
  },
  // Wrap in MemoryRouter to provide routing context for Link components
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = {};
