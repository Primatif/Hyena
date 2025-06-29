# Hyena

<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@400;700&family=Lato:wght@400&display=swap" rel="stylesheet">

## Primatif's Design System & Style Guide

<p align="center">
<img src="images/animated_card.gif" alt="Animated Card" width="400"/>
</p>

**Hyena** is Primatif's comprehensive design system that transforms generic AI-generated content into brand-intelligent materials. It provides an AI-consumable foundation of design tokens, patterns, and templates that ensure consistent, professional brand expression across all generated content.

## Architecture Overview

**Hyena** is built on **Atomic Design principles**, organizing components into a hierarchical system that promotes reusability, consistency, and maintainability.

### **Atomic Design System**

#### **Atoms** - Basic building blocks
- **Colors & Tokens** - Brand colors, spacing, and design tokens
- **Typography** - Text, Heading, and typographic elements
- **Form Elements** - Input, Button, Badge, and interactive components
- **Media** - Image and visual content atoms
- **Layout** - Card, Container, and structural elements

#### **Molecules** - Simple component combinations
- **Navigation** - Menu and navigation patterns
- **Callouts** - Information boxes and alerts
- **Code Blocks** - Syntax highlighting and code display
- **Page Frames** - Layout containers with headers/footers
- **Color Displays** - Palette and color presentation components

#### **Organisms** - Complex component assemblies
- **Style Guide Sections** - Typography, Buttons, Tables, Patterns
- **Service Components** - ServiceSection, ExperienceSection, CoverPage
- **Content Layouts** - HeadersAndFooters, Diagrams, Spacing
- **Interactive Displays** - ColorPalette, ImageReferences

#### **Templates** - Page-level layouts
- **Application Templates** - ChatInterface, DataDashboard, EbookReader
- **Business Templates** - ProposalCover, InternalReport, TechnicalWhitepaper
- **Interactive Templates** - FormElements, TodoList, PersonalBanking
- **Layout Systems** - Comprehensive layout demonstrations

### **Storybook Integration**

Every atomic component includes **Storybook stories** for:
- **Component Documentation** - Usage examples and API reference
- **Visual Testing** - All component states and variations
- **Design QA** - Consistent implementation across the system
- **Developer Experience** - Interactive component playground

### **Generated Documents**
- **Style Guide** - Interactive design system documentation
- **Service Sheet** - Professional service overview (fully atomic)
- **PDF Export** - Automated generation of print-ready documents

<p align="center">
  <img src="images/top_banner.png" alt="Hyena Brand Banner" width="800"/>
</p>

## Project Purpose

**Hyena** solves the critical gap between generic AI-generated content and authentic brand expression. Current generative tools produce visually generic outputs that fail to capture brand identity, making it difficult to create professional, cohesive materials.

**Our Solution:**
- **Centralized Design Tokens** - Systematic color palettes, typography scales, spacing, and visual patterns
- **AI-Consumable Standards** - Structured guidelines enabling intelligent content generation
- **Multi-Format Output** - Consistent brand identity across digital and print contexts
- **Automated Quality** - Scalable content production with maintained professional standards

**Primary Applications:**
- Digital canvas generation (social media, presentations, web content)
- Print-ready outputs (brochures, marketing collateral, branded documents)  
- Multi-format campaigns with consistent brand identity
- Automated design systems for scalable content production

This foundation transforms generic AI generation into **brand-intelligent content creation**, ensuring every generated piece maintains authentic brand expression and professional quality.

## Screenshots

<table>
  <tr>
    <td><img src="images/screenshot_01.png" alt="Style Guide Screenshot 1" width="400"/></td>
    <td><img src="images/screenshot_02.png" alt="Style Guide Screenshot 2" width="400"/></td>
  </tr>
</table>

## Quick Reference

**Colors**: Primary palette with functional tones (grays, backgrounds) and semantic colors (success, error, warning, info)  
**Typography**: Bebas Neue for headlines, Roboto for headings/body, Lato for supporting text  
**Patterns**: 9 checkered background patterns using tokenized color pairs  
**Components**: Interactive buttons, tables, and layout examples with code snippets

_For complete specifications and interactive examples, run the development server._

## Features

### **Atomic Design System**
- **Component Hierarchy** - Atoms, Molecules, Organisms, and Templates
- **Token-Driven Design** - Centralized design tokens for consistency
- **Composable Architecture** - Reusable components at every level
- **Type-Safe Props** - Consistent component APIs across the system

### **Storybook Integration**
- **Component Documentation** - Interactive component catalog
- **Visual Testing** - All component states and variations
- **Design System QA** - Consistent implementation verification
- **Developer Playground** - Real-time component experimentation

### **Design Foundation**
- **Interactive Color Palettes** - Brand colors, functional tones, and semantic colors
- **Typography System** - Font hierarchy and usage guidelines with atomic Text/Heading components
- **Pattern System** - 9 distinct background patterns with tokenized color pairs
- **Responsive Design** - Mobile-first approach with defined breakpoints

