import React from 'react';
import { injectServiceSheetStyles } from './ServiceSheet.styles.js';
import './ServiceSheet.css';

// Import atomic components
import PageFrame from '../../../components/molecules/PageFrame/PageFrame.jsx';
import CoverPage from '../../../components/organisms/CoverPage/CoverPage.jsx';
import ServiceSection from '../../../components/organisms/ServiceSection/ServiceSection.jsx';
import ExperienceSection from '../../../components/organisms/ExperienceSection/ExperienceSection.jsx';

// Import centralized design tokens
import { brandColors } from '../../../data/colors.js';
import { typography } from '../../../data/typography.js';
import { patterns, patternSizes } from '../../../data/patterns.js';
import { hexToRgba } from '../../../data/utils.js';

import softwareEngImage from './images/01_software-engineering.png';
import businessProcessImage from './images/02_business-process.png';
import generalTechImage from './images/03_general-tech.png';
import analyticsImage from './images/04_analytics-datascience.png';
import genAiImage from './images/05_gen-ai.png';
import hiringImage from './images/06_hiring-interviewing.png';

// --- DATA STRUCTURE ---
const servicesData = [
    {
        id: 'software-eng',
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
    },
    {
        id: 'tech-mgmt',
        title: 'Technology Business and Process Management',
        description: "Align your technology investments directly with your business objectives to maximize ROI. We analyze your current systems and workflows to identify opportunities for streamlining operations, improving efficiency, and building resilient processes for sustainable growth.",
        benefits: [
            "Develop <strong>enterprise architecture models</strong> that provide a clear blueprint of your technology landscape.",
            "Conduct thorough <strong>gap analysis</strong> to identify discrepancies between current capabilities and strategic goals.",
            "Implement effective <strong>risk management frameworks</strong> to proactively address technology and process-related challenges.",
            "Facilitate <strong>change management</strong> to ensure successful adoption of new technologies and optimized workflows.",
            "Develop a <strong>clear technology roadmap</strong> to guide strategic IT investments and ensure they deliver business value."
        ],
        questions: [
            "Are your technology costs increasing without clear business benefits?",
            "Do different departments use conflicting or redundant software?",
            "Do you lack a clear, long-term plan for your IT investments?",
        ]
    },
    {
        id: 'gen-consulting',
        title: 'General Tech Consulting and Task Execution',
        description: "Versatile tech consulting and hands-on task execution to address your unique business challenges. We offer expert project management, bridge the gap between technical and business teams, and conduct thorough reviews of technical work to provide actionable, high-impact recommendations.",
        benefits: [
            "Offer <strong>project management support</strong>, including Agile/Scrum alignment and process optimization.",
            "<strong>Review technical work</strong>, providing clear recommendations for refinements and improvements.",
            "Assist with the <strong>development and maintenance of task boards</strong> (e.g., Jira, Trello) to improve team velocity.",
            "Work with staff to help <strong>define and solidify goals</strong> for major projects and initiatives.",
            "Get flexible, expert support for specific technology problems or projects, avoiding the cost of a full-time hire."
        ],
        questions: [
            "Is there a communication breakdown between your business and tech teams?",
            "Are projects consistently delayed or over budget?",
            "Do you need an expert to review a technical proposal or a vendor's work?",
        ]
    },
    {
        id: 'analytics',
        title: 'Analytics and Data Science',
        description: "Transform your raw data into a strategic asset that drives competitive advantage. We specialize in exploratory R&D, market analysis, and building data systems that empower you to manage information effectively, uncover valuable insights, and foster a data-driven culture.",
        benefits: [
            "Conduct <strong>exploratory research</strong>, including <strong>competitor analysis</strong> using public and private data.",
            "Perform <strong>web crawling and public data extraction</strong> to gather relevant market and industry intelligence.",
            "Compile findings into <strong>notebook-based reports</strong> that make complex data understandable and actionable.",
            "<strong>Manage and migrate data</strong>, creating unified systems for effective and secure data organization.",
            "Create <strong>APIs to access and organize data</strong>, enabling easy integration and informed decision-making."
        ],
        questions: [
            "Is your data spread across multiple, disconnected systems?",
            "Do you need to understand what your competitors are doing online?",
            "Are you making business decisions based on intuition instead of data?",
        ]
    },
    {
        id: 'gen-ai',
        title: 'Generative AI Tools and Techniques',
        description: "Unlock the transformative power of Generative AI. We guide businesses in responsibly harnessing a wide array of AI tools, from creating stunning visuals to optimizing workflows and fostering innovation through custom AI solutions that provide a clear competitive edge.",
        benefits: [
            "Leverage expertise in <strong>generative art and graphic design</strong> applications (Midjourney, Imagen, Canva).",
            "Conduct <strong>Generative Research</strong> to uncover novel insights and creative solutions to complex problems.",
            "Facilitate teaching and use of AI tools (NotebookLM, Gemini, Claude) for <strong>immediate productivity gains</strong>.",
            "Provide tutorials for creating <strong>custom AI assistants (GPTs)</strong> that leverage your company's internal data.",
            "Implement and teach <strong>Generative Coding techniques</strong> for accelerated software development and prototyping."
        ],
        questions: [
            "Could your team's productivity be boosted by AI-powered tools?",
            "Do you want to create custom graphics or text without hiring a specialist?",
            "Are you interested in a custom AI assistant trained on your own documents?",
        ]
    },
    {
        id: 'hiring',
        title: 'Hiring and Interviewing Assistance',
        description: "Build a high-performing technical team faster. We go beyond standard recruitment by conducting in-depth technical screenings and designing custom skill verification challenges. Our support helps you define roles effectively, attract top talent, and make confident hiring decisions.",
        benefits: [
            "Conduct thorough <strong>technical screenings</strong> to accurately assess candidate capabilities.",
            "Design <strong>custom skill verification challenges</strong> that are directly relevant to the role.",
            "Define technical roles more effectively to <strong>attract a better pool of qualified candidates</strong>.",
            "<strong>Reduce time-to-hire</strong> for critical technical roles, saving time and recruitment costs.",
            "Receive <strong>unbiased, expert support</strong> to make more confident technical hiring decisions."
        ],
        questions: [
            "Are you struggling to evaluate the technical skills of job candidates?",
            "Is your hiring process for tech roles taking too long?",
            "Do you need help creating relevant job descriptions that attract top talent?",
        ]
    }
];

