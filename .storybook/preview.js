import React from 'react';
import '../public/style.css';
import { FirebaseContext } from '../src/context/FirbaseContext';

/** @type { import('@storybook/react-webpack5').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <FirebaseContext.Provider value={{ firebase: {} }}>
        <Story />
      </FirebaseContext.Provider>
    ),
  ],
};

export default preview;
