import React from 'react';
import { brandColors } from '../../data/colors.js';
import { typography } from '../../data/typography.js';
import { WithSnippet } from '../WithSnippet.jsx';

// --- Chart Components ---
const BarChart = ({ data, title }) => (
    <div className="p-4 rounded-lg" style={{ backgroundColor: brandColors.SecondaryBackground, border: `1px solid ${brandColors.GrayLight}` }}>
        <h4 className="font-semibold text-center mb-4" style={{ color: brandColors.PrimaryText }}>{title}</h4>
        <div className="flex justify-around items-end h-48">
            {data.map((item, index) => (
                <div key={index} className="flex flex-col items-center w-1/5">
                    <div className="text-sm font-bold" style={{ color: item.color }}>{item.value}</div>
                    <div
                        className="w-1/2 rounded-t-md"
                        style={{ height: `${item.value}%`, backgroundColor: item.color }}
                        title={`${item.label}: ${item.value}`}
                    ></div>
                    <div className="text-xs mt-2 font-semibold" style={{ color: brandColors.GrayDark }}>{item.label}</div>
                </div>
            ))}
        </div>
    </div>
);

const DonutChart = ({ percentage, title, color }) => (
    <div className="p-4 flex flex-col items-center rounded-lg" style={{ backgroundColor: brandColors.SecondaryBackground, border: `1px solid ${brandColors.GrayLight}` }}>
        <h4 className="font-semibold text-center mb-4" style={{ color: brandColors.PrimaryText }}>{title}</h4>
        <div className="relative w-32 h-32">
            <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={brandColors.GrayLight}
                    strokeWidth="3"
                />
                <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={color}
                    strokeWidth="3"
                    strokeDasharray={`${percentage}, 100`}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold" style={{ color: color }}>{percentage}%</span>
            </div>
        </div>
    </div>
);


