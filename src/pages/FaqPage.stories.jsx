import React from "react";
import { MemoryRouter } from "react-router-dom";
import FaqPage from "./FaqPage";

export default {
  title: "Pages/FaqPage",
  component: FaqPage,
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

export const Default = {
  name: "Default (Collapsed)",
};

export const WithExpandedItem = {
  name: "With Expanded Item",
  play: async ({ canvasElement }) => {
    // This demonstrates the interaction capability
    // The accordion will be shown expanded after clicking the first FAQ item
    const firstHeader = canvasElement.querySelector(".accordion-header");
    if (firstHeader) {
      firstHeader.click();
    }
  },
};
