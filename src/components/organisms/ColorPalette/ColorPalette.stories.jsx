import React from 'react';
import ColorPalette from './ColorPalette.jsx';

export default {
  title: 'Organisms/ColorPalette',
  component: ColorPalette,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <ColorPalette {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    description: {
      story: 'ColorPalette organism showcases the complete Primatif color system hierarchy including Brand Colors, Reference Colors, Functional Tones, and Semantic Colors. This organism demonstrates the strategic color philosophy that balances brand consistency with creative expression for AI-generated content.',
    },
  },
};