const InternalReport = () => {
    const snippet = (
        <ul>
            <li><strong>Purpose:</strong> A formal, data-dense layout for an internal performance report, combining key metrics, data visualizations, and detailed status tables.</li>
            <li><strong>Layout Structure:</strong>
                <ul>
                    <li><strong>Main Container:</strong> A single page with a <code>shadow-lg</code> and a <code>GrayLight</code> border to define its boundary.</li>
                    <li><strong>Header:</strong> A top bar with the <code>headerLogo</code> on the left and a subtitle on the right, separated by a <code>border-b</code>.</li>
                    <li><strong>Body:</strong> Organized into sections (Key Metrics, Performance Charts, Project Status) each introduced by a <code>subSectionTitle</code>.</li>
                    <li><strong>Key Metrics:</strong> A responsive grid (<code>grid-cols-1 md:grid-cols-3</code>) of info cards.</li>
                    <li><strong>Charts:</strong> A responsive grid (<code>grid-cols-1 md:grid-cols-2</code>) for displaying visualizations.</li>
                    <li><strong>Footer:</strong> A centered footer with copyright info, separated by a <code>border-t</code>.</li>
                </ul>
            </li>
            <li><strong>Component Composition:</strong>
                <ul>
                    <li>The report uses two custom sub-components for data visualization: <code>BarChart</code> and <code>DonutChart</code>.</li>
                    <li><strong>BarChart:</strong> Takes a <code>data</code> array (with label, value, color) and renders vertical bars. Bar height is proportional to the <code>value</code>.</li>
                    <li><strong>DonutChart:</strong> Takes a <code>percentage</code> and <code>color</code>. It's built with SVG, using two circular paths. One path is the gray background track, and the other uses <code>strokeDasharray</code> to draw the progress arc.</li>
                </ul>
            </li>
            <li><strong>Color & Styling Semantics:</strong>
                <ul>
                    <li><strong>Key Metrics Cards:</strong> Background and border colors are semantic (e.g., <code>SemanticSuccessGreenLight</code> background with a <code>SemanticSuccessGreen</code> border) to instantly communicate the status of the metric.</li>
                    <li><strong>Table Header:</strong> Uses a distinct <code>InfoBlue</code> background with <code>PrimaryBackground</code> (white) text for high contrast and clear separation.</li>
                    <li><strong>Table Rows & Badges:</strong> Rows can be highlighted with a semantic background (e.g., <code>WarningYellowLight</code>). Status badges use a solid semantic color fill (e.g., <code>ErrorRed</code>) or a light fill with darker text (e.g., <code>SemanticSuccessGreenLight</code> with <code>SemanticSuccessGreen</code> text) for emphasis.</li>
                </ul>
            </li>
            <li><strong>Typography:</strong>
                <ul>
                    <li>The main logo uses the <code>headerLogo</code> style from <code>typography.js</code>.</li>
                    <li>Section titles use the <code>subSectionTitle</code> style.</li>
                    <li>Table headers use <code>font-semibold text-sm uppercase</code> for clarity.</li>
                    <li>Metric values are large and bold (<code>text-3xl font-bold</code>) for immediate impact.</li>
                </ul>
            </li>
            <li><strong>Key Implementation Details:</strong>
                <ul>
                    <li>The layout heavily relies on a responsive grid system to adapt to different screen sizes.</li>
                    <li>Semantic colors are used throughout to convey meaning, not just for decoration. This is a core principle of the design.</li>
                    <li>The table is designed for clarity, with strong headers, clear row separation, and highly visible status indicators.</li>
                </ul>
            </li>
        </ul>
    );

    const barChartData = [
        { label: 'Q1', value: 65, color: brandColors.AccentSkyBlue },
        { label: 'Q2', value: 78, color: brandColors.SecondaryAccent },
        { label: 'Q3', value: 92, color: brandColors.AccentDeepBlue },
        { label: 'Q4', value: 85, color: brandColors.InfoBlue },
    ];

    return (
        <WithSnippet snippet={snippet}>
            <div>
                <h5 className="font-medium mb-2 text-gray-600">Internal Report Page</h5>
                <div className="p-8 shadow-lg" style={{border: `1px solid ${brandColors.GrayLight}`}}>
                    <div className="p-4 flex justify-between items-center border-b" style={{borderColor: brandColors.GrayLight}}>
                        <div className="font-bold text-2xl" style={{ ...typography.headerLogo, color: brandColors.PrimaryText }}>PRIMATIF</div>
                        <div className="text-sm" style={{color: brandColors.GrayMid}}>Q2 Performance Review</div>
                    </div>
                    <div className="py-8">
                        {/* Key Metrics Section */}
                        <h2 className="text-xl font-bold mb-4 text-gray-700" style={{...typography.subSectionTitle}}>Key Metrics</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                            <div className="p-4 rounded-lg" style={{backgroundColor: brandColors.SemanticSuccessGreenLight, border: `1px solid ${brandColors.SemanticSuccessGreen}`}}>
                                <div className="text-3xl font-bold" style={{color: brandColors.SemanticSuccessGreen}}>+15%</div>
                                <div className="text-sm font-semibold" style={{color: brandColors.GrayDark}}>User Engagement</div>
                            </div>
                            <div className="p-4 rounded-lg" style={{backgroundColor: brandColors.InfoBlueLight, border: `1px solid ${brandColors.InfoBlue}`}}>
                                <div className="text-3xl font-bold" style={{color: brandColors.InfoBlue}}>98.2%</div>
                                <div className="text-sm font-semibold" style={{color: brandColors.GrayDark}}>System Uptime</div>
                            </div>
                            <div className="p-4 rounded-lg" style={{backgroundColor: brandColors.WarningYellowLight, border: `1px solid ${brandColors.WarningYellow}`}}>
                                <div className="text-3xl font-bold" style={{color: brandColors.WarningYellow}}>3</div>
                                <div className="text-sm font-semibold" style={{color: brandColors.GrayDark}}>High-Priority Tickets</div>
                            </div>
                        </div>

                        {/* Charts and Diagrams Section */}
                        <h2 className="text-xl font-bold mb-4 text-gray-700" style={{...typography.subSectionTitle}}>Performance Charts</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <BarChart data={barChartData} title="Quarterly Ticket Resolution" />
                            <DonutChart percentage={75} title="Q2 Project Completion" color={brandColors.SecondaryAccent} />
                        </div>

                        {/* Table Section */}
                        <h2 className="text-xl font-bold mb-4 text-gray-700" style={{...typography.subSectionTitle}}>Project Status Overview</h2>
                        <p className="text-sm mb-4">This table summarizes the current status of all active projects for the second quarter.</p>
                        <div className="overflow-x-auto rounded-lg border" style={{ borderColor: brandColors.GrayLight }}>
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
                                            <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: brandColors.SemanticSuccessGreenLight, color: brandColors.SemanticSuccessGreen }}>Complete</span>
                                        </td>
                                        <td className="p-3" style={{color: brandColors.GrayDark }}>Tech Lead</td>
                                        <td className="p-3" style={{color: brandColors.GrayDark }}>2025-06-15</td>
                                    </tr>
                                    <tr className="border-b" style={{ backgroundColor: brandColors.WarningYellowLight, borderColor: brandColors.GrayLight }}>
                                        <td className="p-3 font-medium" style={{color: brandColors.PrimaryText }}>API Key Provisioning</td>
                                        <td className="p-3">
                                            <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: brandColors.WarningYellow, color: brandColors.PrimaryText }}>In Progress</span>
                                        </td>
                                        <td className="p-3" style={{color: brandColors.GrayDark }}>Client IT</td>
                                        <td className="p-3" style={{color: brandColors.GrayDark }}>2025-06-22</td>
                                    </tr>
                                    <tr className="border-b" style={{ backgroundColor: brandColors.ErrorRedLight, borderColor: brandColors.GrayLight }}>
                                        <td className="p-3 font-bold" style={{color: brandColors.ErrorRed }}>Database Credentials Update</td>
                                        <td className="p-3">
                                            <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: brandColors.ErrorRed, color: brandColors.PrimaryBackground }}>Blocked</span>
                                        </td>
                                        <td className="p-3 font-bold" style={{color: brandColors.ErrorRed }}>Tech Lead</td>
                                        <td className="p-3 font-bold" style={{color: brandColors.ErrorRed }}>2025-06-20</td>
                                    </tr>
                                     <tr className="border-b" style={{ borderColor: brandColors.GrayLight }}>
                                        <td className="p-3" style={{color: brandColors.PrimaryText }}>User Interface Mockups</td>
                                        <td className="p-3">
                                            <span className="inline-block px-2 py-1 rounded-full text-xs font-semibold" style={{ backgroundColor: brandColors.InfoBlueLight, color: brandColors.GrayDark }}>Pending Review</span>
                                        </td>
                                        <td className="p-3" style={{color: brandColors.GrayDark }}>Design Team</td>
                                        <td className="p-3" style={{color: brandColors.GrayDark }}>2025-06-25</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="p-4 text-center mt-8 border-t" style={{borderColor: brandColors.GrayLight}}>
                        <p className="text-xs" style={{color: brandColors.GrayMid}}>© {new Date().getFullYear()} Primatif | Page 5</p>
                    </div>
                </div>
            </div>
        </WithSnippet>
    );
};

export default InternalReport;
