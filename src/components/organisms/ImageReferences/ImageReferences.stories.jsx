import React from 'react';
import ImageReferences from './ImageReferences.jsx';

export default {
  title: 'Organisms/ImageReferences',
  component: ImageReferences,
  parameters: {
    layout: 'padded',
  },
};

const Template = (args) => <ImageReferences {...args} />;

export const Default = Template.bind({});
Default.args = {};

Default.parameters = {
  docs: {
    description: {
      story: 'ImageReferences organism is a utility component that displays reference images with their analyzed color profiles and palettes. This component integrates with the image store to load and analyze reference images, displaying them in a responsive masonry layout with color extraction capabilities.',
    },
  },
};
