import React from 'react';
import { WithSnippet, Snippet } from './WithSnippet.jsx';

export default {
  title: 'Molecules/WithSnippet',
  component: WithSnippet,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'The main content to display alongside the snippet',
    },
    snippet: {
      control: 'text',
      description: 'Code snippet or implementation details to display',
    },
  },
};

const Template = (args) => <WithSnippet {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <div>
      <h3 className="text-xl font-semibold mb-4">Component Example</h3>
      <p className="mb-4">This is an example of how a component appears alongside its implementation details.</p>
      <div className="p-4 bg-blue-50 rounded-lg">
        Sample Component Display
      </div>
    </div>
  ),
  snippet: (
    <ul>
      <li><strong>Purpose:</strong> Demonstrates how to implement this component pattern.</li>
      <li><strong>Tokens Used:</strong>
        <ul>
          <li><strong>Background:</strong> <code>brandColors.PrimaryBackground</code></li>
          <li><strong>Text:</strong> <code>brandColors.PrimaryText</code></li>
          <li><strong>Border:</strong> <code>brandColors.GrayLight</code></li>
        </ul>
      </li>
      <li><strong>Implementation:</strong> Use the component with proper token references for consistent styling.</li>
    </ul>
  ),
};

export const ButtonExample = Template.bind({});
ButtonExample.args = {
  children: (
    <div>
      <h3 className="text-xl font-semibold mb-4">Button Components</h3>
      <p className="mb-4">Various button styles and their appropriate use cases.</p>
      <div className="space-y-3">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Primary Button
        </button>
        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 ml-3">
          Secondary Button
        </button>
      </div>
    </div>
  ),
  snippet: (
    <ul>
      <li><strong>Purpose:</strong> Primary and secondary button implementations.</li>
      <li><strong>Tokens Used:</strong>
        <ul>
          <li><strong>Primary:</strong> <code>brandColors.PrimaryAccent</code> background</li>
          <li><strong>Secondary:</strong> <code>brandColors.GrayLight</code> border</li>
          <li><strong>Text:</strong> <code>brandColors.PrimaryBackground</code> for primary, <code>brandColors.PrimaryText</code> for secondary</li>
        </ul>
      </li>
      <li><strong>States:</strong> Include hover and focus states for accessibility.</li>
    </ul>
  ),
};

export const SnippetOnly = () => (
  <div className="max-w-md">
    <Snippet title="Code Snippet">
      <ul>
        <li><strong>Component:</strong> Standalone snippet display</li>
        <li><strong>Usage:</strong> Can be used independently or within WithSnippet</li>
        <li><strong>Styling:</strong> Uses consistent token-based design</li>
      </ul>
    </Snippet>
  </div>
);

SnippetOnly.parameters = {
  docs: {
    description: {
      story: 'The Snippet component can be used independently to display code examples, implementation notes, or technical specifications.',
    },
  },
};

export const ComplexExample = Template.bind({});
ComplexExample.args = {
  children: (
    <div>
      <h3 className="text-xl font-semibold mb-4">Card Layout Pattern</h3>
      <p className="mb-4">A responsive card layout demonstrating proper spacing and hierarchy.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-6 bg-white rounded-lg shadow-md border">
          <h4 className="font-semibold mb-2">Card Title</h4>
          <p className="text-gray-600 text-sm">Card content with proper typography and spacing.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md border">
          <h4 className="font-semibold mb-2">Another Card</h4>
          <p className="text-gray-600 text-sm">Consistent styling across multiple cards.</p>
        </div>
      </div>
    </div>
  ),
  snippet: (
    <ul>
      <li><strong>Purpose:</strong> Responsive card grid layout with consistent styling.</li>
      <li><strong>Layout Structure:</strong>
        <ul>
          <li><strong>Grid:</strong> <code>grid-cols-1 sm:grid-cols-2</code> for responsive behavior</li>
          <li><strong>Gap:</strong> <code>gap-4</code> for consistent spacing between cards</li>
          <li><strong>Cards:</strong> <code>p-6</code> padding, <code>rounded-lg</code> corners, <code>shadow-md</code> elevation</li>
        </ul>
      </li>
      <li><strong>Tokens Used:</strong>
        <ul>
          <li><strong>Background:</strong> <code>brandColors.PrimaryBackground</code></li>
          <li><strong>Border:</strong> <code>brandColors.GrayLight</code></li>
          <li><strong>Text:</strong> <code>brandColors.PrimaryText</code> for titles, <code>brandColors.GrayDark</code> for content</li>
        </ul>
      </li>
      <li><strong>Implementation:</strong> Use semantic HTML structure with proper accessibility attributes.</li>
    </ul>
  ),
};

ComplexExample.parameters = {
  docs: {
    description: {
      story: 'WithSnippet provides a side-by-side layout for showcasing components alongside their implementation details, specifications, and usage guidelines. Essential for style guide documentation.',
    },
  },
};
