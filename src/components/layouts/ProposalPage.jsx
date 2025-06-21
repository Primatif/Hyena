import React from 'react';
import { brandColors } from '../../data/colors.js';
import { typography } from '../../data/typography.js';
import { WithSnippet } from '../WithSnippet.jsx';
import { hexToRgba } from '../../data/utils.js';

// --- Icon Component ---
const Icon = ({ type }) => {
  const icons = {
    info: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    ),
  };
  return icons[type] || null;
};

const ProposalPage = () => {
    const snippet = (
        <ul>
            <li><strong>Purpose:</strong> A template for a standard content page within a formal document like a proposal. It demonstrates typography, data tables, lists, and various styled content blocks.</li>
            <li><strong>Layout Structure:</strong>
                <ul>
                    <li><strong>Page Structure:</strong> The component is framed by a header and footer, both separated from the main content by a <code>GrayLight</code> border.</li>
                    <li><strong>Header/Footer:</strong> Contains the company logo, document title, and page number/confidentiality notice.</li>
                    <li><strong>Content Flow:</strong> A single-column layout that uses generous margins and vertical spacing to create a readable, professional document flow.</li>
                    <li><strong>Content Blocks:</strong> The page is composed of distinct blocks for different types of content, such as text sections, callouts, tables, and cost summaries.</li>
                </ul>
            </li>
            <li><strong>Specialized Content Blocks:</strong>
                <ul>
                    <li><strong>Callout Box:</strong> A styled container for highlighting key information. It uses a transparent <code>InfoBlueLight</code> background, a subtle border, a shadow, and is paired with an icon and a <code>SecondaryAccent</code> title.</li>
                    <li><strong>Data Table:</strong> Features a distinctly styled header (<code>InfoBlue</code> background, white text) and alternating row colors (<code>SecondaryBackground</code>) for readability, a pattern often called 'zebra striping'.</li>
                    <li><strong>Cost Highlight:</strong> A flexbox container with a light background (<code>bg-gray-50</code>) used to visually separate and emphasize a key data point, like a total cost.</li>
                    <li><strong>Next Steps Block:</strong> A call-to-action section with a transparent <code>SecondaryAccent</code> background to draw the reader's attention.</li>
                </ul>
            </li>
            <li><strong>Color & Styling:</strong>
                <ul>
                    <li><strong>Text Hierarchy:</strong> Uses <code>PrimaryText</code> for body copy and main titles, <code>GrayDark</code> for subheadings, and <code>GrayMid</code> for tertiary info like footer text.</li>
                    <li><strong>Semantic Colors:</strong> Colors are used purposefully. <code>InfoBlue</code> denotes informational content (table headers, callouts). <code>SecondaryAccent</code> highlights recommendations and calls to action. <code>PrimaryAccent</code> is reserved for high-impact data like the final cost.</li>
                    <li><strong>Transparency:</strong> The <code>hexToRgba</code> utility is used to apply transparent background colors, creating a soft, layered effect for callout boxes.</li>
                </ul>
            </li>
            <li><strong>Typography:</strong>
                <ul>
                    <li><strong>Hierarchy:</strong> Follows a strict typographic scale defined in <code>typography.js</code>, from <code>sectionTitle</code> down to <code>body</code> text and smaller annotations.</li>
                    <li><strong>Consistency:</strong> All text elements are explicitly styled with tokens (e.g., <code>...typography.sectionTitle</code>), ensuring brand consistency.</li>
                </ul>
            </li>
            <li><strong>Key Implementation Details:</strong>
                <ul>
                    <li>A local <code>Icon</code> subcomponent is defined to render SVGs, keeping the main component's JSX clean.</li>
                    <li>The table uses standard HTML tags (<code>thead</code>, <code>tbody</code>, <code>th</code>, <code>td</code>) with styles applied via classNames and style objects for full control.</li>
                    <li>Borders (<code>border-b</code>, <code>border-t</code>) are used to create strong visual separation for the header and footer.</li>
                </ul>
            </li>
        </ul>
    );

    return (
        <WithSnippet snippet={snippet}>
            <div>
                <h5 className="font-medium mb-2 text-gray-600">Proposal Page</h5>
                <div className="p-8 shadow-lg" style={{border: `1px solid ${brandColors.GrayLight}`}}>
                    {/* Header with page indicator */}
                    <div className="flex justify-between items-center pb-4 mb-8 border-b" style={{borderColor: brandColors.GrayLight}}>
                        <div className="font-bold text-lg" style={{ ...typography.headerLogo, color: brandColors.PrimaryText }}>PRIMATIF</div>
                        <div className="text-sm" style={{color: brandColors.GrayMid}}>Enterprise Cloud Migration Strategy | Page 3</div>
                    </div>
                    
                    {/* Main content section */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-6" style={{ ...typography.sectionTitle, color: brandColors.PrimaryText }}>
                            2. Solution Architecture
                        </h2>
                        
                        <p className="mb-4" style={{ ...typography.body, color: brandColors.PrimaryText }}>
                            Our proposed architecture leverages cloud-native services to create a scalable, resilient infrastructure 
                            that meets your organization's current needs while providing flexibility for future growth.
                        </p>
                        
                        {/* Callout box */}
                        <div className="p-6 mb-6 rounded-2xl shadow-lg flex items-start space-x-4 border"
                             style={{
                                backgroundColor: hexToRgba(brandColors.InfoBlueLight, 0.3),
                                borderColor: hexToRgba(brandColors.InfoBlue, 0.5),
                             }}>
                            <div className="flex-shrink-0" style={{ color: brandColors.SecondaryAccent }}>
                                <Icon type="info" />
                            </div>
                            <div className="flex-grow">
                                <h3 className="font-bold text-lg" style={{ color: brandColors.SecondaryAccent }}>Key Recommendation</h3>
                                <p className="mt-1 text-sm" style={{ color: hexToRgba(brandColors.PrimaryText, 0.7) }}>
                                    Based on your current workload patterns, we recommend starting with the hybrid deployment model, 
                                    allowing for phased migration of critical applications.
                                </p>
                            </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold mb-3" style={{ ...typography.subSectionTitle, color: brandColors.GrayDark }}>
                            2.1 Cloud Infrastructure Components
                        </h3>
                        
                        <ul className="list-disc pl-5 mb-6">
                            <li className="mb-2" style={{ ...typography.body, color: brandColors.PrimaryText }}>
                                <span className="font-medium">Compute Resources:</span> Scalable virtual machines with auto-scaling capabilities
                            </li>
                            <li className="mb-2" style={{ ...typography.body, color: brandColors.PrimaryText }}>
                                <span className="font-medium">Storage Solutions:</span> Object storage for unstructured data, block storage for databases
                            </li>
                            <li className="mb-2" style={{ ...typography.body, color: brandColors.PrimaryText }}>
                                <span className="font-medium">Network Configuration:</span> Virtual private cloud with dedicated subnets for each environment
                            </li>
                            <li className="mb-2" style={{ ...typography.body, color: brandColors.PrimaryText }}>
                                <span className="font-medium">Security Framework:</span> Identity and access management, encryption at rest and in transit
                            </li>
                        </ul>
                    </div>
                    
                    {/* Implementation Timeline */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4" style={{ ...typography.subSectionTitle, color: brandColors.GrayDark }}>
                            2.2 Implementation Timeline
                        </h3>
                        
                        <div className="overflow-x-auto rounded-lg border" style={{ borderColor: brandColors.GrayLight }}>
                            <table className="w-full text-left table-auto border-collapse">
                                <thead>
                                    <tr style={{ backgroundColor: brandColors.InfoBlue, color: brandColors.PrimaryBackground }}>
                                        <th className="p-3 font-semibold text-sm uppercase">Phase</th>
                                        <th className="p-3 font-semibold text-sm uppercase">Activities</th>
                                        <th className="p-3 font-semibold text-sm uppercase">Duration</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    <tr className="border-b" style={{ borderColor: brandColors.GrayLight }}>
                                        <td className="p-3 font-medium" style={{color: brandColors.PrimaryText }}>Phase 1: Discovery</td>
                                        <td className="p-3" style={{color: brandColors.GrayDark }}>Assessment, workload classification, requirements gathering</td>
                                        <td className="p-3" style={{color: brandColors.GrayDark }}>4 weeks</td>
                                    </tr>
                                     <tr className="border-b" style={{ backgroundColor: brandColors.SecondaryBackground, borderColor: brandColors.GrayLight }}>
                                        <td className="p-3 font-medium" style={{color: brandColors.PrimaryText }}>Phase 2: Design</td>
                                        <td className="p-3" style={{color: brandColors.GrayDark }}>Architecture design, security planning, cost modeling</td>
                                        <td className="p-3" style={{color: brandColors.GrayDark }}>6 weeks</td>
                                    </tr>
                                     <tr className="border-b" style={{ borderColor: brandColors.GrayLight }}>
                                        <td className="p-3 font-medium" style={{color: brandColors.PrimaryText }}>Phase 3: Implementation</td>
                                        <td className="p-3" style={{color: brandColors.GrayDark }}>Infrastructure provisioning, migration of non-critical applications</td>
                                        <td className="p-3" style={{color: brandColors.GrayDark }}>8 weeks</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    {/* Cost Estimates Section */}
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-3" style={{ ...typography.subSectionTitle, color: brandColors.GrayDark }}>
                            2.3 Cost Estimates
                        </h3>
                        
                        <p className="mb-4" style={{ ...typography.body, color: brandColors.PrimaryText }}>
                            The following cost estimates are based on your current infrastructure requirements and expected growth over the next 12 months.
                        </p>
                        
                        {/* Pricing highlight */}
                        <div className="flex justify-between bg-gray-50 p-5 rounded-md mb-6 shadow-sm">
                            <div>
                                <p className="text-lg font-medium mb-1" style={{ color: brandColors.PrimaryText }}>Total Implementation Cost</p>
                                <p className="text-sm mb-1" style={{ color: brandColors.GrayDark }}>Including all services, labor, and training</p>
                                <p className="text-xs" style={{ color: brandColors.GrayMid }}>*Subject to final requirements validation</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold" style={{ color: brandColors.PrimaryAccent }}>$275,000</p>
                                <p className="text-xs text-right" style={{ color: brandColors.GrayMid }}>Estimated ROI: 18-24 months</p>
                            </div>
                        </div>
                        
                        <p className="text-sm italic" style={{ color: brandColors.GrayMid }}>
                            Note: Detailed cost breakdowns are provided in Appendix A. We'll schedule monthly optimization reviews 
                            to ensure you're getting the most value from your cloud investment.
                        </p>
                    </div>
                    
                    {/* Next Steps */}
                    <div className="p-4 rounded-md" style={{ backgroundColor: hexToRgba(brandColors.SecondaryAccent, 0.1) }}>
                        <h3 className="text-lg font-semibold mb-2" style={{ color: brandColors.SecondaryAccent }}>Next Steps</h3>
                        <p className="mb-3" style={{ ...typography.body, color: brandColors.PrimaryText }}>
                            To move forward with this proposal, we recommend scheduling a solution architecture workshop with your key stakeholders.
                        </p>
                        <p style={{ ...typography.body, color: brandColors.PrimaryText }}>
                            Contact your Primatif account manager to arrange this session and begin your cloud transformation journey.
                        </p>
                    </div>
                    
                    {/* Footer with page number */}
                    <div className="mt-12 pt-4 border-t text-center" style={{borderColor: brandColors.GrayLight}}>
                        <p className="text-xs" style={{color: brandColors.GrayMid}}>Enterprise Cloud Migration Strategy Proposal | Confidential</p>
                    </div>
                </div>
            </div>
        </WithSnippet>
    );
};

export default ProposalPage;
