import ServiceSection from './ServiceSection.jsx';

export default {
    title: 'Organisms/ServiceSection',
    component: ServiceSection,
    argTypes: {
        layout: {
            control: 'select',
            options: ['two-column', 'single-column', 'reverse'],
        },
        showQuestions: { control: 'boolean' },
    },
};

const mockService = {
    title: 'Software Engineering',
    description: "Specializing in the full lifecycle of software creation, from R&D to deployment and modernization. We help validate concepts through functional prototypes, build scalable solutions, and provide engineering management to ensure your technology drives business success.",
    benefits: [
        "Lead <strong>Research & Development (R&D)</strong> to create innovative, market-leading software solutions.",
        "Develop <strong>functional prototypes</strong> for rapid idea validation, crucial for pre-investor or pre-budget development.",
        "Offer <strong>engineering management and technical leadership</strong> for development teams, improving processes and outcomes.",
        "Collaborate on <strong>detailed scope development</strong> to ensure projects are delivered on time and on budget.",
        "Modernize legacy systems to <strong>reduce technical debt</strong> and increase maintainability for long-term value.",
        "<strong>Core Competencies:</strong> Node, Python, GoLang, JVM, .Net, SQL, Testing, Cloud (AWS, GCP), Full-Stack, DevOps, MicroServices, Observability, IaC, Virtualization."
    ],
    questions: [
        "Do you need a functional prototype to secure funding?",
        "Is your current software outdated, slow, or hard to maintain?",
        "Does your team need technical leadership to improve delivery?",
    ]
};

const mockImageSrc = "https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Software+Engineering";

export const Default = {
    args: {
        service: mockService,
        imageSrc: mockImageSrc,
    },
};

export const TwoColumn = {
    args: {
        service: mockService,
        imageSrc: mockImageSrc,
        layout: "two-column",
    },
};

export const Reverse = {
    args: {
        service: mockService,
        imageSrc: mockImageSrc,
        layout: "reverse",
    },
};

export const SingleColumn = {
    args: {
        service: mockService,
        imageSrc: mockImageSrc,
        layout: "single-column",
    },
};

export const WithoutQuestions = {
    args: {
        service: {
            ...mockService,
            questions: null,
        },
        imageSrc: mockImageSrc,
        showQuestions: false,
    },
};

export const DataScience = {
    args: {
        service: {
            title: 'Analytics and Data Science',
            description: "Transform your raw data into a strategic asset that drives competitive advantage. We specialize in exploratory R&D, market analysis, and building data systems that empower you to manage information effectively, uncover valuable insights, and foster a data-driven culture.",
            benefits: [
                "Conduct <strong>exploratory R&D</strong> to discover new market opportunities and competitive insights.",
                "Perform <strong>market analysis and competitive intelligence</strong> to inform strategic decisions.",
                "Build <strong>data management systems</strong> that organize, clean, and structure your information assets.",
                "Create <strong>predictive models and analytics</strong> to forecast trends and optimize operations.",
                "Develop <strong>data visualization and reporting</strong> tools for clear, actionable insights.",
                "<strong>Core Competencies:</strong> Python, R, SQL, Machine Learning, Statistical Analysis, Data Warehousing, Business Intelligence, Tableau, Power BI, Apache Spark, Hadoop, Cloud Analytics."
            ],
            questions: [
                "Are you struggling to make sense of your data?",
                "Do you need predictive insights for better decisions?",
                "Would automated reporting save your team time?",
            ]
        },
        imageSrc: "https://via.placeholder.com/600x400/10B981/FFFFFF?text=Data+Science",
    },
};
