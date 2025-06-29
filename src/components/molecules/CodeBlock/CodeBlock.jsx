import React from 'react';
import { brandColors } from '../../../data/colors.js';
import { typography } from '../../../data/typography.js';

const CodeBlock = ({ children }) => (
    <pre className="p-3 mt-2 mb-4 rounded-lg" style={{ ...typography.code, backgroundColor: brandColors.GrayLight, color: brandColors.PrimaryText, whiteSpace: 'pre-wrap' }}>
        <code>{children}</code>
    </pre>
);

export default CodeBlock;
