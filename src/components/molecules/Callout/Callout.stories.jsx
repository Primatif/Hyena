import React from 'react';
import Callout from './Callout.jsx';

export default {
  title: 'Molecules/Callout',
  component: Callout,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'danger', 'usage'],
      description: 'The semantic type of the callout which determines its visual styling and meaning',
    },
    title: {
      control: 'text',
      description: 'The heading/title text for the callout',
    },
    children: {
      control: 'text',
      description: 'The main content/body text of the callout',
    },
  },
};

const Template = (args) => <Callout {...args} />;

export const Info = Template.bind({});
Info.args = {
  type: 'info',
  title: 'Information',
  children: 'This is an informational callout that provides helpful context or tips to guide the user.',
};

export const Success = Template.bind({});
Success.args = {
  type: 'success',
  title: 'Success',
  children: 'Your action has been completed successfully! This confirms a successful operation or process.',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  title: 'Warning',
  children: 'Please pay attention to this important notice. This indicates something that requires caution or consideration.',
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'danger',
  title: 'Error',
  children: 'An error has occurred that requires immediate attention. This indicates a problem that needs to be resolved.',
};

export const Usage = Template.bind({});
Usage.args = {
  type: 'usage',
  title: 'Usage Guidelines',
  children: 'Here are some best practices and usage guidelines for implementing this component effectively in your application.',
};

export const AllTypes = () => (
  <div className="space-y-6">
    <Callout type="info" title="Information">
      Informational callouts provide helpful context and guidance.
    </Callout>
    <Callout type="success" title="Success">
      Success callouts confirm completed actions and positive outcomes.
    </Callout>
    <Callout type="warning" title="Warning">
      Warning callouts highlight important considerations and cautions.
    </Callout>
    <Callout type="danger" title="Error">
      Danger callouts indicate critical issues requiring immediate attention.
    </Callout>
    <Callout type="usage" title="Usage Guidelines">
      Usage callouts provide best practices and implementation guidance.
    </Callout>
  </div>
);
AllTypes.parameters = {
  docs: {
    description: {
      story: 'Comprehensive showcase of all Callout variants demonstrating semantic color usage and glassmorphism effects with token-driven styling.',
    },
  },
};
