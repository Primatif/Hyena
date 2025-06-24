# Primatif Style Guide 🐺

<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@400;700&family=Lato:wght@400&display=swap" rel="stylesheet">

This style guide is the foundation for all brand communications. Much like component libraries such as **Storybook.js** or UI frameworks provide reusable building blocks for developers, this guide serves a similar purpose for both **humans and AI**, ensuring a consistent and professional identity across all mediums.

For designers and developers, it offers a clear set of rules and examples to ensure consistency across all manually created assets. For **generative AI**, this guide acts as a structured source of truth. By referencing the defined tokens, patterns, and component snippets, AI systems can create a wide range of visually consistent, on-brand graphics, from UI mockups to marketing materials.

## Brand Identity

<p align="center">
  <img src="images/primatif-business-cards_Design 1 Front.png" alt="Primatif Business Card" width="400"/>
</p>

Our brand balances **professionalism with innovation**. This style guide is the foundation for creating all brand communications, ensuring a consistent, professional, and innovative identity across all mediums. These are not strict rules but a framework to empower creativity while maintaining the reliability our brand stands for.

### Core Brand Philosophy
- **Consistent** - Unified visual language across all touchpoints
- **Professional** - Clean, trustworthy, and reliable aesthetic
- **Innovative** - Modern approach that embraces new possibilities
- **Flexible** - Guidelines that empower creative solutions

## Quick Reference

*For complete guidelines and interactive examples, view the full style guide in the application.*

### Colors
*These colors are defined with specific tokens in the style guide application.*

<h4>Brand Colors</h4>
<table>
  <tr>
    <th style="width: 20px;">Swatch</th>
    <th>Name</th>
    <th>Token</th>
    <th>Hex</th>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-E31937?style=flat-square&logoColor=E31937" width="20" height="20" alt=""/></td>
    <td><strong>Primatif Red</strong></td>
    <td><code>PrimaryAccent</code></td>
    <td><code>#E31937</code></td>
  </tr>

  <tr>
    <td><img src="https://img.shields.io/badge/-%20-5C0411?style=flat-square&logoColor=5C0411" width="20" height="20" alt=""/></td>
    <td><strong>Primatif Red Darker</strong></td>
    <td><code>PrimaryAccentDarker</code></td>
    <td><code>#5C0411</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-53C8ED?style=flat-square&logoColor=53C8ED" width="20" height="20" alt=""/></td>
    <td><strong>Primatif Sky Blue</strong></td>
    <td><code>SecondaryAccent</code></td>
    <td><code>#53C8ED</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-A0DFF2?style=flat-square&logoColor=A0DFF2" width="20" height="20" alt=""/></td>
    <td><strong>Sky Blue Light</strong></td>
    <td><code>AccentSkyBlue</code></td>
    <td><code>#A0DFF2</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-0080A4?style=flat-square&logoColor=0080A4" width="20" height="20" alt=""/></td>
    <td><strong>Deep Blue</strong></td>
    <td><code>AccentDeepBlue</code></td>
    <td><code>#0080A4</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-08FF08?style=flat-square&logoColor=08FF08" width="20" height="20" alt=""/></td>
    <td><strong>Green Screen Green</strong></td>
    <td><code>TertiaryAccent</code></td>
    <td><code>#08FF08</code></td>
  </tr>
</table>

<h4>Functional Tones</h4>
<table>
  <tr>
    <th style="width: 20px;">Swatch</th>
    <th>Name</th>
    <th>Token</th>
    <th>Hex</th>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-212121?style=flat-square&logoColor=212121" width="20" height="20" alt=""/></td>
    <td><strong>Primary Text</strong></td>
    <td><code>PrimaryText</code></td>
    <td><code>#212121</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-616161?style=flat-square&logoColor=616161" width="20" height="20" alt=""/></td>
    <td><strong>Gray Dark</strong></td>
    <td><code>GrayDark</code></td>
    <td><code>#616161</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-9E9E9E?style=flat-square&logoColor=9E9E9E" width="20" height="20" alt=""/></td>
    <td><strong>Gray Mid</strong></td>
    <td><code>GrayMid</code></td>
    <td><code>#9E9E9E</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-E0E0E0?style=flat-square&logoColor=E0E0E0" width="20" height="20" alt=""/></td>
    <td><strong>Gray Light</strong></td>
    <td><code>GrayLight</code></td>
    <td><code>#E0E0E0</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-F3F4F6?style=flat-square&logoColor=F3F4F6" width="20" height="20" alt=""/></td>
    <td><strong>Secondary Background</strong></td>
    <td><code>SecondaryBackground</code></td>
    <td><code>#F3F4F6</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-FFFFFF?style=flat-square&logoColor=FFFFFF" width="20" height="20" alt=""/></td>
    <td><strong>Primary Background</strong></td>
    <td><code>PrimaryBackground</code></td>
    <td><code>#FFFFFF</code></td>
  </tr>
