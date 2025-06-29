import React, { useState } from 'react';
import Button from '../../atoms/Button/Button.jsx';
import Text from '../../atoms/Text/Text.jsx';
import Heading from '../../atoms/Heading/Heading.jsx';
import { brandColors } from '../../../data/colors.js';
import { typography } from '../../../data/typography.js';

const InstructionBlock = ({ 
    title = "Instructions", 
    children, 
    showCopyButton = true,
    variant = "code" // "code" | "text"
}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            // Extract text content from children
            const textContent = extractTextContent(children);
            await navigator.clipboard.writeText(textContent);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    // Helper function to extract text content from React elements
    const extractTextContent = (element) => {
        if (typeof element === 'string') {
            return element;
        }
        if (typeof element === 'number') {
            return element.toString();
        }
        if (React.isValidElement(element)) {
            if (element.props && element.props.children) {
                return extractTextContent(element.props.children);
            }
            return '';
        }
        if (Array.isArray(element)) {
            return element.map(extractTextContent).join('');
        }
        return '';
    };

    const containerStyle = {
        backgroundColor: variant === "code" ? brandColors.CodeBackground : brandColors.SecondaryBackground,
        border: `1px solid ${brandColors.GrayLight}`,
        borderRadius: '8px',
        padding: '1.5rem',
        marginBottom: '2rem',
        position: 'relative',
        fontFamily: variant === "code" ? typography.code.fontFamily : typography.body.fontFamily
    };

    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem',
        paddingBottom: '0.75rem',
        borderBottom: `1px solid ${brandColors.GrayLight}`
    };

    const contentStyle = {
        color: variant === "code" ? brandColors.CodeText : brandColors.PrimaryText,
        lineHeight: '1.6',
        fontSize: variant === "code" ? typography.code.fontSize : typography.body.fontSize,
        whiteSpace: 'pre-wrap',
        fontFamily: variant === "code" ? typography.code.fontFamily : typography.body.fontFamily,
        userSelect: 'text',
        cursor: 'text'
    };

    const titleStyle = {
        color: brandColors.PrimaryText,
        fontWeight: 'bold',
        fontSize: typography.subtitle.fontSize,
        margin: 0
    };

    return (
        <div style={containerStyle}>
            <div style={headerStyle}>
                <Heading level={3} style={titleStyle}>
                    {title}
                </Heading>
                {showCopyButton && (
                    <Button
                        variant="outline"
                        size="small"
                        onClick={handleCopy}
                        style={{
                            fontSize: '0.75rem',
                            padding: '0.25rem 0.5rem',
                            backgroundColor: copied ? brandColors.SuccessLight : 'transparent',
                            color: copied ? brandColors.SuccessText : brandColors.PrimaryText
                        }}
                    >
                        {copied ? '✓ Copied' : 'Copy'}
                    </Button>
                )}
            </div>
            <div style={contentStyle}>
                {children}
            </div>
        </div>
    );
};

export default InstructionBlock;
