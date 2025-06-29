import React from 'react';
import { brandColors } from '../../../data/colors.js';
import { typography } from '../../../data/typography.js';
import { WithSnippet } from '../../molecules/WithSnippet/WithSnippet.jsx';
import { hexToRgba } from '../../../data/utils.js';

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
                    <li><strong>Document Structure:</strong> The layout mimics a formal business document with proper headers, sections, and footers.</li>
                    <li><strong>Responsive Tables:</strong> Uses <code>overflow-x-auto</code> to ensure tables remain accessible on smaller screens.</li>
                    <li><strong>Visual Hierarchy:</strong> Strong typographic hierarchy guides readers through complex information systematically.</li>
                    <li><strong>Professional Styling:</strong> Employs subtle shadows, borders, and background colors to create visual separation and emphasis.</li>
                </ul>
            </li>
        </ul>
    );

    return (
        <WithSnippet snippet={snippet}>
            <div>
                <h5 className="font-medium mb-2 text-gray-600">Business Proposal Page</h5>
                <div className="max-w-4xl mx-auto bg-white shadow-lg">
                    {/* Header */}
                    <div className="flex justify-between items-center p-6 border-b" style={{borderColor: brandColors.GrayLight}}>
                        <div className="font-bold text-xl" style={{ ...typography.headerLogo, color: brandColors.PrimaryText }}>PRIMATIF</div>
                        <div className="text-sm" style={{color: brandColors.GrayMid}}>Enterprise Cloud Migration Strategy</div>
                    </div>
                    
                    {/* Page Content */}
                    <div className="p-8">
                        {/* Intro Section */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold mb-4" style={{ ...typography.sectionTitle, color: brandColors.PrimaryText }}>
                                2. Recommended Cloud Architecture
                            </h2>
                            
                            <p className="mb-4" style={{ ...typography.body, color: brandColors.PrimaryText }}>
                                Based on our comprehensive assessment of your current IT infrastructure and business requirements, 
                                we recommend a hybrid cloud architecture that balances performance, security, and cost-effectiveness.
                            </p>
                            
                            {/* Callout Box */}
                            <div className="flex items-start p-4 rounded-md shadow-sm mb-6 border" 
                                 style={{ 
                                     backgroundColor: hexToRgba(brandColors.InfoBlueLight, 0.3), 
                                     borderColor: brandColors.GrayLight 
                                 }}>
                                <div className="mr-3 mt-1" style={{ color: brandColors.InfoBlue }}>
                                    <Icon type="info" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2" style={{ color: brandColors.SecondaryAccent }}>Key Recommendation</h4>
                                    <p style={{ ...typography.body, color: brandColors.PrimaryText }}>
                                        We recommend starting with a pilot migration of your development and testing environments 
                                        to minimize risk while demonstrating value. This approach allows for iterative learning 
                                        and optimization before migrating mission-critical production workloads.
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
            </div>
        </WithSnippet>
    );
};

export default ProposalPage;
