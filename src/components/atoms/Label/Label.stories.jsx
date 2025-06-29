import Label from './Label.jsx';

export default {
  title: 'Atoms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    htmlFor: {
      control: { type: 'text' },
    },
    required: {
      control: { type: 'boolean' },
    },
    children: {
      control: { type: 'text' },
    },
  },
};

export const Default = {
  args: {
    children: 'Form Label',
    htmlFor: 'input-id',
  },
};

export const Required = {
  args: {
    children: 'Required Field',
    htmlFor: 'input-id',
    required: true,
  },
};

export const LongLabel = {
  args: {
    children: 'This is a longer label text that demonstrates how the label component handles more verbose descriptions',
    htmlFor: 'input-id',
  },
};

export const WithFormField = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '300px' }}>
    <Label htmlFor="example-input" required>
      Email Address
    </Label>
    <input
      id="example-input"
      type="email"
      placeholder="Enter your email"
      style={{
        padding: '0.5rem',
        border: '1px solid #ccc',
        borderRadius: '0.25rem',
        fontSize: '1rem',
      }}
    />
  </div>
);

export const MultipleLabels = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
    <div>
      <Label htmlFor="name-input">Full Name</Label>
      <input
        id="name-input"
        type="text"
        placeholder="John Doe"
        style={{
          padding: '0.5rem',
          border: '1px solid #ccc',
          borderRadius: '0.25rem',
          fontSize: '1rem',
          width: '100%',
          marginTop: '0.25rem',
        }}
      />
    </div>
    <div>
      <Label htmlFor="phone-input" required>Phone Number</Label>
      <input
        id="phone-input"
        type="tel"
        placeholder="(555) 123-4567"
        style={{
          padding: '0.5rem',
          border: '1px solid #ccc',
          borderRadius: '0.25rem',
          fontSize: '1rem',
          width: '100%',
          marginTop: '0.25rem',
        }}
      />
    </div>
    <div>
      <Label htmlFor="message-input">Message (Optional)</Label>
      <textarea
        id="message-input"
        placeholder="Enter your message..."
        rows={3}
        style={{
          padding: '0.5rem',
          border: '1px solid #ccc',
          borderRadius: '0.25rem',
          fontSize: '1rem',
          width: '100%',
          marginTop: '0.25rem',
          resize: 'vertical',
        }}
      />
    </div>
  </div>
);

export const AccessibilityDemo = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
    <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1rem' }}>
      This demo shows proper label-input associations for accessibility. Click on any label to focus its associated input.
    </p>
    <div>
      <Label htmlFor="acc-input-1">Click me to focus the input</Label>
      <input
        id="acc-input-1"
        type="text"
        placeholder="This input will be focused"
        style={{
          padding: '0.5rem',
          border: '2px solid #007bff',
          borderRadius: '0.25rem',
          fontSize: '1rem',
          width: '100%',
          marginTop: '0.25rem',
        }}
      />
    </div>
    <div>
      <Label htmlFor="acc-input-2" required>Required field with proper association</Label>
      <input
        id="acc-input-2"
        type="email"
        placeholder="required@example.com"
        required
        style={{
          padding: '0.5rem',
          border: '2px solid #dc3545',
          borderRadius: '0.25rem',
          fontSize: '1rem',
          width: '100%',
          marginTop: '0.25rem',
        }}
      />
    </div>
  </div>
);
