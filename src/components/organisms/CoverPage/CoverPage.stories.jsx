import CoverPage from './CoverPage.jsx';

export default {
    title: 'Organisms/CoverPage',
    component: CoverPage,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        title: { control: 'text' },
        subtitle: { control: 'text' },
        description: { control: 'text' },
        contact: { control: 'text' },
        footerText: { control: 'text' },
        verticals: { control: 'object' },
    },
};

export const Default = {
    args: {},
};

export const ServiceSheet = {
    args: {
        title: "PRIMATIF",
        subtitle: "Services Overview",
        description: "This document provides a comprehensive overview of the services offered by Primatif. We partner with organizations of all sizes to provide expert consulting, engineering, and strategic guidance—empowering them to navigate their technological landscape with confidence and drive growth through innovation.",
        verticals: ["TECHNOLOGY", "EDUCATION", "ENTERTAINMENT"],
        contact: "hello@primatif.com",
        footerText: "Document valid as of June 2025",
    },
};

export const Proposal = {
    args: {
        title: "PRIMATIF",
        subtitle: "Project Proposal",
        description: "This proposal outlines our recommended approach for your upcoming technology initiative. Our team combines deep technical expertise with strategic business insight to deliver solutions that drive measurable results.",
        verticals: ["CONSULTING", "DEVELOPMENT", "STRATEGY"],
        contact: "proposals@primatif.com",
        footerText: "Proposal valid for 30 days",
    },
};

export const Report = {
    args: {
        title: "PRIMATIF",
        subtitle: "Technical Assessment Report",
        description: "This report presents our findings from the comprehensive technical assessment of your current systems, infrastructure, and development processes. Our recommendations focus on improving performance, scalability, and maintainability.",
        verticals: ["ASSESSMENT", "OPTIMIZATION", "MODERNIZATION"],
        contact: "reports@primatif.com",
        footerText: "Confidential - Internal Use Only",
    },
};

export const CustomVerticals = {
    args: {
        title: "ACME CORP",
        subtitle: "Annual Technology Review",
        description: "A comprehensive review of our technology initiatives, achievements, and strategic direction for the upcoming fiscal year.",
        verticals: ["INNOVATION", "GROWTH", "EFFICIENCY", "SECURITY"],
        contact: "tech@acmecorp.com",
        footerText: "© 2025 ACME Corp - Confidential",
    },
};
