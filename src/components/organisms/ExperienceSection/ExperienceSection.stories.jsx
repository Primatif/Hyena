import ExperienceSection from './ExperienceSection.jsx';

export default {
    title: 'Organisms/ExperienceSection',
    component: ExperienceSection,
    argTypes: {
        layout: {
            control: 'select',
            options: ['side-by-side', 'stacked'],
        },
    },
};

const mockCorporateExperience = [
    { name: 'Best Buy', key: 'bby' },
    { name: 'Federal Reserve of Minneapolis', key: 'frm' },
    { name: 'Calabrio', key: 'clb' },
    { name: 'Prime Digital Academy', key: 'pda' }
];

const mockClientExperience = [
    { name: "Faith's Lodge", key: 'fl' },
    { name: 'Can Do Canines', key: 'cdc' },
    { name: 'Wugs Vending', key: 'wv' },
    { name: 'Uniphy', key: 'up' },
    { name: 'Honey Does LLC', key: 'hd' },
    { name: 'Thermasolutions', key: 'ts' },
    { name: 'Gresser Companies', key: 'gc' },
    { name: 'Parentül (drama-freeparenting.com)', key: 'pdp' }
];

export const Default = {
    args: {
        corporateExperience: mockCorporateExperience,
        clientExperience: mockClientExperience,
    },
};

export const SideBySide = {
    args: {
        layout: 'side-by-side',
        corporateExperience: mockCorporateExperience,
        clientExperience: mockClientExperience,
    },
};

export const Stacked = {
    args: {
        layout: 'stacked',
        corporateExperience: mockCorporateExperience,
        clientExperience: mockClientExperience,
    },
};

export const CustomTitles = {
    args: {
        title: "Our Network & Partnerships",
        corporateTitle: "Enterprise Partners",
        clientTitle: "Clients & Organizations",
        corporateExperience: mockCorporateExperience.slice(0, 2),
        clientExperience: mockClientExperience.slice(0, 4),
    },
};

export const MinimalData = {
    args: {
        corporateExperience: [
            { name: 'Fortune 500 Company', key: 'f500' },
            { name: 'Technology Startup', key: 'tech' }
        ],
        clientExperience: [
            { name: 'Local Business', key: 'local' },
            { name: 'Non-Profit Organization', key: 'npo' }
        ],
    },
};
