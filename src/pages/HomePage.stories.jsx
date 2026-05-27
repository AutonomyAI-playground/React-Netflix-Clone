import React from "react";
import { MemoryRouter } from "react-router-dom";
import { FirebaseContext } from "../context/FirbaseContext";
import { firebase } from "../lib/firebase.prod";
import HomePage from "./HomePage";

const meta = {
  title: "Pages/HomePage",
  component: HomePage,
  parameters: {
    // Full viewport for page-level components
    layout: "fullscreen",
  },
  decorators: [
    // Wrap with routing and Firebase context required by HomePage
    (Story) => (
      <MemoryRouter>
        <FirebaseContext.Provider value={{ firebase }}>
          <Story />
        </FirebaseContext.Provider>
      </MemoryRouter>
    ),
  ],
};

export default meta;

export const Default = {};