const serviceImages = {
    'software-eng': softwareEngImage,
    'tech-mgmt': businessProcessImage,
    'gen-consulting': generalTechImage,
    'analytics': analyticsImage,
    'gen-ai': genAiImage,
    'hiring': hiringImage,
};

const experienceData = {
    corporate: [
        { name: 'Best Buy', key: 'bby' },
        { name: 'Federal Reserve of Minneapolis', key: 'frm' },
        { name: 'Calabrio', key: 'clb' },
        { name: 'Prime Digital Academy', key: 'pda' }
    ],
    client: [
        { name: "Faith's Lodge", key: 'fl' },
        { name: 'Can Do Canines', key: 'cdc' },
        { name: 'Wugs Vending', key: 'wv' },
        { name: 'Uniphy', key: 'up' },
        { name: 'Honey Does LLC', key: 'hd' },
        { name: 'Thermasolutions', key: 'ts' },
        { name: 'Gresser Companies', key: 'gc' },
        { name: 'Parentül (drama-freeparenting.com)', key: 'pdp' }
    ]
};

// --- UTILITY FUNCTIONS ---
const chunk = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size));
    }
    return chunks;
};

// --- HELPER FUNCTIONS ---
const chunkArray = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
  arr.slice(i * size, i * size + size)
);



// --- MAIN APP COMPONENT ---
export default function Collateral() {
    const servicesByPage = chunkArray(servicesData, 2);
    const totalPages = 1 + servicesByPage.length + 1; // Cover + Service pages + Experience page

    React.useEffect(() => {
        injectServiceSheetStyles();
    }, []);

    return (
        <div className="service-sheet-wrapper">
            <div id="collateral-content" className="service-sheet-container">
                <div className="space-y-8">
                    {/* Page 1: Cover */}
                    <CoverPage />

                    {/* Service Pages */}
                    {servicesByPage.map((services, pageIndex) => (
                        <PageFrame 
                            key={pageIndex} 
                            pageNumber={pageIndex + 2} 
                            totalPages={totalPages}
                            headerSubtitle="Services Overview"
                        >
                            <div className="space-y-12">
                                {services.map((service, serviceIndex) => (
                                    <ServiceSection key={service.id} service={service} imageSrc={serviceImages[service.id]} />
                                ))}
                            </div>
                        </PageFrame>
                    ))}

                    {/* Experience Page */}
                    <PageFrame 
                        pageNumber={totalPages} 
                        totalPages={totalPages}
                        headerSubtitle="Services Overview"
                    >
                        <ExperienceSection 
                            corporateExperience={experienceData.corporate}
                            clientExperience={experienceData.client}
                        />
                    </PageFrame>
                </div>
            </div>
        </div>
    );
}
