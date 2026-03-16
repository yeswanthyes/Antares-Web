# Antares Browser 🚀

Antares is a modern, high-performance, and privacy-focused open-source web browser built on top of the Chromium engine. It is designed to be fast, secure, and integrated with the latest AI technologies to enhance your browsing experience.

## ✨ Features

- **Blazing Fast Rendering**: Powered by the Chromium engine (Blink + V8).
- **Modern UI**: A sleek and intuitive interface built with React and Tailwind CSS.
- **Smooth Animations**: Interactive and fluid transitions using Framer Motion.
- **AI-Powered Integration**: 
  - **OpenAI API**: Smart search assistant and webpage summarization.
  - **Ollama**: Support for local AI models for enhanced privacy and offline assistance.
- **Security & Privacy**:
  - **AES-256 Encryption** for user data.
  - **Sandbox Isolation** to prevent malicious scripts from affecting the system.
  - **Secure Storage APIs** for managing sensitive information.
- **Open Source**: Full transparency and community-driven development.

## 🛠️ Tech Stack

### Core Browser Engine
- **Chromium**: The foundation for rendering and JavaScript execution (Blink + V8).

### Application Framework
- **Electron**: Enables building a cross-platform desktop application using web technologies and Node.js.

### Frontend / UI
- **React**: Declarative UI library for building the browser components (tabs, address bar, settings).
- **Tailwind CSS**: Utility-first CSS framework for rapid and consistent styling.
- **Framer Motion**: Production-ready motion library for React.

### Backend / Core Logic
- **Node.js**: Powers the browser's internal logic and system-level integrations.

### AI Integration
- **OpenAI API**: For cloud-based AI features.
- **Ollama**: For local, private AI model execution.

### Security
- **AES-256 Encryption**: Industry-standard encryption for data at rest.
- **Sandbox Isolation**: Leveraging Chromium's robust sandboxing architecture.

### Advanced Tools
- **Redux**: Predictable state container for managing complex browser states (history, tabs, settings).
- **Electron Builder**: Tooling for building and packaging the application for distribution (.exe, .dmg, etc.).

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yeswanthyes/antares.git
   ```
2. Navigate to the project directory:
   ```bash
   cd antares
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application in development mode:
   ```bash
   npm run dev
   ```

## 📜 License

Antares is open-source software licensed under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue for any feature requests or bug reports.
