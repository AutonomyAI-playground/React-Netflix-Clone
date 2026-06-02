import React from "react";
import { MemoryRouter } from "react-router-dom";
import AccordionPage from "./AccordionPage";

export default {
  title: "Pages/AccordionPage",
  component: AccordionPage,
  parameters: {
    // Fullscreen layout to properly display page-level component with header and footer
    layout: "fullscreen",
  },
  decorators: [
    // MemoryRouter required for Logo component which uses react-router-dom's Link
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = {};
