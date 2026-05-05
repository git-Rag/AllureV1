# Allure · Private Offline AI Companion

Allure is a private, fully offline AI companion designed for deep understanding and absolute privacy. It currently functions as a high-fidelity interactive prototype showcasing the future of human-AI companionship.

## Core Philosophy
- **Privacy by Physics:** No cloud, no surveillance. All processing is designed for the edge.
- **Sacred Space:** A mirror for your thoughts, designed to listen, remember, and grow with you.
- **Aesthetic Sovereignty:** A brutalist-experimental design built for focus and emotional subtext.

## Key Features
- **Presence Core:** An organic, canvas-based visual representation of the AI that responds to user proximity and system state.
- **Streaming Interaction:** Real-time, multilingual chat interface with emotional subtext awareness.
- **Dynamic Themes:** Real-time customization of system accents and interface geometry (Brutalist vs. Refined).
- **Ethics-First Design:** Transparent disclosure of AI behavior and data privacy principles.

## Tech Stack
- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Navigation:** [React Router 7](https://reactrouter.com/)
- **Styling:** Vanilla CSS with [OKLCH](https://oklch.com/) color space and CSS Custom Properties
- **Animation:** Canvas API (Presence Core) & Intersection Observer (Scroll effects)
- **AI Service:** Streaming integration with Google Gemini (via API) and mock fallback for offline prototyping.

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
3. (Optional) Add your Google AI API key to `.env`:
   ```env
   VITE_AI_API_KEY=your_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure
- `src/components/`: Modular UI components (Hero, Presence, Tweaks, etc.)
- `src/pages/`: Main application views (Landing, Ethics)
- `src/services/`: AI and system services
- `src/hooks/`: Custom React hooks for animations and state
- `src/index.css`: Global design tokens and base styles

## Roadmap
- [x] Initial design port to React
- [x] Multi-page routing implementation
- [x] Presence Core (Canvas Animation)
- [x] Streaming AI interaction preview
- [x] Real-time theme customization
- [ ] Mobile-first UI refinements
- [ ] Integration with local inference engines (Ollama/Llama.cpp)
- [ ] Vector database implementation (SQLite-VSS)
- [ ] Long-term memory synchronization (Encrypted)

---
© 2026 Allure AI · Designed for Human Connection · Made in the Void
