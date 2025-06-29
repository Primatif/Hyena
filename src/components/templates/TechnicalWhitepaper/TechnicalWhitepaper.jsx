import React from 'react';
import { brandColors } from '../../../data/colors.js';
import { typography } from '../../../data/typography.js';
import { WithSnippet } from '../../molecules/WithSnippet/WithSnippet.jsx';

const TechnicalWhitepaper = () => {
    const snippet = (
        <ul>
            <li><strong>Purpose:</strong> A layout designed for long-form, text-heavy content like research papers, memos, and technical documentation, with a focus on readability and academic conventions.</li>
            <li><strong>Layout Structure:</strong>
                <ul>
                    <li><strong>Document Frame:</strong> The page is enclosed within a container that has a header and footer, separated by borders (<code>border-b</code>, <code>border-t</code>) using <code>GrayLight</code> for clear visual separation.</li>
                    <li><strong>Content Flow:</strong> A single-column layout optimized for reading, with structured sections for an abstract, numbered chapters, and a final reference list.</li>
                </ul>
            </li>
            <li><strong>Typography and Content Elements:</strong>
                <ul>
                    <li><strong>Hierarchy:</strong> A strong typographic hierarchy is established using <code>mainTitle</code> for chapter headings and <code>subTitle</code> for sections, both from <code>typography.js</code>.</li>
                    <li><strong>Body & Abstract:</strong> Body text uses <code>bodyText</code> for readability. The abstract is distinguished with an italic style and <code>GrayDark</code> color.</li>
                    <li><strong>Blockquote:</strong> Uses a prominent left border (<code>border-l-4</code>) styled with <code>SecondaryAccent</code> and italicized text to set apart quoted material.</li>
                    <li><strong>Lists:</strong> Demonstrates both unordered (<code>ul</code>) and ordered (<code>ol</code>) lists with standard disc and decimal styling for clear, structured information.</li>
                </ul>
            </li>
            <li><strong>Specialized Content Blocks:</strong>
                <ul>
                    <li><strong>Annotation Box:</strong> A container for side notes or important callouts. It is styled with a light <code>InfoBlueLight</code> background and a solid <code>InfoBlue</code> border to be noticeable but not distracting.</li>
                    <li><strong>Citations & References:</strong> Implements a simple academic citation system. Superscript tags (<code>&lt;sup&gt;</code>) are used in the text to denote a reference, which links to a numbered list (<code>&lt;ol&gt;</code>) in the 'References' section at the end.</li>
                </ul>
            </li>
            <li><strong>Color & Styling:</strong>
                <ul>
                    <li><strong>Primary Tones:</strong> Uses <code>PrimaryText</code> for all core content, ensuring high readability.</li>
                    <li><strong>Secondary Tones:</strong> <code>GrayDark</code> is used for supporting text like the abstract and blockquotes. <code>GrayMid</code> is used for footer text.</li>
                    <li><strong>Accent Colors:</strong> <code>SecondaryAccent</code> provides emphasis for the blockquote, while <code>InfoBlue</code> is used semantically for the informational annotation box.</li>
                </ul>
            </li>
            <li><strong>Key Implementation Details:</strong>
                <ul>
                    <li>Relies heavily on semantic HTML tags (<code>&lt;blockquote&gt;</code>, <code>&lt;sup&gt;</code>, <code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>) to ensure the document is accessible and machine-readable.</li>
                    <li>All styling is driven by centralized tokens from <code>colors.js</code> and <code>typography.js</code>, enforcing consistency.</li>
                </ul>
            </li>
        </ul>
    );

    return (
        <WithSnippet snippet={snippet}>
            <div>
                <h5 className="font-medium mb-2 text-gray-600">Technical Whitepaper Page</h5>
                <div className="p-8 shadow-lg" style={{border: `1px solid ${brandColors.GrayLight}`}}>
                    <div className="p-4 flex justify-between items-center border-b" style={{borderColor: brandColors.GrayLight}}>
                        <div className="font-bold text-2xl" style={{ ...typography.headerLogo, color: brandColors.PrimaryText }}>PRIMATIF</div>
                        <div className="text-sm" style={{color: brandColors.GrayMid}}>Technical Whitepaper</div>
                    </div>
                    <div className="py-8">
                        <p className="mb-6 text-base italic" style={{ color: brandColors.GrayDark }}>
                            <strong>Abstract:</strong> This document outlines a proposed framework for developing scalable and maintainable systems using microservices. It covers core architectural principles, data management strategies, and best practices for ensuring security and reliability.
                        </p>

                        <h2 className="text-2xl font-bold mb-3" style={{...typography.mainTitle, color: brandColors.PrimaryText}}>1. Introduction to Microservices Architecture</h2>
                        <p className="text-base mb-4" style={{...typography.bodyText, color: brandColors.PrimaryText}}>
                            The microservices architectural style is an approach to developing a single application as a suite of small services, each running in its own process and communicating with lightweight mechanisms. These services are built around business capabilities and independently deployable by fully automated deployment machinery. There is a bare minimum of centralized management of these services, which may be written in different programming languages and use different data storage technologies.<sup>[1]</sup>
                        </p>

                        <blockquote className="border-l-4 pl-4 italic my-6" style={{borderColor: brandColors.SecondaryAccent, color: brandColors.GrayDark}}>
                            "The key benefit of a microservices architecture is that it enables the continuous delivery and deployment of large, complex applications."
                        </blockquote>

                        <h3 className="text-xl font-semibold mt-6 mb-3" style={{...typography.subTitle, color: brandColors.PrimaryText}}>1.1 Core Principles</h3>
                        <p className="text-base mb-4" style={{...typography.bodyText, color: brandColors.PrimaryText}}>
                            Several core principles underpin a successful microservices architecture, including componentization via services, organization around business capabilities, and decentralized governance.
                        </p>
                        <ul className="list-disc list-inside mb-4 pl-4 text-base" style={{color: brandColors.PrimaryText}}>
                            <li>Services as components, not libraries.</li>
                            <li>Organized around business capabilities.</li>
                            <li>Decentralized data management and governance.</li>
                        </ul>

                        <div className="p-4 my-6 rounded-lg" style={{backgroundColor: brandColors.InfoBlueLight, border: `1px solid ${brandColors.InfoBlue}`}}>
                            <p className="font-bold text-sm mb-1" style={{color: brandColors.InfoBlue}}>ANNOTATION</p>
                            <p className="text-sm" style={{color: brandColors.PrimaryText}}>Note that while decentralized data management offers flexibility, it also introduces challenges in maintaining data consistency across services. This will be addressed in Section 2.</p>
                        </div>

                        <h2 className="text-2xl font-bold mt-8 mb-3" style={{...typography.mainTitle, color: brandColors.PrimaryText}}>2. Data Management Strategies</h2>
                        <p className="text-base mb-4" style={{...typography.bodyText, color: brandColors.PrimaryText}}>
                            Each microservice should have its own private database to ensure loose coupling. Communication between services should be done via well-defined APIs, not direct database calls. This is a critical pattern for maintaining service independence.<sup>[2]</sup>
                        </p>

                        <div className="mt-12 pt-4 border-t" style={{borderColor: brandColors.GrayLight}}>
                            <h3 className="text-lg font-semibold mb-2" style={{...typography.subTitle, color: brandColors.PrimaryText}}>References</h3>
                            <ol className="list-decimal list-inside text-sm space-y-1" style={{color: brandColors.GrayDark}}>
                                <li>Fowler, M., & Lewis, J. (2014). Microservices. martinfowler.com.</li>
                                <li>Newman, S. (2015). <em>Building Microservices: Designing Fine-Grained Systems</em>. O'Reilly Media.</li>
                            </ol>
                        </div>
                    </div>
                     <div className="p-4 text-center mt-8 border-t" style={{borderColor: brandColors.GrayLight}}>
                        <p className="text-xs" style={{color: brandColors.GrayMid}}>© {new Date().getFullYear()} Primatif | Page 1</p>
                    </div>
                </div>
            </div>
        </WithSnippet>
    );
};

export default TechnicalWhitepaper;
