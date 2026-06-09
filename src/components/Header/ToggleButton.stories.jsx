import React from 'react';
import ToggleButton from './ToggleButton';
import './HeaderStyles.css';

export default {
  title: 'Components/Header/ToggleButton',
  component: ToggleButton,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Active = {
  args: {
    children: 'Films',
    isActive: true,
  },
};

export const Inactive = {
  args: {
    children: 'Series',
    isActive: false,
  },
};

export const BothStates = {
  render: () => (
    <div style={{ display: 'flex', gap: '10px' }}>
      <ToggleButton isActive={true}>Films</ToggleButton>
      <ToggleButton isActive={false}>Series</ToggleButton>
    </div>
  ),
};
