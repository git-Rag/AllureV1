# Allure · Private Offline AI Companion

Allure is a private, fully offline AI companion designed for deep understanding and absolute privacy. It runs locally on your hardware, ensuring that your conversations and memories never leave your device.

## Core Philosophy
- **Privacy by Physics:** No cloud, no surveillance. All processing happens on the edge.
- **Sacred Space:** A mirror for your thoughts, designed to listen, remember, and grow with you.
- **Aesthetic Sovereignty:** A brutalist-experimental design built for focus and emotional subtext.

## Tech Stack
- **Framework:** [Vite](https://vitejs.dev/) + [React](https://react.dev/) (TypeScript)
- **Navigation:** [React Router](https://reactrouter.com/)
- **Styling:** Vanilla CSS with [OKLCH](https://oklch.com/) color space
- **Animation:** Canvas API (Presence Core) & Intersection Observer (Scroll effects)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### Installation
1. Navigate to the project directory:
   ```bash
   cd allure-webapp
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure
- `src/components/`: Modular UI components (Hero, Presence, Tweaks, etc.)
- `src/pages/`: Main application views (Landing, Ethics)
- `src/hooks/`: Custom React hooks (Animations, scroll observers)
- `src/index.css`: Global design tokens and base styles

## Roadmap
- [x] Initial design port to React
- [x] Multi-page routing implementation
- [ ] Mobile-first UI refinements
- [ ] Integration with local inference engines (Ollama/Llama.cpp)
- [ ] Vector database implementation (SQLite-VSS)

---
© 2026 Allure AI · Designed for Human Connection · Made in the Void
