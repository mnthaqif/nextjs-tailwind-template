# 🛠️ Tech Stack Documentation

This document provides a comprehensive overview of all technologies, dependencies, and tools used in this Next.js + Tailwind CSS template. Use this as a reference when setting up a new project from scratch.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Core Framework & Runtime](#core-framework--runtime)
- [Styling & UI](#styling--ui)
- [Form Handling & Validation](#form-handling--validation)
- [Development Tools](#development-tools)
- [Type Definitions](#type-definitions)
- [Configuration Files](#configuration-files)
- [Installation Guide](#installation-guide)
- [Development Workflow](#development-workflow)
- [Package Manager Alternatives](#package-manager-alternatives)

## 🔧 Prerequisites

### Required Software

- **Node.js**: `v20.19.4` (or latest LTS v20.x)
  - Download from [nodejs.org](https://nodejs.org/)
  - Or use [nvm](https://github.com/nvm-sh/nvm): `nvm install 20 && nvm use 20`

- **Package Manager** (choose one):
  - **pnpm** (recommended): `npm install -g pnpm`
  - **npm**: Built-in with Node.js
  - **yarn**: `npm install -g yarn`

## 🚀 Core Framework & Runtime

| Technology     | Version    | Purpose                                           | Documentation                                         |
| -------------- | ---------- | ------------------------------------------------- | ----------------------------------------------------- |
| **Next.js**    | `14.2.5`   | React framework with App Router, SSR, and routing | [nextjs.org](https://nextjs.org/)                     |
| **React**      | `18.2.0`   | Frontend UI library                               | [react.dev](https://react.dev/)                       |
| **React DOM**  | `18.2.0`   | React DOM bindings for web                        | [react.dev](https://react.dev/)                       |
| **TypeScript** | `5.9.2`    | Static type checking for JavaScript               | [typescriptlang.org](https://www.typescriptlang.org/) |
| **Node.js**    | `v20.19.4` | JavaScript runtime environment                    | [nodejs.org](https://nodejs.org/)                     |

### Next.js Features Used

- **App Router**: New routing system with `app/` directory
- **Server Components**: React Server Components support
- **Typed Routes**: Experimental typed route support
- **Metadata API**: Built-in SEO and metadata management

## 🎨 Styling & UI

| Technology                   | Version   | Purpose                                  | Documentation                                                                  |
| ---------------------------- | --------- | ---------------------------------------- | ------------------------------------------------------------------------------ |
| **Tailwind CSS**             | `3.4.17`  | Utility-first CSS framework              | [tailwindcss.com](https://tailwindcss.com/)                                    |
| **PostCSS**                  | `8.5.6`   | CSS processing and transformation tool   | [postcss.org](https://postcss.org/)                                            |
| **Autoprefixer**             | `10.4.21` | Automatic CSS vendor prefixing           | [github.com/postcss/autoprefixer](https://github.com/postcss/autoprefixer)     |
| **Class Variance Authority** | `0.7.1`   | Component variant handling utility       | [cva.style](https://cva.style/docs)                                            |
| **Tailwind Merge**           | `2.6.0`   | Merge Tailwind CSS classes intelligently | [github.com/dcastil/tailwind-merge](https://github.com/dcastil/tailwind-merge) |
| **Framer Motion**            | `10.18.0` | Animation library for React              | [framer.com/motion](https://www.framer.com/motion/)                            |
| **Lucide React**             | `0.424.0` | Icon library with React components       | [lucide.dev](https://lucide.dev/)                                              |
| **Swiper**                   | `11.2.10` | Modern touch slider component            | [swiperjs.com](https://swiperjs.com/)                                          |

### Design System Features

- **Dark/Light Mode**: Automatic theme switching with no flash
- **CSS Variables**: Custom design tokens for theming
- **Responsive Design**: Mobile-first responsive utilities
- **Custom Animations**: Framer Motion integration for smooth animations

## 📝 Form Handling & Validation

| Technology              | Version   | Purpose                                  | Documentation                                                                        |
| ----------------------- | --------- | ---------------------------------------- | ------------------------------------------------------------------------------------ |
| **React Hook Form**     | `7.62.0`  | Performant forms with easy validation    | [react-hook-form.com](https://react-hook-form.com/)                                  |
| **@hookform/resolvers** | `3.10.0`  | Validation resolvers for React Hook Form | [github.com/react-hook-form/resolvers](https://github.com/react-hook-form/resolvers) |
| **Zod**                 | `3.25.76` | TypeScript-first schema validation       | [zod.dev](https://zod.dev/)                                                          |

### Form Features

- **Type-safe validation**: Zod schemas with TypeScript inference
- **Performance**: Minimal re-renders with React Hook Form
- **Error handling**: Built-in error management and display

## 🛠️ Development Tools

### Linting & Formatting

| Tool                            | Version   | Purpose                                | Documentation                                                                                                                                |
| ------------------------------- | --------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **ESLint**                      | `9.34.0`  | JavaScript/TypeScript linting          | [eslint.org](https://eslint.org/)                                                                                                            |
| **eslint-config-next**          | `14.2.32` | Next.js optimized ESLint configuration | [nextjs.org/docs/app/building-your-application/configuring/eslint](https://nextjs.org/docs/app/building-your-application/configuring/eslint) |
| **Prettier**                    | `3.6.2`   | Code formatting                        | [prettier.io](https://prettier.io/)                                                                                                          |
| **prettier-plugin-tailwindcss** | `0.6.14`  | Automatic Tailwind class sorting       | [github.com/tailwindlabs/prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)                           |

### Git Hooks & Quality Control

| Tool            | Version  | Purpose                          | Documentation                                                          |
| --------------- | -------- | -------------------------------- | ---------------------------------------------------------------------- |
| **Husky**       | `9.1.7`  | Git hooks management             | [typicode.github.io/husky](https://typicode.github.io/husky/)          |
| **lint-staged** | `15.5.2` | Run linters on staged files only | [github.com/okonet/lint-staged](https://github.com/okonet/lint-staged) |

### Pre-commit Hooks Configuration

- **Automatic formatting**: Prettier runs on all staged files
- **Linting**: ESLint runs on TypeScript/JavaScript files
- **Type checking**: TypeScript compiler validation

## 📚 Type Definitions

| Package              | Version    | Purpose                    |
| -------------------- | ---------- | -------------------------- |
| **@types/node**      | `20.19.11` | Node.js type definitions   |
| **@types/react**     | `18.3.24`  | React type definitions     |
| **@types/react-dom** | `18.3.7`   | React DOM type definitions |

## ⚙️ Configuration Files

| File                 | Purpose                           | Technology    |
| -------------------- | --------------------------------- | ------------- |
| `package.json`       | Project dependencies and scripts  | npm/pnpm/yarn |
| `tsconfig.json`      | TypeScript compiler configuration | TypeScript    |
| `next.config.mjs`    | Next.js framework configuration   | Next.js       |
| `tailwind.config.ts` | Tailwind CSS customization        | Tailwind CSS  |
| `postcss.config.mjs` | PostCSS plugins configuration     | PostCSS       |
| `.eslintrc.cjs`      | ESLint rules and configuration    | ESLint        |
| `.prettierrc`        | Prettier formatting rules         | Prettier      |
| `site.config.ts`     | Site metadata and branding        | Custom        |

## 📦 Installation Guide

### Step 1: Prerequisites

```bash
# Install Node.js v20 (if not already installed)
# Option 1: Download from nodejs.org
# Option 2: Using nvm
nvm install 20 && nvm use 20

# Install pnpm globally (recommended)
npm install -g pnpm
```

### Step 2: Clone and Setup

```bash
# Clone the repository
git clone https://github.com/mnthaqif/nextjs-tailwind-template.git
cd nextjs-tailwind-template

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Step 3: Verify Installation

```bash
# Build the project
pnpm build

# Run type checking
pnpm type-check

# Run linting
pnpm lint

# Format code
pnpm format

# Run verification script (optional)
./scripts/verify-tech-stack.sh
```

## 🔄 Development Workflow

### Available Scripts

| Script          | Command           | Description                              |
| --------------- | ----------------- | ---------------------------------------- |
| **Development** | `pnpm dev`        | Start development server with hot reload |
| **Build**       | `pnpm build`      | Create optimized production build        |
| **Start**       | `pnpm start`      | Start production server (after build)    |
| **Linting**     | `pnpm lint`       | Run ESLint on all files                  |
| **Type Check**  | `pnpm type-check` | Run TypeScript compiler without emitting |
| **Format**      | `pnpm format`     | Format all files with Prettier           |
| **Prepare**     | `pnpm prepare`    | Setup Husky git hooks (auto-run)         |

### Development Process

1. **Start development**: `pnpm dev`
2. **Make changes**: Edit files with hot reload
3. **Type checking**: Automatic in IDE or run `pnpm type-check`
4. **Pre-commit**: Automatic linting and formatting via Husky
5. **Build testing**: `pnpm build` before deployment

## 📋 Package Manager Alternatives

### Using npm (built-in)

```bash
npm install
npm run dev
npm run build
npm run lint
```

### Using Yarn

```bash
yarn install
yarn dev
yarn build
yarn lint
```

### Using pnpm (recommended)

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
```

## 🚀 Creating New Project from Scratch

To replicate this tech stack in a new project:

### 1. Initialize Project

```bash
npx create-next-app@14.2.5 my-project --typescript --tailwind --app --src-dir=false --import-alias="@/*"
cd my-project
```

### 2. Install Additional Dependencies

```bash
# UI and Animation
pnpm add framer-motion lucide-react swiper class-variance-authority tailwind-merge

# Forms and Validation
pnpm add react-hook-form @hookform/resolvers zod

# Development Tools
pnpm add -D prettier prettier-plugin-tailwindcss husky lint-staged

# Type Definitions (if needed)
pnpm add -D @types/node @types/react @types/react-dom
```

### 3. Setup Configuration Files

- Copy configuration files from this template
- Customize `site.config.ts` for your project
- Setup Husky: `pnpm dlx husky-init && pnpm install`

### 4. Configure Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint . --ext .ts,.tsx",
    "type-check": "tsc --noEmit",
    "format": "prettier --write .",
    "prepare": "husky install"
  }
}
```

## 🔧 Version Information

This documentation was generated for:

- **Template Version**: 0.1.0
- **Node.js**: v20.19.4
- **pnpm**: 10.15.0
- **Last Updated**: December 2024

## 📞 Support

For questions about this tech stack or template:

- **Repository**: [mnthaqif/nextjs-tailwind-template](https://github.com/mnthaqif/nextjs-tailwind-template)
- **Issues**: Open an issue on GitHub
- **Documentation**: Check individual package documentation links above

---

_This template provides a modern, production-ready foundation for building Next.js applications with TypeScript, Tailwind CSS, and comprehensive developer tooling._
