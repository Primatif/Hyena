import React from 'react';
import TableFormatting from './TableFormatting.jsx';

export default {
  title: 'Organisms/TableFormatting',
  component: TableFormatting,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <TableFormatting {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    description: {
      story: 'TableFormatting organism demonstrates structured data presentation with semantic styling, row-level highlighting, and status badges. This organism showcases the table design patterns including header styling, row states, and cell-level status indicators for the Primatif design system.',
    },
  },
};
