# AXIOM Architecture Studio 🏛️

> A refined digital presence for an architecture studio where light, form, and material converge.

AXIOM is a responsive, editorial-style architecture portfolio website built with React and TypeScript. It combines expressive typography, immersive imagery, subtle motion, and a warm architectural palette to create a distinctive studio experience.

## ✨ Highlights

- 🧭 Multi-page navigation without a full page reload
- 🏗️ Dedicated views for projects, services, studio, team, journal, and contact
- 🎞️ Scroll reveals, page transitions, image zoom, marquees, and hover interactions
- 🎨 Custom Tailwind theme with warm bone, rust, sage, teal, and gold tones
- 📱 Responsive layouts for mobile, tablet, and desktop screens
- ♿ Semantic structure and keyboard-friendly interactive controls
- ⚡ Vite-powered development and production builds

## 🛠️ Technology

- **React 18** with TypeScript
- **Vite** for development and bundling
- **Tailwind CSS** for utility-first styling
- **Lucide React** for interface icons
- **ESLint** and TypeScript for code quality

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or newer
- npm 9 or newer

### Installation

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## 📦 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create an optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |
| `npm run typecheck` | Run TypeScript checks without emitting files |

## 🗂️ Project Structure

```text
src/
├── components/   # Shared navigation, footer, marquee, and reveal components
├── hooks/        # Scroll and viewport interaction hooks
├── screens/      # Individual website views
├── App.tsx       # Application shell and page routing state
├── data.ts       # Studio and project content
└── index.css     # Global styles, animations, and utility classes
```

## 🎨 Design Direction

AXIOM uses an editorial visual language inspired by architectural publications:

- **Typography:** Bricolage Grotesque, Fraunces, Space Grotesk, and JetBrains Mono
- **Palette:** Bone neutrals balanced with rust, sage, teal, and gold accents
- **Motion:** Restrained transitions that support hierarchy and exploration
- **Composition:** Strong grids, oversized type, generous spacing, and layered imagery

## 🌐 Production Build

Build the application for deployment with:

```bash
npm run build
```

The generated files are placed in the `dist/` directory and can be served by any static hosting provider.

## 📄 License

This project is distributed under the MIT License. See [LICENSE](./LICENSE) for details.

---

Designed with intention for AXIOM Architecture Studio. 🧱
