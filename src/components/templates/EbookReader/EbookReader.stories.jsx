import React from 'react';
import EbookReader from './EbookReader.jsx';

export default {
  title: 'Templates/EbookReader',
  component: EbookReader,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <EbookReader {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    description: {
      story: 'EbookReader template demonstrates a clean e-book reading interface with a two-page spread layout, chapter navigation, and progress tracking. This template showcases proper typography tokens for body text and layout patterns for reading applications.',
    },
  },
};
