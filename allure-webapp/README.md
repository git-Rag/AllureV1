# Allure V1 — A Private Presence

Allure is a "Noir-Minimalist" landing page and prototype for a fully offline, privacy-first AI companion. Built on the philosophy of **Privacy by Physics**, Allure is designed to run entirely on the edge, ensuring that your most personal thoughts and memories never leave your device.

## 🌑 Philosophy: Privacy by Physics
Unlike traditional "Privacy by Policy" models where you trust a corporation not to look at your data, Allure operates on **Privacy by Physics**. We don't have a cloud. We don't have your keys. If the data isn't transmitted, it can't be compromised.

## 🛠 Technical Manifest

### Core Stack
- **Framework:** React 18 (TypeScript)
- **Build Tool:** Vite
- **Styling:** Vanilla CSS (Brutalist-Noir design system)
- **Icons:** Custom SVG Sprite System

### Architectural Highlights
- **Local Intelligence:** Designed for Local Llama 3B (Quantized) and Whisper Large v3-Turbo.
- **Atmospheric UX:** Dynamic design system that reacts to "moods" (Rain, Wind, Fire, Silence) and user interaction.
- **Edge-First RAG:** Concept for SQLite-VSS with local AES-256 encryption for memory retrieval.

## 📂 Project Structure

```text
allure-webapp/
├── public/                 # Static assets & SVG icons
├── src/
│   ├── assets/             # Images and brand assets
│   ├── components/
│   │   ├── common/         # Reusable UI (Modals, etc.)
│   │   ├── landing/        # Landing page sections (Hero, Architecture, Scenarios)
│   │   └── layout/         # Structural components (Header, Footer, Tweaks)
│   ├── context/            # Global UI & State management
│   ├── hooks/              # Custom hooks (Scroll animations, etc.)
│   ├── pages/              # Main route components
│   ├── services/           # AI Streaming & API logic
│   ├── styles/
│   │   ├── base/           # CSS Variables & Global resets
│   │   ├── components/     # Component-specific styles
│   │   └── layout/         # Layout-specific styles
│   └── types/              # TypeScript definitions
├── eslint.config.js
├── package.json
└── tsconfig.json
```

## 🚀 Getting Started

### 1. Installation
```bash
git clone https://github.com/your-repo/allure-v1.git
cd allure-webapp
npm install
```

### 2. Configure AI Streaming (Optional)
The project includes a mock streaming service by default. To connect a live Gemini API:
1. Create a `.env` file in the `allure-webapp` root.
2. Add your API key: `VITE_AI_API_KEY=your_gemini_api_key`
3. The service in `src/services/ai.ts` will automatically switch from mock to live streaming.

### 3. Development
```bash
npm run dev
```

## 🎨 Design System
Allure uses a custom **Brutalist-Noir** system defined in `src/styles/base/variables.css`.

- **Typography:** Serif for display (`Times New Roman` / `Georgia`) and Mono for body (`Space Mono`) to create a "technical manuscript" feel.
- **Palette:** `oklch`-based dark scales with a high-contrast Crimson (`#df5858`) accent.
- **Interaction:** Scroll-driven animations (`useAnimateOnScroll`) and canvas-based organic "Presence" indicators.

## 📜 License
Private/Proprietary — All rights reserved.

---
*Created with intent in the abyss.*
