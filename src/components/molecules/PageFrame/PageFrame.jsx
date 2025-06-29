import React from 'react';
import Heading from '../../atoms/Heading/Heading.jsx';
import Text from '../../atoms/Text/Text.jsx';
import { brandColors } from '../../../data/colors.js';

const PageFrame = ({ 
    children, 
    pageNumber = 1, 
    totalPages = 1,
    headerTitle = "PRIMATIF",
    headerSubtitle = "Document",
    footerLeft = "© 2025 Primatif | hello@primatif.com",
    showPageNumbers = true
}) => (
    <div className="page-container">
        <div className="page-header">
            <Heading level={2} variant="display" style={{ color: brandColors.PrimaryText }}>
                {headerTitle}
            </Heading>
            <Text variant="subtitle" style={{ color: brandColors.SecondaryText }}>
                {headerSubtitle}
            </Text>
        </div>
        <div className="page-content">
            {children}
        </div>
        <div className="page-footer">
            <Text variant="body" className="text-sm" style={{ color: brandColors.SecondaryText }}>
                {footerLeft}
            </Text>
            {showPageNumbers && (
                <Text variant="body" className="text-sm" style={{ color: brandColors.SecondaryText }}>
                    Page {pageNumber} of {totalPages}
                </Text>
            )}
        </div>
    </div>
);

export default PageFrame;
