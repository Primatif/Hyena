import React from 'react';
import PatternsAndBackgrounds from './PatternsAndBackgrounds.jsx';

export default {
  title: 'Organisms/PatternsAndBackgrounds',
  component: PatternsAndBackgrounds,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <PatternsAndBackgrounds {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    description: {
      story: 'PatternsAndBackgrounds organism showcases the complete pattern system with 9 distinct variations, size controls, and token-driven API. This organism demonstrates the pattern foundation for creating branded background textures across the Primatif design system.',
    },
  },
};
