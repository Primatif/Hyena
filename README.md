# Primatif Style Guide

A modern, interactive digital style guide built with React and Vite. This application serves as the comprehensive visual identity reference for the Primatif brand, providing designers and developers with color palettes, typography guidelines, component examples, and usage patterns.

## Brand Identity

Our brand balances **professionalism with innovation**. This style guide is the foundation for creating all brand communications, ensuring a consistent, professional, and innovative identity across all mediums. These are not strict rules but a framework to empower creativity while maintaining the reliability our brand stands for.

### Core Brand Philosophy
- **Consistent** - Unified visual language across all touchpoints
- **Professional** - Clean, trustworthy, and reliable aesthetic
- **Innovative** - Modern approach that embraces new possibilities
- **Flexible** - Guidelines that empower creative solutions

## Quick Reference

*For complete guidelines and interactive examples, view the full style guide in the application.*

### Primary Colors

<table>
<tr>
<td><img width="20" height="20" src="https://via.placeholder.com/20/E31937/E31937.png" alt="#E31937"></td>
<td><strong>Primatif Red</strong></td>
<td><code>#E31937</code></td>
<td>Primary brand accent</td>
</tr>
<tr>
<td><img width="20" height="20" src="https://via.placeholder.com/20/53C8ED/53C8ED.png" alt="#53C8ED"></td>
<td><strong>Primatif Sky Blue</strong></td>
<td><code>#53C8ED</code></td>
<td>Secondary accent</td>
</tr>
<tr>
<td><img width="20" height="20" src="https://via.placeholder.com/20/08FF08/08FF08.png" alt="#08FF08"></td>
<td><strong>Green Screen Green</strong></td>
<td><code>#08FF08</code></td>
<td>Tertiary brand accent</td>
</tr>
<tr>
<td><img width="20" height="20" src="https://via.placeholder.com/20/0080A4/0080A4.png" alt="#0080A4"></td>
<td><strong>Deep Blue</strong></td>
<td><code>#0080A4</code></td>
<td>Supporting accent</td>
</tr>
</table>

### Typography

| Purpose | Font Family | Weight | Usage |
|---------|-------------|--------|-------|
| **Logo & Headers** | Bebas Neue | Regular | Bold, modern headlines |
| **Headings** | Roboto | Bold (700) | Clean, professional titles |
| **Body Text** | Roboto | Regular (400) | Readable, accessible content |
| **Subtitles** | Lato | Regular (400) | Clean, complementary text |

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
