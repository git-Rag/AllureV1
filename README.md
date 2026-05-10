# Allure · Private Offline AI Companion

Allure is a private, fully offline AI companion designed for deep understanding and absolute privacy. 

**Note:** Allure is primarily developed as a native **Android Application**, featuring a complete suite of offline AI capabilities. This webapp serves as a high-fidelity interactive display and showcase of the Allure experience.

## Core Philosophy
- **Privacy by Physics:** No cloud, no surveillance. All processing occurs locally on your device's silicon (NPU/GPU).
- **Sacred Space:** A mirror for your thoughts, designed to listen, remember, and grow with you.
- **Aesthetic Sovereignty:** A brutalist-experimental design built for focus and emotional subtext.

## Key Features (Android & Web Showcase)
- **Presence Core:** An organic, canvas-based visual representation of the AI that responds to user proximity and system state.
- **Atmosphere (Moods):** Real-time environmental shifts (Rain, Wind, Fire, Silence) that alter system colors, shaders, and animations.
- **Voice Memories:** A high-entropy timeline of past interactions, capturing the nuance of your voice and turning fleeting thoughts into a lasting library of you.
- **Multilingual Heart:** Native support for English, Hindi, and the fluid Hinglish of everyday conversation.
- **Contextual Wisdom:** A persistent memory system that connects the dots of your life across time, running entirely offline.
- **Architecture Manifests:** Technical deep-dives into the local-first stack, including quantized Llama models and encrypted vector storage.

## Tech Stack (Web Showcase)
- **Framework:** [React 19](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Language:** [TypeScript 6.0](https://www.typescriptlang.org/)
- **Styling:** Vanilla CSS with [OKLCH](https://oklch.com/) color space and modular CSS architecture.
- **State Management:** React Context API (`UIContext`) for centralized UI state and modal management.

## Project Structure (Webapp)
The codebase follows a modular, feature-based architecture:

- `src/components/layout/`: Global shell components (MainLayout, Header, Footer, Tweaks).
- `src/components/landing/`: Feature-specific sections for the primary landing page (Hero, Conversation, Features, etc.).
- `src/components/common/`: Shared business logic components (e.g., WaitlistModal, AudioManager).
- `src/context/`: Global application state (UIContext).
- `src/styles/`: Centralized design system (`main.css`).
- `src/services/`: AI and system-level integrations.
- `src/pages/`: Main application route views (LandingPage, EthicsPage).

## Getting Started (Webapp)

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

## Roadmap
- [x] Modernized React 19 / TS 6.0 Architecture
- [x] Presence Core (Canvas Animation)
- [x] Atmosphere & Mood-based UI
- [x] Centralized State Management (UIContext)
- [x] Multilingual Hinglish Support
- [ ] Direct local inference integration (Android Native)
- [ ] Functional Vector Database (SQLite-VSS)
- [ ] Voice-to-Voice (Whisper Turbo) local processing

---
© 2026 Allure AI · Designed for Human Connection · Made in the Void
