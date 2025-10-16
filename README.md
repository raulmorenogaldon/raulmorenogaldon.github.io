# Portfolio Site

A modern, performant portfolio website built with React, TypeScript, and Vite, featuring a custom content management system for showcasing software engineering projects with rich, detailed case studies.

# Table of Contents
- [Overview](#overview)
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Production Build](#production-build)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

This repository contains a professional portfolio website that showcases diverse software engineering projects ranging from game development with Unity ECS to full-stack web applications, smart home automation, and low-level C programming. 

Built with modern web technologies (React 19, TypeScript, Vite), the site features:
- **Dynamic routing** with React Router for seamless navigation between Home, Projects, Project Details, and Resume pages
- **Custom content system** using TypeScript modules for type-safe, structured project documentation
- **Rich project presentations** with images, technical highlights, code snippets, and detailed case studies
- **Responsive design** optimized for all device sizes
- **Fast build and deployment** pipeline with Vite and GitHub Pages integration

## Demo

Live demo: https://raulmorenogaldon.github.io/

## Features

- **Multi-page application** with client-side routing (Home, Projects, Project Detail, Resume)
- **Project showcase** with 9+ detailed case studies covering game dev, web apps, automation, and more
- **Type-safe content system** with TypeScript interfaces for project metadata and rich content
- **Responsive design** with CSS custom properties and mobile-first approach
- **Component-based architecture** with reusable React components (Navbar, Footer, ProjectCard, ContentRenderer)
- **Fast development** with Vite's hot module replacement
- **Production-optimized** builds with code splitting and tree shaking
- **Automated deployment** to GitHub Pages with single command

## Tech Stack

**Frontend Framework & Language:**
- React 19 with React Router DOM for routing
- TypeScript for type safety
- Tailwind CSS 4 for styling

**Build Tools & Development:**
- Vite 7 (fast builds with hot module replacement)
- ESLint with React plugins for code quality
- Babel React Compiler for optimization

**Deployment:**
- GitHub Pages for hosting
- GitHub CLI (`gh`) for automated deployment

## Prerequisites

- **Node.js** (version 18 or higher recommended)
- **npm** or **yarn**
- **GitHub CLI** (`gh`) for deployment (optional, only needed for publishing)

## Installation

```bash
git clone https://github.com/raulmorenogaldon/raulmorenogaldon.github.io.git
cd raulmorenogaldon.github.io
npm install
```

## Development

Start the development server with hot reloading:

```bash
npm run dev
```

Open http://localhost:5173 to view the site locally.

## Production Build

Create an optimized production build:

```bash
npm run build
```

The built files will be generated in the `dist/` directory.

## Deployment (Internal Reference)

To deploy to GitHub Pages:

```bash
npm run deploy
```

## Project Structure

```
raulmorenogaldon.github.io/
├── public/           Static assets (images, icons)
├── src/
│   ├── assets/       Images and SVGs
│   ├── components/   Reusable React components
│   ├── content/      Project content and data
│   ├── data/         Project metadata
│   ├── pages/        Page components
│   ├── styles/       CSS stylesheets
│   ├── App.css       Global styles
│   ├── App.tsx       Root component
│   ├── index.css     Base styles
│   └── main.tsx      Entry point
├── index.html        HTML template
├── vite.config.ts    Vite configuration
├── tsconfig.json     TypeScript configuration
└── package.json      Project dependencies and scripts
```

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### ⚠️ Excluded Personal Content

This license applies to all code, scripts, and configuration in this repository.
It does **not** cover personal content such as photographs, resumes/CV,
or any files located under `public/personal` or `src/assets/personal`.