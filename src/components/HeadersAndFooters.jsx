import React from 'react';
import { brandColors } from '../data/colors.js';
import { typography, fontWeights } from '../data/typography.js';
import { spacing } from '../data/spacing.js';
import ExampleSection from './ExampleSection.jsx';
import { WithSnippet } from './WithSnippet.jsx';

const HeadersAndFooters = () => {
    const snippets = {
        headerSimple: (
            <ul>
                <li><strong>Purpose:</strong> Provides consistent branding and document identification.</li>
                <li><strong>Tokens Used:</strong>
                    <ul>
                        <li><strong>Container Border:</strong> <code>brandColors.GrayLight</code></li>
                        <li><strong>Logo:</strong> An icon (32x32px) paired with text, using <code>typography.headerLogo</code> and <code>spacing.sm</code> for margin.</li>
                        <li><strong>Title:</strong> <code>typography.body</code>, <code>brandColors.GrayMid</code></li>
                    </ul>
                </li>
            </ul>
        ),
        headerNav: (
            <ul>
                <li><strong>Purpose:</strong> Extends the standard header with navigation links for primary site navigation.</li>
                <li><strong>Tokens Used:</strong>
                    <ul>
                        <li><strong>Logo:</strong> An icon (32x32px) paired with text, using <code>typography.headerLogo</code> and <code>spacing.sm</code>.</li>
                        <li><strong>Navigation Links:</strong> <code>typography.body</code>, <code>brandColors.PrimaryText</code></li>
                        <li><strong>Active/Hover Link:</strong> <code>brandColors.PrimaryAccent</code></li>
                    </ul>
                </li>
            </ul>
        ),
        footerSimple: (
            <ul>
                <li><strong>Purpose:</strong> A compact, unobtrusive footer for essential contact and copyright information.</li>
                <li><strong>Tokens Used:</strong>
                    <ul>
                        <li><strong>Background:</strong> <code>brandColors.GrayDark</code></li>
                        <li><strong>Logo:</strong> <code>typography.footerLogo</code>, <code>brandColors.PrimaryBackground</code></li>
                        <li><strong>Text:</strong> <code>typography.footerText</code>, <code>brandColors.GrayLight</code></li>
                    </ul>
                </li>
            </ul>
        ),
        footerMultiColumn: (
            <ul>
                <li><strong>Purpose:</strong> A comprehensive footer for site maps, legal links, and brand reinforcement.</li>
                <li><strong>Tokens Used:</strong>
                    <ul>
                        <li><strong>Background:</strong> <code>brandColors.GrayDark</code></li>
                        <li><strong>Section Headings:</strong> <code>typography.body</code>, <code>fontWeights.bold</code>, <code>brandColors.PrimaryBackground</code></li>
                        <li><strong>Links:</strong> <code>typography.footerText</code>, <code>brandColors.GrayLight</code></li>
                    </ul>
                </li>
            </ul>
        ),
    };

    return (
        <ExampleSection 
            title="Headers & Footers" 
            commentary="Headers and Footers provide a consistent brand frame for all documents. These examples are fully token-driven, ensuring they align with the design system."
        >
            <div className="space-y-8">
                <WithSnippet snippet={snippets.headerSimple}>
                    <h4 style={{...typography.h4, color: brandColors.PrimaryText}}>Standard Header</h4>
                    <div className="p-4 flex justify-between items-center rounded-lg" style={{border: `1px solid ${brandColors.GrayLight}`}}>
                        <div className="flex items-center">
                            <img src="/images/logo_icon.png" alt="Primatif Logo" className="h-8 w-8" />
                            <div style={{ ...typography.headerLogo, color: brandColors.PrimaryText, marginLeft: spacing.sm }}>PRIMATIF</div>
                        </div>
                        <div style={{...typography.body, color: brandColors.GrayMid}}>Document Title</div>
                    </div>
                </WithSnippet>

                <WithSnippet snippet={snippets.headerNav}>
                    <h4 style={{...typography.h4, color: brandColors.PrimaryText}}>Header with Navigation</h4>
                    <div className="p-4 flex justify-between items-center rounded-lg" style={{border: `1px solid ${brandColors.GrayLight}`}}>
                        <div className="flex items-center">
                            <img src="/images/logo_icon.png" alt="Primatif Logo" className="h-8 w-8" />
                            <div style={{ ...typography.headerLogo, color: brandColors.PrimaryText, marginLeft: spacing.sm }}>PRIMATIF</div>
                        </div>
                        <nav>
                            <ul className="flex items-center space-x-6">
                                <li><a href="#" style={{...typography.body, color: brandColors.PrimaryText}}>Home</a></li>
                                <li><a href="#" style={{...typography.body, color: brandColors.PrimaryText}}>About</a></li>
                                <li><a href="#" style={{...typography.body, color: brandColors.PrimaryAccent}}>Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </WithSnippet>

                <WithSnippet snippet={snippets.footerSimple}>
                    <h4 style={{...typography.h4, color: brandColors.PrimaryText}}>Standard Footer</h4>
                    <div className="p-4 text-center rounded-lg" style={{backgroundColor: brandColors.GrayDark}}>
                        <div style={{ ...typography.footerLogo, color: brandColors.PrimaryBackground }}>PRIMATIF</div>
                        <p style={{...typography.footerText, color: brandColors.GrayLight, marginTop: '0.25rem'}}>
                            © 2025 Primatif | hello@primatif.com
                        </p>
                    </div>
                </WithSnippet>

                <WithSnippet snippet={snippets.footerMultiColumn}>
                    <h4 style={{...typography.h4, color: brandColors.PrimaryText}}>Multi-column Footer</h4>
                    <div className="p-8 rounded-lg" style={{backgroundColor: brandColors.GrayDark}}>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div className="col-span-1">
                                <div style={{ ...typography.footerLogo, color: brandColors.PrimaryBackground }}>PRIMATIF</div>
                                <p style={{ ...typography.footerText, color: brandColors.GrayLight, marginTop: '1rem' }}>© 2025 Primatif. All Rights Reserved.</p>
                            </div>
                            <div className="col-span-1">
                                <h5 style={{...typography.body, fontWeight: fontWeights.bold, color: brandColors.PrimaryBackground, marginBottom: '1rem'}}>Product</h5>
                                <ul className="space-y-2">
                                    <li><a href="#" style={{...typography.footerText, color: brandColors.GrayLight}}>Features</a></li>
                                    <li><a href="#" style={{...typography.footerText, color: brandColors.GrayLight}}>Pricing</a></li>
                                    <li><a href="#" style={{...typography.footerText, color: brandColors.GrayLight}}>Docs</a></li>
                                </ul>
                            </div>
                            <div className="col-span-1">
                                <h5 style={{...typography.body, fontWeight: fontWeights.bold, color: brandColors.PrimaryBackground, marginBottom: '1rem'}}>Company</h5>
                                <ul className="space-y-2">
                                    <li><a href="#" style={{...typography.footerText, color: brandColors.GrayLight}}>About Us</a></li>
                                    <li><a href="#" style={{...typography.footerText, color: brandColors.GrayLight}}>Careers</a></li>
                                    <li><a href="#" style={{...typography.footerText, color: brandColors.GrayLight}}>Contact</a></li>
                                </ul>
                            </div>
                            <div className="col-span-1">
                                <h5 style={{...typography.body, fontWeight: fontWeights.bold, color: brandColors.PrimaryBackground, marginBottom: '1rem'}}>Legal</h5>
                                <ul className="space-y-2">
                                    <li><a href="#" style={{...typography.footerText, color: brandColors.GrayLight}}>Privacy Policy</a></li>
                                    <li><a href="#" style={{...typography.footerText, color: brandColors.GrayLight}}>Terms of Service</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </WithSnippet>
            </div>
        </ExampleSection>
    );
};

export default HeadersAndFooters;