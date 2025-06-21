import React from 'react';
import { brandColors } from '../data/colors.js';

export const Snippet = ({ title, children }) => (
  <div style={{ 
    backgroundColor: brandColors.SecondaryBackground, 
    border: `1px solid ${brandColors.GrayLight}`,
    borderRadius: '0.5rem',
    height: '100%' 
  }}>
    <div style={{ 
      padding: '0.5rem 1rem', 
      borderBottom: `1px solid ${brandColors.GrayLight}`,
      backgroundColor: brandColors.GrayDark 
    }}>
      <h4 style={{ 
        fontSize: '0.875rem', 
        fontWeight: 600, 
        color: brandColors.PrimaryBackground 
      }}>{title}</h4>
    </div>
    <div style={{ 
      padding: '1rem', 
      color: brandColors.GrayDark,
      maxWidth: 'none' 
    }}>
      {children}
    </div>
  </div>
);

export const WithSnippet = ({ children, snippet }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
    <div>{children}</div>
    <Snippet title="Snippets">
      {snippet}
    </Snippet>
  </div>
);
