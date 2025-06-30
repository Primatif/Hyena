# Hyena Design System - Release Process

This document outlines the complete release process for the Hyena Design System npm package (`@primatif/hyena`).

## Overview

The Hyena Design System uses an automated CI/CD pipeline powered by GitHub Actions to ensure quality and consistency in releases. Every release is automatically tested, linted, built, and published to npm.

## 📦 Package Information

- **Package Name**: `@primatif/hyena`
- **Repository**: https://github.com/Primatif/Hyena
- **NPM Registry**: https://www.npmjs.com/package/@primatif/hyena

## 🔧 Prerequisites

### For Maintainers

1. **NPM Account**: Access to publish under the `@primatif` organization
2. **GitHub Permissions**: Admin access to the repository
3. **NPM Token**: Configured as `NPM_TOKEN` secret in GitHub repository settings

### Repository Setup

The following secrets must be configured in GitHub repository settings:

- `NPM_TOKEN`: NPM authentication token with publish permissions

## ⚠️ REMAINING SETUP STEPS

**These steps must be completed before the first release:**

### 1. Install Required Dependencies
```bash
npm install --save-dev vite-plugin-dts @testing-library/jest-dom
```

### 2. Update Git Remote (if needed)
```bash
git remote set-url origin git@github.com:Primatif/Hyena.git
git remote -v  # Verify the change
```

### 3. Configure NPM Token in GitHub
1. **Get NPM Token**:
   - Go to [npmjs.com](https://npmjs.com) → Account Settings → Access Tokens
   - Generate new token with "Automation" type
   - Copy the token

2. **Add to GitHub Secrets**:
   - Go to: https://github.com/Primatif/Hyena/settings/secrets/actions
   - Click "New repository secret"
   - Name: `NPM_TOKEN`
   - Value: [paste your NPM token]
   - Click "Add secret"

### 4. Test Local Build
```bash
npm run build:lib
npm run test:ci
npm run lint
```

### 5. Verify Package Name Availability
Check that `@primatif/hyena` is available on NPM or that you have publish permissions.

**⚡ Once these steps are complete, you can create your first release!**

## 🚀 Release Process

### 1. Pre-Release Checklist

Before creating a release, ensure:

- [ ] All planned features and fixes are merged to `main`
- [ ] Tests are passing locally: `npm run test:ci`
- [ ] Linting passes: `npm run lint`
- [ ] Library builds successfully: `npm run build:lib`
- [ ] Version number in `package.json` is updated appropriately
- [ ] `CHANGELOG.md` is updated (if applicable)

### 2. Version Management

Update the version in `package.json` following [Semantic Versioning](https://semver.org/):

```bash
# For bug fixes
npm version patch

# For new features
npm version minor  

# For breaking changes
npm version major
```

**⚠️ Important**: Releases can only be created from the `main` branch. Ensure all changes are merged to `main` before creating a release.

### 3. Creating a Release

1. **Navigate to GitHub Releases**:
   - Go to: https://github.com/Primatif/Hyena/releases
   - Click "Create a new release"

2. **Configure Release**:
   - **Tag**: Use format `v{version}` (e.g., `v1.2.0`)
   - **Title**: Same as tag (e.g., `v1.2.0`)
   - **Description**: 
     ```markdown
     ## What's Changed
     - List of new features
     - List of bug fixes
     - List of breaking changes (if any)
     
     ## Installation
     ```bash
     npm install @primatif/hyena
     ```
     ```

3. **Publish Release**:
   - Click "Publish release"
   - This triggers the automated publishing pipeline

## 🤖 Automated Pipeline

When a release is published, GitHub Actions automatically:

### Testing Phase
- ✅ Runs ESLint for code quality
- ✅ Executes all tests with coverage
- ✅ Builds Storybook documentation

### Build Phase  
- ✅ Compiles the library using Vite
- ✅ Generates TypeScript definitions
- ✅ Creates both ES modules and CommonJS builds
- ✅ Optimizes bundle for distribution

### Publish Phase
- ✅ Publishes package to NPM registry
- ✅ Updates package on npmjs.com
- ✅ Makes new version available for installation

## 📋 Pipeline Configuration

### Workflow File
Location: `.github/workflows/release.yml`

### Build Outputs
- **ES Module**: `dist/index.js`
- **CommonJS**: `dist/index.cjs`
- **TypeScript**: `dist/index.d.ts`
- **Tokens Only**: `dist/tokens.js`, `dist/tokens.cjs`

### Package Exports
```json
{
  ".": {
    "import": "./dist/index.js",
    "require": "./dist/index.cjs"
  },
  "./tokens": {
    "import": "./dist/tokens.js", 
    "require": "./dist/tokens.cjs"
  }
}
```

## 📦 Package Usage

### Installation
```bash
npm install @primatif/hyena
```

### Importing Components
```javascript
// Import specific components
import { Button, Text, Card } from '@primatif/hyena';

// Import design tokens only
import { brandColors, typography, spacing } from '@primatif/hyena/tokens';
```

### Peer Dependencies
The package requires these peer dependencies in the consuming project:
- `react`: `^18.0.0 || ^19.0.0`
- `react-dom`: `^18.0.0 || ^19.0.0`

## 🔍 Monitoring & Verification

### After Release
1. **Verify NPM Publication**: Check https://www.npmjs.com/package/@primatif/hyena
2. **Test Installation**: Try installing in a test project
3. **Verify Exports**: Ensure all components and tokens are accessible
4. **Check Bundle Size**: Monitor package size on bundlephobia.com

### Pipeline Status
Monitor GitHub Actions at: https://github.com/Primatif/Hyena/actions

## 🐛 Troubleshooting

### Common Issues

**Pipeline Fails on Tests**:
- Run `npm run test:ci` locally to identify failing tests
- Fix issues and push to `main` before releasing

**NPM Publish Fails**:
- Verify `NPM_TOKEN` secret is correctly set
- Check NPM permissions for `@primatif` organization
- Ensure version number hasn't already been published

**Build Failures**:
- Run `npm run build:lib` locally
- Check for TypeScript errors or missing dependencies
- Verify all imports resolve correctly

**Version Conflicts**:
- Check if version in `package.json` matches the release tag
- Ensure version follows semantic versioning
- Verify version hasn't been published previously

### Getting Help

For release-related issues:
1. Check GitHub Actions logs for detailed error messages
2. Verify all prerequisites are met
3. Test the build process locally before releasing
4. Contact repository maintainers if issues persist

## 📝 Development Scripts

### Local Development
```bash
npm run dev          # Start development server
npm run storybook    # Launch Storybook
```

### Quality Checks
```bash
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run test         # Run tests in watch mode
npm run test:ci      # Run tests with coverage
```

### Building
```bash
npm run build        # Build demo application
npm run build:lib    # Build library for npm
npm run build-storybook  # Build Storybook static
```

### Documentation
```bash
npm run pdf:style-guide   # Generate style guide PDF
npm run pdf:service-sheet # Generate service sheet PDF
```

---

## 📚 Additional Resources

- [Semantic Versioning Guide](https://semver.org/)
- [NPM Publishing Documentation](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Component Documentation](./README.md)

---

*Last Updated: 2024-06-29*
