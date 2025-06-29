import InstructionBlock from './InstructionBlock.jsx';

export default {
    title: 'Molecules/InstructionBlock',
    component: InstructionBlock,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        title: {
            control: 'text',
            description: 'Title displayed in the header'
        },
        variant: {
            control: { type: 'select' },
            options: ['code', 'text'],
            description: 'Visual style variant'
        },
        showCopyButton: {
            control: 'boolean',
            description: 'Whether to show the copy button'
        }
    }
};

const sampleSystemInstructions = `As an AI, this document is your primary instruction set for all visual and interactive design tasks. Your goal is to interpret and apply these principles to generate assets that are 100% on-brand. Adhere to the following directives:

1. Consume Design Tokens: All colors, fonts, spacing units, and other stylistic properties are defined as tokens in the src/data/ directory. NEVER use hardcoded values. Always reference the appropriate token (e.g., brandColors.PrimaryAccent, typography.bodyText). The name of the token reveals its semantic purpose.

2. Interpret Component Structure: The components defined in this guide are your blueprints. Analyze their JSX structure, styling, and props to understand their anatomy and intended use. For example, a Button component's variant prop dictates its visual hierarchy.

3. Prioritize Semantic Meaning: Do not just copy styles. Understand why a style is used. ErrorRed is for error states, PrimaryAccent is for key calls-to-action. Apply the same logic when designing new elements.`;

const sampleCodeSnippet = `import { brandColors } from './data/colors.js';
import { typography } from './data/typography.js';

const MyComponent = () => {
    return (
        <div style={{
            color: brandColors.PrimaryText,
            backgroundColor: brandColors.SecondaryBackground,
            ...typography.body
        }}>
            Token-driven component
        </div>
    );
};`;

export const SystemInstructions = {
    args: {
        title: "{System} Instructions",
        variant: "text",
        showCopyButton: true,
        children: sampleSystemInstructions
    }
};

export const CodeBlock = {
    args: {
        title: "Code Example",
        variant: "code",
        showCopyButton: true,
        children: sampleCodeSnippet
    }
};

export const WithoutCopyButton = {
    args: {
        title: "Information Block",
        variant: "text",
        showCopyButton: false,
        children: "This instruction block doesn't have a copy button for cases where copying isn't needed."
    }
};

export const CustomTitle = {
    args: {
        title: "Custom Instructions",
        variant: "code",
        showCopyButton: true,
        children: "// This is a custom instruction block\n// with a different title"
    }
};