### **Generated Documents**
- **Atomic Service Sheet** - Professional service overview built entirely from atomic components
- **Interactive Style Guide** - Live documentation with component examples
- **PDF Export** - Generate downloadable style guide and service documents
- **Layout Templates** - Comprehensive page-level layout demonstrations

## Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation & Development

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

3. **Launch Storybook** (recommended for component development)

   ```bash
   npm run storybook
   ```

4. **Open in browser**
   - **Style Guide**: Navigate to `http://localhost:5173`
   - **Storybook**: Navigate to `http://localhost:6006`
   - Both support hot reloading for rapid development

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

### PDF Generation

This project includes scripts to generate versioned, print-ready PDFs for both the style guide and service materials.

#### Style Guide PDF
```bash
npm run generate-pdf
```

#### Service Sheet PDF
```bash
npm run pdf:service-sheet
```

Both scripts build the project, launch a headless browser, and save scaled PDFs to the [`output/`](./output/) directory with automatic versioning.

### Output Directory

The [`output/`](./output/) directory contains generated PDF documents:

- **`output/style-guide/`** - Complete style guide PDFs (`primatif-style-guide-v*.pdf`)
- **`output/service-sheet/`** - Service overview documents (`primatif-service-sheet-v*.pdf`)

Each PDF is automatically versioned to preserve iterations and enable easy sharing of specific document versions.

## Service Sheet

The project includes a **Service Sheet** feature that generates professional service overview documents using the centralized design system. This demonstrates practical application of the design tokens in real business collateral.

**Key Features:**
- **Tokenized Styling**: All colors, typography, and spacing reference centralized design tokens
- **Modular Architecture**: Separate CSS file (`ServiceSheet.css`) with dynamic token injection (`ServiceSheet.styles.js`)
- **Brand Consistency**: Accent patterns and decorative elements using the established color system
- **Print Optimization**: Larger layout format (10.625" × 13.75") with proper print considerations
- **PDF Generation**: Automated screenshot-based PDF creation with pixel-perfect fidelity

**Design System Integration:**
- Demonstrates external CSS with tokenized values
- Showcases the new `accent` pattern (red on light gray)
- Uses dynamic CSS custom property injection for token application
- Maintains brand consistency across all visual elements

The Service Sheet serves as both a functional business tool and a reference implementation for applying the design system to real-world documents.

## Tech Stack

- **React 19** - Modern React with latest features
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **JavaScript (JSX)** - Component-based architecture

## Project Structure

```
src/
├── components/
│   ├── atoms/           # Basic building blocks
│   │   ├── Badge/
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Container/
│   │   ├── Heading/
│   │   ├── Image/
│   │   ├── Input/
│   │   ├── Text/
│   │   └── Textarea/
│   ├── molecules/       # Simple combinations
│   │   ├── Callout/
│   │   ├── CodeBlock/
│   │   ├── ColorDisplayTable/
│   │   ├── Navigation/
│   │   └── PageFrame/
│   ├── organisms/       # Complex assemblies
│   │   ├── Buttons/
│   │   ├── ColorPalette/
│   │   ├── CoverPage/
│   │   ├── ExperienceSection/
│   │   ├── ServiceSection/
│   │   └── Typography/
│   └── templates/       # Page-level layouts
│       ├── ChatInterface/
│       ├── DataDashboard/
│       ├── FormElements/
│       └── Layouts/
├── data/               # Design tokens and content
│   ├── colors.js       # Centralized color tokens
│   ├── patterns.js     # Background patterns
│   └── services.js     # Service content data
├── pages/              # Application pages
│   ├── collateral/ServiceSheet/
│   └── style-guide/
├── App.jsx             # Main application router
├── main.jsx            # React app entry point
└── index.css           # Global styles

.storybook/             # Storybook configuration
├── main.js
└── preview.jsx

config/
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── postcss.config.js   # PostCSS configuration
```

## Available Scripts

### **Development**
- `npm run dev` - Start development server (`http://localhost:5173`)
- `npm run storybook` - Launch Storybook (`http://localhost:6006`)
- `npm run build-storybook` - Build static Storybook for deployment

### **Production**
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### **PDF Generation**
- `npm run generate-pdf` - Generate a PDF of the style guide
- `npm run pdf:service-sheet` - Generate a PDF of the service sheet

### **Quality Assurance**
- `npm run lint` - Run ESLint

## Deployment

This is a standard Vite React application that can be deployed to any static hosting service:

- **Netlify** - Drag and drop the `dist/` folder
- **Vercel** - Connect your Git repository
- **GitHub Pages** - Use GitHub Actions for automatic deployment

## License

This project is proprietary software owned by Primatif. All rights reserved.

**Copyright 2025 Primatif**

This software and associated documentation files are the exclusive property of Primatif. No part of this software may be reproduced, distributed, or transmitted in any form or by any means without the prior written permission of Primatif.

For licensing inquiries, contact: **hello@primatif.com**

See the [LICENSE](LICENSE) file for complete terms and conditions.

---
