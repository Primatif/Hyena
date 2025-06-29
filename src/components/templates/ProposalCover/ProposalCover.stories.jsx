import React from 'react';
import ProposalCover from './ProposalCover.jsx';

export default {
  title: 'Templates/ProposalCover',
  component: ProposalCover,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <ProposalCover {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    description: {
      story: 'ProposalCover template demonstrates a formal document cover page with professional branding elements, classification banners, and structured information hierarchy. This template showcases proper use of design tokens for corporate communications and includes decorative elements with subtle branding patterns.',
    },
  },
};
