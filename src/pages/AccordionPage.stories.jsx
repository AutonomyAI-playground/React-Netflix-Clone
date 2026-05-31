import React from "react";
import { MemoryRouter } from "react-router-dom";
import AccordionPage from "./AccordionPage";

export default {
  title: "Pages/AccordionPage",
  component: AccordionPage,
  parameters: {
    layout: "fullscreen",
  },
  // MemoryRouter wraps the story to provide routing context without affecting browser URL
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = {};
