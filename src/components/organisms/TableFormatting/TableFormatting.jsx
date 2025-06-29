import React from 'react';
import { brandColors } from '../../../data/colors.js';
import { ExampleSection } from '../../molecules/ExampleSection/ExampleSection.jsx';
import { WithSnippet } from '../../molecules/WithSnippet/WithSnippet.jsx';

const TableFormatting = () => {
    const snippets = {
        table: (
            <ul>
                <li><strong>Purpose:</strong> To display structured data with a clear visual hierarchy and semantic status indicators. The design prioritizes readability and at-a-glance comprehension.</li>
                <li><strong>Layout & Structure:</strong>
                    <ul>
                        <li><strong>Container:</strong> The table is wrapped in a <code>div</code> with <code>overflow-x-auto</code> for responsiveness, a <code>rounded-lg</code> shape, and a containing border using <code>brandColors.PrimaryText</code>.</li>
                        <li><strong>Header (<code>&lt;thead&gt;</code>):</strong> Acts as the primary visual anchor. It uses a high-contrast design with a <code>brandColors.InfoBlue</code> background and <code>brandColors.PrimaryBackground</code> text. Typography is uppercase and semibold to establish importance.</li>
                        <li><strong>Rows (<code>&lt;tr&gt;</code>):</strong> Standard rows are separated by a subtle bottom border using <code>brandColors.GrayLight</code>.</li>
                        <li><strong>Cells (<code>&lt;th&gt;</code>, <code>&lt;td&gt;</code>):</strong> All cells use consistent <code>p-3</code> padding for alignment and spacing.</li>
                    </ul>
                </li>
                <li><strong>Semantic Styling & States:</strong>
                    <ul>
                        <li><strong>Row-Level Highlighting:</strong> An entire row can be highlighted to indicate its status. For example, <code>brandColors.WarningYellowLight</code> for caution or <code>brandColors.ErrorRedLight</code> for errors. Text within these rows can also be bolded or colored (e.g., using <code>brandColors.PrimaryAccent</code>) for added emphasis.</li>
                        <li><strong>Cell-Level Status Badges:</strong> For more granular status, a <code>&lt;span&gt;</code> can be styled as a badge within a cell. These have a <code>rounded-full</code> shape and use specific color combinations from <code>brandColors</code> to convey meaning:
                            <ul>
                                <li><strong>Complete:</strong> <code>SemanticSuccessGreenLight</code> background, <code>SemanticSuccessGreen</code> text.</li>
                                <li><strong>In Progress:</strong> <code>WarningYellow</code> background, <code>PrimaryText</code> text.</li>
                                <li><strong>Blocked:</strong> <code>PrimaryAccent</code> background, <code>PrimaryBackground</code> text.</li>
                                <li><strong>Pending Review:</strong> <code>InfoBlueLight</code> background, <code>GrayDark</code> text.</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><strong>Implementation Notes:</strong> Styling is a mix of Tailwind CSS for layout and typography, with inline styles for applying <code>brandColors</code> tokens. Conditional formatting for rows and badges would be driven by the data passed into the component.</li>
            </ul>
        )
    };

    return (
        <ExampleSection title="Table Formatting" commentary="Our table style prioritizes readability. A strong header color provides a clear starting point, while subtle row highlighting guides the eye. Semantic colors can be used within cells to draw attention to specific data points.">
            <p className="mb-4" style={{ color: brandColors.PrimaryText }}>Tables are powerful tools for presenting structured data. Use color and formatting to create visual hierarchy and convey information clearly. Rows or cells can be styled to highlight status or importance.</p>
            <WithSnippet snippet={snippets.table}>
                <div className="overflow-x-auto rounded-lg border" style={{ borderColor: brandColors.PrimaryText }}>
                    <table className="w-full text-left table-auto border-collapse">
                        <thead>
                            <tr style={{ backgroundColor: brandColors.InfoBlue, color: brandColors.PrimaryBackground }}>
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
                                <td className="p-3 font-bold" style={{color: brandColors.PrimaryAccent }}>Database Credentials Update</td>
                                <td className="p-3">
                                    <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: brandColors.PrimaryAccent, color: brandColors.PrimaryBackground }}> Blocked</span>
                                </td>
                                <td className="p-3 font-bold" style={{color: brandColors.PrimaryAccent }}>Tech Lead</td>
                                <td className="p-3 font-bold" style={{color: brandColors.PrimaryAccent }}>2025-06-20</td>
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
            </WithSnippet>
        </ExampleSection>
    );
};

export default TableFormatting;
