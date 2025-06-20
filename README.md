# Primatif Style Guide 🐺

<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:wght@400;700&family=Lato:wght@400&display=swap" rel="stylesheet">

A modern, interactive digital style guide built with React and Vite. This application serves as the comprehensive visual identity reference for the Primatif brand, providing designers and developers with color palettes, typography guidelines, component examples, and usage patterns.

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
    <th style="width: 20px;"></th>
    <th>Name</th>
    <th>Token</th>
    <th>Hex</th>
  </tr>
  <tr>
    <td style="background-color: #E31937;"></td>
    <td><strong>Primatif Red</strong></td>
    <td><code>PrimaryAccent</code></td>
    <td><code>#E31937</code></td>
  </tr>
  <tr>
    <td style="background-color: #E73B54;"></td>
    <td><strong>Primatif Red Light</strong></td>
    <td><code>PrimaryAccentLight</code></td>
    <td><code>#E73B54</code></td>
  </tr>
  <tr>
    <td style="background-color: #C1152E;"></td>
    <td><strong>Primatif Red Dark</strong></td>
    <td><code>PrimaryAccentDark</code></td>
    <td><code>#C1152E</code></td>
  </tr>
  <tr>
    <td style="background-color: #5C0411;"></td>
    <td><strong>Primatif Red Darker</strong></td>
    <td><code>PrimaryAccentDarker</code></td>
    <td><code>#5C0411</code></td>
  </tr>
  <tr>
    <td style="background-color: #53C8ED;"></td>
    <td><strong>Primatif Sky Blue</strong></td>
    <td><code>SecondaryAccent</code></td>
    <td><code>#53C8ED</code></td>
  </tr>
  <tr>
    <td style="background-color: #A0DFF2;"></td>
    <td><strong>Sky Blue Light</strong></td>
    <td><code>AccentSkyBlue</code></td>
    <td><code>#A0DFF2</code></td>
  </tr>
  <tr>
    <td style="background-color: #0080A4;"></td>
    <td><strong>Deep Blue</strong></td>
    <td><code>AccentDeepBlue</code></td>
    <td><code>#0080A4</code></td>
  </tr>
  <tr>
    <td style="background-color: #08FF08;"></td>
    <td><strong>Green Screen Green</strong></td>
    <td><code>TertiaryAccent</code></td>
    <td><code>#08FF08</code></td>
  </tr>
</table>

<h4>Functional Tones</h4>
<table>
  <tr>
    <th style="width: 20px;"></th>
    <th>Name</th>
    <th>Token</th>
    <th>Hex</th>
  </tr>
  <tr>
    <td style="background-color: #212121;"></td>
    <td><strong>Primary Text</strong></td>
    <td><code>PrimaryText</code></td>
    <td><code>#212121</code></td>
  </tr>
  <tr>
    <td style="background-color: #616161;"></td>
    <td><strong>Gray Dark</strong></td>
    <td><code>GrayDark</code></td>
    <td><code>#616161</code></td>
  </tr>
  <tr>
    <td style="background-color: #9E9E9E;"></td>
    <td><strong>Gray Mid</strong></td>
    <td><code>GrayMid</code></td>
    <td><code>#9E9E9E</code></td>
  </tr>
  <tr>
    <td style="background-color: #E0E0E0;"></td>
    <td><strong>Gray Light</strong></td>
    <td><code>GrayLight</code></td>
    <td><code>#E0E0E0</code></td>
  </tr>
  <tr>
    <td style="background-color: #F3F4F6;"></td>
    <td><strong>Secondary Background</strong></td>
    <td><code>SecondaryBackground</code></td>
    <td><code>#F3F4F6</code></td>
  </tr>
  <tr>
    <td style="background-color: #FFFFFF; border: 1px solid #ccc;"></td>
    <td><strong>Primary Background</strong></td>
    <td><code>PrimaryBackground</code></td>
    <td><code>#FFFFFF</code></td>
  </tr>
</table>

<h4>Semantic Colors</h4>
<table>
  <tr>
    <th style="width: 20px;"></th>
    <th>Name</th>
    <th>Token</th>
    <th>Hex</th>
  </tr>
  <tr>
    <td style="background-color: #2E7D32;"></td>
    <td><strong>Success Green</strong></td>
    <td><code>SemanticSuccessGreen</code></td>
    <td><code>#2E7D32</code></td>
  </tr>
  <tr>
    <td style="background-color: #E8F5E9; border: 1px solid #ccc;"></td>
    <td><strong>Success Green Light</strong></td>
    <td><code>SemanticSuccessGreenLight</code></td>
    <td><code>#E8F5E9</code></td>
  </tr>
  <tr>
    <td style="background-color: #C1152E;"></td>
    <td><strong>Error Red</strong></td>
    <td><code>ErrorRed</code></td>
    <td><code>#C1152E</code></td>
  </tr>
  <tr>
    <td style="background-color: #FFE8EB; border: 1px solid #ccc;"></td>
    <td><strong>Error Red Light</strong></td>
    <td><code>ErrorRedLight</code></td>
    <td><code>#FFE8EB</code></td>
  </tr>
  <tr>
    <td style="background-color: #FFC300;"></td>
    <td><strong>Warning Yellow</strong></td>
    <td><code>WarningYellow</code></td>
    <td><code>#FFC300</code></td>
  </tr>
  <tr>
    <td style="background-color: #FFF8E1; border: 1px solid #ccc;"></td>
    <td><strong>Warning Yellow Light</strong></td>
    <td><code>WarningYellowLight</code></td>
    <td><code>#FFF8E1</code></td>
  </tr>
  <tr>
    <td style="background-color: #53C8ED;"></td>
    <td><strong>Info Blue</strong></td>
    <td><code>InfoBlue</code></td>
    <td><code>#53C8ED</code></td>
  </tr>
  <tr>
    <td style="background-color: #D1EEF9; border: 1px solid #ccc;"></td>
    <td><strong>Info Blue Light</strong></td>
    <td><code>InfoBlueLight</code></td>
    <td><code>#D1EEF9</code></td>
  </tr>
  <tr>
    <td style="background-color: #BDBDBD;"></td>
    <td><strong>Disabled Gray</strong></td>
    <td><code>DisabledGray</code></td>
    <td><code>#BDBDBD</code></td>
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
