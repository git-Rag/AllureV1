# Allure · Private Offline AI Companion

Allure is a private, fully offline AI companion designed for deep understanding and absolute privacy. It currently functions as a high-fidelity interactive prototype showcasing the future of human-AI companionship.

## Core Philosophy
- **Privacy by Physics:** No cloud, no surveillance. All processing is designed for the edge.
- **Sacred Space:** A mirror for your thoughts, designed to listen, remember, and grow with you.
- **Aesthetic Sovereignty:** A brutalist-experimental design built for focus and emotional subtext.

## Key Features
- **Presence Core:** An organic, canvas-based visual representation of the AI that responds to user proximity and system state.
- **Atmosphere (Moods):** Real-time environmental shifts (Rain, Wind, Fire, Silence) that alter system colors, shaders, and animations via a dedicated `Tweaks` panel.
- **AI Conversation:** A specialized streaming interface for natural, emotionally-aware dialogue.
- **Architecture Manifests:** Technical deep-dives into the local-first stack, including quantized Llama models and encrypted vector storage.
- **Memory Fragments:** A high-entropy timeline of past interactions, visualized through dynamic vector paths and latent-space snippets.

## Tech Stack
- **Framework:** [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Language:** [TypeScript 6.0](https://www.typescriptlang.org/)
- **Navigation:** [React Router 7](https://reactrouter.com/)
- **Styling:** Vanilla CSS with [OKLCH](https://oklch.com/) color space and modular CSS architecture.
- **State Management:** React Context API (`UIContext`) for centralized UI state and modal management.

## Project Structure
The codebase follows a modular, feature-based architecture:

- `src/components/layout/`: Global shell components (MainLayout, Header, Footer, Tweaks).
- `src/components/landing/`: Feature-specific sections for the primary landing page (Hero, Conversation, Features, etc.).
- `src/components/common/`: Shared business logic components (e.g., WaitlistModal).
- `src/context/`: Global application state (UIContext).
- `src/styles/`: Centralized design system (`main.css`).
- `src/types/`: Centralized TypeScript definitions and interfaces.
- `src/services/`: AI and system-level integrations.
- `src/pages/`: Main application route views (LandingPage, EthicsPage).

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
3. (Optional) Add your Google AI API key to `.env` to enable real streaming:
   ```env
   VITE_AI_API_KEY=your_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Production Build
```bash
npm run build
```

## Roadmap
- [x] Modernized React 19 / TS 6.0 Architecture
- [x] Path Aliasing (`@/`) for clean imports
- [x] Presence Core (Canvas Animation)
- [x] Atmosphere & Mood-based UI
- [x] Centralized State Management (UIContext)
- [ ] Direct local inference integration (Ollama/WebLLM)
- [ ] Functional Vector Database (SQLite-VSS)
- [ ] Voice-to-Voice (Whisper Turbo) local processing

---
© 2026 Allure AI · Designed for Human Connection · Made in the Void
