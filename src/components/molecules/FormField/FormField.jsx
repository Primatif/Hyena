import React from 'react';
import { brandColors } from '../../../data/colors.js';
import Label from '../../atoms/Label/Label.jsx';
import Input from '../../atoms/Input/Input.jsx';
import Textarea from '../../atoms/Textarea/Textarea.jsx';
import Select from '../../atoms/Select/Select.jsx';
import Text from '../../atoms/Text/Text.jsx';

const FormField = ({ 
  type = 'input',
  label,
  htmlFor,
  required = false,
  error,
  helperText,
  className = '',
  style = {},
  children,
  ...props 
}) => {
  const fieldId = htmlFor || `field-${Math.random().toString(36).substr(2, 9)}`;

  const renderField = () => {
    const fieldProps = {
      id: fieldId,
      error: error,
      ...props
    };

    switch (type) {
      case 'textarea':
        return <Textarea {...fieldProps}>{children}</Textarea>;
      case 'select':
        return <Select {...fieldProps}>{children}</Select>;
      case 'input':
      default:
        return <Input {...fieldProps} />;
    }
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem', // space-y-1
    ...style,
  };

  return (
    <div 
      className={className}
      style={containerStyle}
    >
      {label && (
        <Label 
          htmlFor={fieldId} 
          required={required}
          style={{
            color: error ? brandColors.ErrorRed : brandColors.GrayDark
          }}
        >
          {label}
        </Label>
      )}
      
      {renderField()}
      
      {error && (
        <Text 
          size="xs" 
          style={{ 
            color: brandColors.ErrorRed,
            marginTop: '0.25rem'
          }}
        >
          {error}
        </Text>
      )}
      
      {helperText && !error && (
        <Text 
          variant="muted" 
          size="xs"
          style={{ 
            marginTop: '0.25rem'
          }}
        >
          {helperText}
        </Text>
      )}
    </div>
  );
};

export default FormField;
