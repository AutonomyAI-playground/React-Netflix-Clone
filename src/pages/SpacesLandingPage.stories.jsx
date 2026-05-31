import React from "react";
import SpacesLandingPage from "./SpacesLandingPage";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Pages/SpacesLandingPage",
  component: SpacesLandingPage,
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
  args: {},
};
