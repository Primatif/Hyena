import React from 'react';
import { brandColors } from '../data/colors.js';
import ExampleSection from './ExampleSection.jsx';

const TableFormatting = () => {
    return (
        <ExampleSection title="6. Table Formatting" commentary="Our table style prioritizes readability. A strong header color provides a clear starting point, while subtle row highlighting guides the eye. Semantic colors can be used within cells to draw attention to specific data points.">
            <p className="mb-4" style={{ color: brandColors.PrimaryText }}>Tables are powerful tools for presenting structured data. Use color and formatting to create visual hierarchy and convey information clearly. Rows or cells can be styled to highlight status or importance.</p>
            <div className="overflow-x-auto rounded-lg border" style={{ borderColor: brandColors.PrimaryText }}>
                <table className="w-full text-left table-auto border-collapse">
                    <thead>
                        <tr style={{ backgroundColor: brandColors.AccentDeepBlue, color: brandColors.PrimaryBackground }}>
                            <th className="p-3 font-semibold text-sm uppercase">Item</th>
                            <th className="p-3 font-semibold text-sm uppercase">Status</th>
                            <th className="p-3 font-semibold text-sm uppercase">Owner</th>
                            <th className="p-3 font-semibold text-sm uppercase">Due Date</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm">
                        <tr className="border-b" style={{ borderColor: brandColors.GrayLight }}>
                            <td className="p-3" style={{color: brandColors.PrimaryText }}>Initial Project Setup</td>
                            <td className="p-3">
                                <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: brandColors.SemanticSuccessGreenLight, color: brandColors.SemanticSuccessGreen }}> Complete</span>
                            </td>
                            <td className="p-3" style={{color: brandColors.GrayDark }}>Tech Lead</td>
                            <td className="p-3" style={{color: brandColors.GrayDark }}>2025-06-15</td>
                        </tr>
                         <tr className="border-b" style={{ backgroundColor: brandColors.WarningYellowLight, borderColor: brandColors.GrayLight }}>
                            <td className="p-3 font-medium" style={{color: brandColors.PrimaryText }}>API Key Provisioning</td>
                            <td className="p-3">
                                <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: brandColors.WarningYellow, color: brandColors.PrimaryText }}> In Progress</span>
                            </td>
                            <td className="p-3" style={{color: brandColors.GrayDark }}>Client IT</td>
                            <td className="p-3" style={{color: brandColors.GrayDark }}>2025-06-22</td>
                        </tr>
                         <tr className="border-b" style={{ backgroundColor: brandColors.ErrorRedLight, borderColor: brandColors.GrayLight }}>
                            <td className="p-3 font-bold" style={{color: brandColors.PrimaryAccentDark }}>Database Credentials Update</td>
                            <td className="p-3">
                                <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: brandColors.PrimaryAccentDark, color: brandColors.PrimaryBackground }}> Blocked</span>
                            </td>
                            <td className="p-3 font-bold" style={{color: brandColors.PrimaryAccentDark }}>Tech Lead</td>
                            <td className="p-3 font-bold" style={{color: brandColors.PrimaryAccentDark }}>2025-06-20</td>
                        </tr>
                        <tr className="border-b" style={{ borderColor: brandColors.GrayLight }}>
                            <td className="p-3" style={{color: brandColors.PrimaryText }}>User Interface Mockups</td>
                            <td className="p-3">
                                <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: brandColors.InfoBlueLight, color: brandColors.GrayDark }}> Pending Review</span>
                            </td>
                            <td className="p-3" style={{color: brandColors.GrayDark }}>Design Team</td>
                            <td className="p-3" style={{color: brandColors.GrayDark }}>2025-06-25</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </ExampleSection>
    );
};

export default TableFormatting;
