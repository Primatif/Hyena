import PageFrame from './PageFrame.jsx';

export default {
    title: 'Molecules/PageFrame',
    component: PageFrame,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        headerTitle: { control: 'text' },
        headerSubtitle: { control: 'text' },
        footerLeft: { control: 'text' },
        showPageNumbers: { control: 'boolean' },
        pageNumber: { control: 'number' },
        totalPages: { control: 'number' },
    },
};

export const Default = {
    args: {
        children: (
            <div style={{ padding: '2rem' }}>
                <h3>Sample Content</h3>
                <p>This is example content inside the PageFrame molecule.</p>
                <p>The PageFrame provides a consistent layout for documents with header, content area, and footer.</p>
            </div>
        ),
    },
};

export const ServiceSheet = {
    args: {
        headerTitle: "PRIMATIF",
        headerSubtitle: "Services Overview",
        footerLeft: "© 2025 Primatif | hello@primatif.com",
        pageNumber: 1,
        totalPages: 3,
        children: (
            <div style={{ padding: '2rem' }}>
                <h3>Service Sheet Content</h3>
                <p>Specialized content for service documentation.</p>
            </div>
        ),
    },
};

export const Proposal = {
    args: {
        headerTitle: "PRIMATIF",
        headerSubtitle: "Project Proposal",
        footerLeft: "© 2025 Primatif | Confidential",
        pageNumber: 2,
        totalPages: 8,
        showPageNumbers: true,
        children: (
            <div style={{ padding: '2rem' }}>
                <h3>Proposal Content</h3>
                <p>Example showing how PageFrame can be reused for different document types.</p>
            </div>
        ),
    },
};

export const WithoutPageNumbers = {
    args: {
        headerTitle: "PRIMATIF",
        headerSubtitle: "Executive Summary",
        showPageNumbers: false,
        children: (
            <div style={{ padding: '2rem' }}>
                <h3>Document without page numbers</h3>
                <p>Some documents don't need pagination display.</p>
            </div>
        ),
    },
};
