# Matज्ञान (MatGyaan) - Bharat Voter Portal

Matज्ञान is a comprehensive, non-partisan voter education platform designed to empower citizens of Bharat with the knowledge and tools needed for effective democratic participation. Built for the modern voter, it combines traditional electoral wisdom with cutting-edge technology.

## 🌟 Key Features

- **🎓 Smart Education**: Interactive modules explaining the functions of Lok Sabha, Rajya Sabha, Vidhan Sabha, and Local Bodies.
- **🛡️ Safety & Myths**: A dedicated section for debunking electoral myths (like EVM hacking) and explaining secure protocols like the **50-vote Mock Poll**.
- **🤖 Matज्ञान AI Assistant**: A neutral, factual AI powered by Google Gemini to answer any election-related queries in real-time.
- **🎰 Voting Simulation**: A step-by-step interactive simulation to familiarize first-time voters with the polling process and EVM mechanics.
- **📍 Booth Guide**: Detailed instructions on finding wards, booths, and understanding the role of polling officers.
- **📝 Important Forms**: Quick access and explanations for Voter Registration (Form 6), Corrections (Form 8), and more.
- **📂 Voter Guide**: A downloadable/viewable comprehensive PDF guide for offline reference.

## 🛠️ Security & Testing Strategy

### **Validation Dashboard**
- **Automated Workflows**: End-to-end simulation of the voting cycle.
- **Unit Testing**: Over 15+ test cases covering UI units, state logic, and accessibility roles.
- **Defensive Praction**: All API keys are sequestered in environment variables; Firestore rules enforce strict attribute-based access control.

### **Running Tests**
```bash
npx vitest run
```

### **Accessibility Compliance**
The application adheres to WCAG guidelines by implementing:
- ARIA roles for simulation-specific controls.
- Screen-reader labels for all graphical EVM elements.
- High-contrast semantic color pairings.

---

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS (Modern Ajrakh & Mughal-inspired design tokens)
- **Animations**: Motion (formerly Framer Motion)
- **Icons**: Lucide React
- **AI Integration**: Google Generative AI (Gemini 1.5 Flash) with Google Search grounding
- **Backend/Server**: Express (for handling environment variables and static serving)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/matgyaan-voter-portal.git
   cd matgyaan-voter-portal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your Gemini API key:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🎨 Design Philosophy

Matज्ञान features a "Modern Ethnic" design language. It integrates traditional Indian patterns like **Ajrakh watermarks** and **Mughal arches** with a clean, grid-based layout. The primary color palette is inspired by official Indian electoral aesthetics, using deep saffrons, teals, and neutrals to establish trust and authority.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*“Your Vote, Your Voice, Your Power.”*
Made with ❤️ for Bharat.
