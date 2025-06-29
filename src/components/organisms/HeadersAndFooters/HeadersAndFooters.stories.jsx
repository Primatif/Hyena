import React from 'react';
import HeadersAndFooters from './HeadersAndFooters.jsx';

export default {
  title: 'Organisms/HeadersAndFooters',
  component: HeadersAndFooters,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <HeadersAndFooters {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    description: {
      story: 'HeadersAndFooters organism showcases brand frame components including simple and navigation headers, plus simple and multi-column footers. This organism demonstrates consistent branding patterns for document framing in the Primatif design system.',
    },
  },
};
