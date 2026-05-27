import React from "react";
import { MemoryRouter } from "react-router-dom";
import AccordionPage from "./AccordionPage";

export default {
  title: "Pages/AccordionPage",
  component: AccordionPage,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    // MemoryRouter is required because header/footer components use Link from react-router-dom
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = {};