</table>

<h4>Semantic Colors</h4>
<table>
  <tr>
    <th style="width: 20px;">Swatch</th>
    <th>Name</th>
    <th>Token</th>
    <th>Hex</th>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-56bd28?style=flat-square&logoColor=56bd28" width="20" height="20" alt=""/></td>
    <td><strong>Success Green</strong></td>
    <td><code>SemanticSuccessGreen</code></td>
    <td><code>#56bd28</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-ebfde3?style=flat-square&logoColor=ebfde3" width="20" height="20" alt=""/></td>
    <td><strong>Success Green Light</strong></td>
    <td><code>SemanticSuccessGreenLight</code></td>
    <td><code>#ebfde3</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-bd4228?style=flat-square&logoColor=bd4228" width="20" height="20" alt=""/></td>
    <td><strong>Error Red</strong></td>
    <td><code>ErrorRed</code></td>
    <td><code>#bd4228</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-fde7e3?style=flat-square&logoColor=fde7e3" width="20" height="20" alt=""/></td>
    <td><strong>Error Red Light</strong></td>
    <td><code>ErrorRedLight</code></td>
    <td><code>#fde7e3</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-bd9228?style=flat-square&logoColor=bd9228" width="20" height="20" alt=""/></td>
    <td><strong>Warning Yellow</strong></td>
    <td><code>WarningYellow</code></td>
    <td><code>#bd9228</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-fdf5e3?style=flat-square&logoColor=fdf5e3" width="20" height="20" alt=""/></td>
    <td><strong>Warning Yellow Light</strong></td>
    <td><code>WarningYellowLight</code></td>
    <td><code>#fdf5e3</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-2897bd?style=flat-square&logoColor=2897bd" width="20" height="20" alt=""/></td>
    <td><strong>Info Blue</strong></td>
    <td><code>InfoBlue</code></td>
    <td><code>#2897bd</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-e3f6fd?style=flat-square&logoColor=e3f6fd" width="20" height="20" alt=""/></td>
    <td><strong>Info Blue Light</strong></td>
    <td><code>InfoBlueLight</code></td>
    <td><code>#e3f6fd</code></td>
  </tr>
</table>

<h4>Reference Palette</h4>
<table>
  <tr>
    <th style="width: 20px;">Swatch</th>
    <th>Name</th>
    <th>Token</th>
    <th>Hex</th>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-eee4d7?style=flat-square&logoColor=eee4d7" width="20" height="20" alt=""/></td>
    <td><strong>Reference Beige</strong></td>
    <td><code>ReferenceBeige</code></td>
    <td><code>#eee4d7</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-d7c999?style=flat-square&logoColor=d7c999" width="20" height="20" alt=""/></td>
    <td><strong>Reference Gold</strong></td>
    <td><code>ReferenceGold</code></td>
    <td><code>#d7c999</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-b3ccc7?style=flat-square&logoColor=b3ccc7" width="20" height="20" alt=""/></td>
    <td><strong>Reference Mint</strong></td>
    <td><code>ReferenceMint</code></td>
    <td><code>#b3ccc7</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-f2bb5f?style=flat-square&logoColor=f2bb5f" width="20" height="20" alt=""/></td>
    <td><strong>Reference Amber</strong></td>
    <td><code>ReferenceAmber</code></td>
    <td><code>#f2bb5f</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-efa625?style=flat-square&logoColor=efa625" width="20" height="20" alt=""/></td>
    <td><strong>Reference Orange</strong></td>
    <td><code>ReferenceOrange</code></td>
    <td><code>#efa625</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-aca99f?style=flat-square&logoColor=aca99f" width="20" height="20" alt=""/></td>
    <td><strong>Reference Stone</strong></td>
    <td><code>ReferenceStone</code></td>
    <td><code>#aca99f</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-cb9c5c?style=flat-square&logoColor=cb9c5c" width="20" height="20" alt=""/></td>
    <td><strong>Reference Tan</strong></td>
    <td><code>ReferenceTan</code></td>
    <td><code>#cb9c5c</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-779fa2?style=flat-square&logoColor=779fa2" width="20" height="20" alt=""/></td>
    <td><strong>Reference Teal</strong></td>
    <td><code>ReferenceTeal</code></td>
    <td><code>#779fa2</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-a29171?style=flat-square&logoColor=a29171" width="20" height="20" alt=""/></td>
    <td><strong>Reference Olive</strong></td>
    <td><code>ReferenceOlive</code></td>
    <td><code>#a29171</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-96933f?style=flat-square&logoColor=96933f" width="20" height="20" alt=""/></td>
    <td><strong>Reference Khaki</strong></td>
    <td><code>ReferenceKhaki</code></td>
    <td><code>#96933f</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-c7780e?style=flat-square&logoColor=c7780e" width="20" height="20" alt=""/></td>
    <td><strong>Reference Copper</strong></td>
    <td><code>ReferenceCopper</code></td>
    <td><code>#c7780e</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-6f6a60?style=flat-square&logoColor=6f6a60" width="20" height="20" alt=""/></td>
    <td><strong>Reference Charcoal</strong></td>
    <td><code>ReferenceCharcoal</code></td>
    <td><code>#6f6a60</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-a15d29?style=flat-square&logoColor=a15d29" width="20" height="20" alt=""/></td>
    <td><strong>Reference Brown</strong></td>
    <td><code>ReferenceBrown</code></td>
    <td><code>#a15d29</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-416568?style=flat-square&logoColor=416568" width="20" height="20" alt=""/></td>
    <td><strong>Reference Slate</strong></td>
    <td><code>ReferenceSlate</code></td>
    <td><code>#416568</code></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/-%20-474b3e?style=flat-square&logoColor=474b3e" width="20" height="20" alt=""/></td>
    <td><strong>Reference Dark Olive</strong></td>
    <td><code>ReferenceDarkOlive</code></td>
    <td><code>#474b3e</code></td>
  </tr>
