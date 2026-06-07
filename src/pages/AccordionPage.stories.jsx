import React from "react";
import { MemoryRouter } from "react-router-dom";
import AccordionPage from "./AccordionPage";

/**
 * AccordionPage story configuration.
 * MemoryRouter decorator is required because the page components
 * rely on React Router context for navigation links.
 */
export default {
  title: "Pages/AccordionPage",
  component: AccordionPage,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = {};
