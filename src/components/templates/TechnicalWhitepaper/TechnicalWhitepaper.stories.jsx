import React from 'react';
import TechnicalWhitepaper from './TechnicalWhitepaper.jsx';

export default {
  title: 'Templates/TechnicalWhitepaper',
  component: TechnicalWhitepaper,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <TechnicalWhitepaper {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    description: {
      story: 'TechnicalWhitepaper template demonstrates a formal academic document layout with proper typography hierarchy, citations, blockquotes, and structured content. This template showcases semantic HTML usage with annotation boxes and references section for technical documentation.',
    },
  },
};