</table>

### Typography

<table>
<tr>
<th>Purpose</th>
<th>Font Family</th>
<th>Weight</th>
<th>Example</th>
<th>Usage</th>
</tr>
<tr>
<td><strong>Logo & Headers</strong></td>
<td>Bebas Neue</td>
<td>Regular</td>
<td><span style="font-family: 'Bebas Neue', sans-serif; font-size: 24px; letter-spacing: 0.05em;">PRIMATIF</span></td>
<td>Bold, modern headlines</td>
</tr>
<tr>
<td><strong>Headings</strong></td>
<td>Roboto</td>
<td>Bold (700)</td>
<td><span style="font-family: 'Roboto', sans-serif; font-weight: 700; font-size: 18px;">Clean Professional Title</span></td>
<td>Clean, professional titles</td>
</tr>
<tr>
<td><strong>Body Text</strong></td>
<td>Roboto</td>
<td>Regular (400)</td>
<td><span style="font-family: 'Roboto', sans-serif; font-weight: 400; font-size: 16px;">Readable, accessible content</span></td>
<td>Readable, accessible content</td>
</tr>
<tr>
<td><strong>Subtitles</strong></td>
<td>Lato</td>
<td>Regular (400)</td>
<td><span style="font-family: 'Lato', sans-serif; font-weight: 400; font-size: 16px;">Clean, complementary text</span></td>
<td>Clean, complementary text</td>
</tr>
</table>

### Design Principles
- **4px base spacing unit** for consistent rhythm
- **Mobile-first responsive design** 
- **Accessible color contrast** ratios
- **Semantic color usage** for intuitive user feedback



*Visit the interactive style guide for detailed usage examples, component specifications, and downloadable resources.*

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

3. **Open in browser**
   - Navigate to `http://localhost:5173`
   - The style guide will be live with hot reloading

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

### PDF Generation

This project includes a script to generate a versioned, print-ready PDF of the entire style guide. This is useful for offline sharing, documentation, and archival purposes.

```bash
npm run generate-pdf
```

The script will build the project, launch a headless browser, and save a scaled-down PDF to the `output/style-guide/` directory. Each generated file is automatically versioned (e.g., `primatif-style-guide-v1.pdf`).

## Tech Stack

- **React 19** - Modern React with latest features
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **JavaScript (JSX)** - Component-based architecture

## Project Structure

```
src/
├── App.jsx          # Main style guide component
├── main.jsx         # React app entry point
└── index.css        # Tailwind CSS imports

config/
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── postcss.config.js   # PostCSS configuration
```

## Features

- **Interactive Color Palettes** - Brand colors, functional tones, and semantic colors
- **Typography System** - Font hierarchy and usage guidelines  
- **Component Library** - Buttons, tables, patterns, and layouts
- **Responsive Design** - Mobile-first approach with defined breakpoints
- **PDF Export** - Generate downloadable style guide documents
- **Live Examples** - Interactive demonstrations of design principles

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate-pdf` - Generate a PDF of the style guide
- `npm run preview` - Preview production build locally
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

Built with for consistent, professional brand communications.
