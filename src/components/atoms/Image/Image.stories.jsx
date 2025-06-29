import { Image } from './Image.jsx';

// Sample images for the stories
const sampleImage = 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&h=300&fit=crop&crop=center';
const portraitImage = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face';
const landscapeImage = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&crop=center';

export default {
  title: 'Atoms/Image',
  component: Image,
  parameters: {
    docs: {
      description: {
        component: 'The Image atom component provides consistent image display with various styling variants and token-driven design.',
      },
    },
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'Source URL for the image',
    },
    alt: {
      control: 'text',
      description: 'Alt text describing the image',
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'rounded', 'circular', 'bordered', 'elevated'],
      description: 'Visual variant of the image',
    },
    loading: {
      control: { type: 'select' },
      options: ['lazy', 'eager'],
      description: 'Loading behavior for the image',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export const Default = {
  args: {
    src: sampleImage,
    alt: 'Sample landscape image',
    variant: 'default',
  },
};

export const Rounded = {
  args: {
    src: sampleImage,
    alt: 'Sample landscape image with rounded corners',
    variant: 'rounded',
  },
};

export const Circular = {
  args: {
    src: portraitImage,
    alt: 'Sample portrait image in circular format',
    variant: 'circular',
    className: 'w-24 h-24',
  },
};

export const Bordered = {
  args: {
    src: sampleImage,
    alt: 'Sample landscape image with border',
    variant: 'bordered',
  },
};

export const Elevated = {
  args: {
    src: landscapeImage,
    alt: 'Sample landscape image with elevation effect',
    variant: 'elevated',
  },
  parameters: {
    docs: {
      description: {
        story: 'The elevated variant includes hover effects that lift the image on mouse interaction.',
      },
    },
  },
};

// Showcase different use cases
export const AllVariants = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 p-6">
    <div className="text-center">
      <Image src={sampleImage} alt="Default image" variant="default" className="w-full h-32 object-cover mb-2" />
      <p className="text-sm text-gray-600">Default</p>
    </div>
    <div className="text-center">
      <Image src={sampleImage} alt="Rounded image" variant="rounded" className="w-full h-32 object-cover mb-2" />
      <p className="text-sm text-gray-600">Rounded</p>
    </div>
    <div className="text-center">
      <Image src={portraitImage} alt="Circular image" variant="circular" className="w-32 h-32 mx-auto mb-2" />
      <p className="text-sm text-gray-600">Circular</p>
    </div>
    <div className="text-center">
      <Image src={sampleImage} alt="Bordered image" variant="bordered" className="w-full h-32 object-cover mb-2" />
      <p className="text-sm text-gray-600">Bordered</p>
    </div>
    <div className="text-center">
      <Image src={landscapeImage} alt="Elevated image" variant="elevated" className="w-full h-32 object-cover mb-2" />
      <p className="text-sm text-gray-600">Elevated</p>
    </div>
  </div>
);

export const ResponsiveExample = () => (
  <div className="space-y-4">
    <h3 className="text-lg font-semibold mb-4">Responsive Image Usage</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Image 
        src={sampleImage} 
        alt="Responsive image 1" 
        variant="rounded" 
        className="w-full h-48 object-cover" 
      />
      <Image 
        src={landscapeImage} 
        alt="Responsive image 2" 
        variant="elevated" 
        className="w-full h-48 object-cover" 
      />
      <Image 
        src={portraitImage} 
        alt="Responsive image 3" 
        variant="bordered" 
        className="w-full h-48 object-cover" 
      />
    </div>
  </div>
);
