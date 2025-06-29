import React from 'react';
import ExampleSection from './ExampleSection.jsx';

export default {
  title: 'Molecules/ExampleSection',
  component: ExampleSection,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'The section title displayed at the top',
    },
    commentary: {
      control: 'text',
      description: 'Optional commentary text displayed below the title',
    },
    children: {
      control: 'text',
      description: 'Content to be displayed within the section',
    },
  },
};

const Template = (args) => <ExampleSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Example Section',
  children: 'This is the main content of the section. It can contain any React components or elements.',
};

export const WithCommentary = Template.bind({});
WithCommentary.args = {
  title: 'Section with Commentary',
  commentary: 'This section includes explanatory commentary that provides additional context about the content below.',
  children: 'Main section content goes here, following the commentary explanation.',
};

export const Typography = Template.bind({});
Typography.args = {
  title: 'Typography Examples',
  commentary: 'This section demonstrates various typography styles and their proper usage within the design system.',
  children: (
    <div className="space-y-4">
      <p>Regular paragraph text with proper spacing and hierarchy.</p>
      <h3 className="text-lg font-semibold">Subsection Header</h3>
      <p>Additional content demonstrating how multiple elements work within an ExampleSection.</p>
    </div>
  ),
};

export const ComponentShowcase = Template.bind({});
ComponentShowcase.args = {
  title: 'Component Showcase',
  commentary: 'ExampleSection serves as a consistent wrapper for demonstrating components and patterns in the style guide.',
  children: (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 bg-gray-50 rounded">Component Example 1</div>
      <div className="p-4 bg-gray-50 rounded">Component Example 2</div>
      <div className="p-4 bg-gray-50 rounded">Component Example 3</div>
      <div className="p-4 bg-gray-50 rounded">Component Example 4</div>
    </div>
  ),
};

ComponentShowcase.parameters = {
  docs: {
    description: {
      story: 'ExampleSection provides consistent styling and structure for showcasing components, patterns, and design elements throughout the Primatif style guide. It uses centralized design tokens for brand-consistent presentation.',
    },
  },
};
