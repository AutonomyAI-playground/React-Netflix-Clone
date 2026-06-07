import React from "react";
import { MemoryRouter } from "react-router-dom";
import HeaderCompound from "./HeaderCompound";

export default {
  title: "Compounds/HeaderCompound",
  component: HeaderCompound,
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
