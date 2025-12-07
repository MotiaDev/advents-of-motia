# 🎄 Advent of Motia

A beautiful, Christmas-themed showcase of **30 Days of Backend Magic** built with [Motia](https://motia.dev) backend and [TanStack](https://tanstack.com) frontend.

![Advent Calendar](https://img.shields.io/badge/Days-30-red?style=for-the-badge&logo=calendar) ![Motia](https://img.shields.io/badge/Backend-Motia-blue?style=for-the-badge) ![TanStack](https://img.shields.io/badge/Frontend-TanStack-orange?style=for-the-badge)

## 🎁 What is This?

An interactive advent calendar showcasing real-world Motia examples, from AI agents to workflow automation. Each day unlocks a new backend pattern with:
- 📖 Detailed explanations
- 🐦 Twitter thread links
- 💻 GitHub example repositories
- ✨ Beautiful, mobile-responsive UI

## 🚀 Live Demo

- **Frontend**: [Deployed on Vercel](#) _(Coming soon)_
- **Backend API**: `https://54d5zu-k4ft3c.hub.motia.cloud`

## 🛠️ Tech Stack

### Backend (Motia)
- **Framework**: [Motia](https://motia.dev) - Production-grade backend framework
- **Language**: TypeScript
- **API Endpoints**:
  - `GET /api/advent-days` - List all days
  - `GET /api/advent-days/:day` - Get specific day details

### Frontend (TanStack)
- **Build Tool**: Vite
- **Framework**: React 18
- **Router**: TanStack Router (file-based routing)
- **Data Fetching**: TanStack Query
- **Styling**: Custom CSS with Christmas theme
- **Features**: 
  - Snowfall animation
  - Glassmorphism effects
  - Mobile-responsive design
  - Embedded tweets via `react-tweet`
  - Festive color palette

## 🏃 Quick Start

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm

### Development

```bash
# Install dependencies
npm install

# Start backend (Motia) on port 3000
npm run dev

# In another terminal, start frontend on port 5173
cd frontend
npm install
npm run dev
```

Visit:
- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:3000
- **Motia Workbench**: http://localhost:3000/_workbench

## 📁 Project Structure

```
advent-of-motia/
├── steps/                          # Motia backend steps
│   ├── get-advent-days.step.ts    # GET /api/advent-days
│   └── get-advent-day.step.ts     # GET /api/advent-days/:day
├── frontend/                       # TanStack frontend
│   ├── src/
│   │   ├── routes/                # File-based routing
│   │   │   ├── index.tsx          # Home page (calendar grid)
│   │   │   ├── day/
│   │   │   │   └── $dayNumber.tsx # Day detail page
│   │   │   └── __root.tsx         # Root layout
│   │   ├── queries/
│   │   │   └── adventQueries.ts   # TanStack Query hooks
│   │   ├── styles/                # CSS modules
│   │   └── main.tsx               # App entry
│   ├── public/
│   │   └── motia-icon.svg         # Gift box favicon
│   └── vite.config.ts
├── motia.config.ts                 # Motia configuration
└── package.json
```

## 🎯 Featured Examples

Each day showcases a real Motia example from the [motia-examples](https://github.com/MotiaDev/motia-examples) repository:

1. **GitHub → Notion Sync** - Webhook automation
2. **AI Chat Agent with Memory** - Stateful AI conversations
3. **AI vs AI Tic-Tac-Toe** - Multi-agent game
4. **Telegram + Gmail Automation** - Cross-platform workflows
5. **Airbnb Guest Assistant** - Property management automation
6. **LangGraph Lead Scoring** - AI-powered lead qualification
7. **Multi-Agent Game Generation** - Collaborative AI systems
... and 23 more days to come!

## 🚀 Deployment

### Backend (Motia Cloud)

```bash
# Deploy to Motia Cloud
export MOTIA_API_KEY=your-api-key
npx motia@latest cloud deploy --version-name "1.0.0"
```

Learn more: [Motia Cloud Deployment Guide](https://www.motia.dev/docs/deployment-guide/motia-cloud/deployment)

### Frontend (Vercel)

```bash
# Deploy via CLI
cd frontend
npx vercel

# Or via Vercel Dashboard
# 1. Import GitHub repo
# 2. Set Root Directory: frontend
# 3. Add env: VITE_API_URL=https://your-motia-backend.cloud
# 4. Deploy!
```

## 🎨 Theme & Design

- **Colors**: Warm festive palette (deep reds, golds, forest greens)
- **Effects**: Snowfall animation, glassmorphism cards
- **Typography**: Playfair Display (headings) + Inter (body)
- **Mobile-First**: Fully responsive design
- **Accessibility**: Semantic HTML, ARIA labels

## 📚 Learn More

### About Motia
- [Documentation](https://motia.dev/docs)
- [GitHub](https://github.com/MotiaDev/motia)
- [Examples](https://github.com/MotiaDev/motia-examples)
- [Discord Community](https://discord.gg/motia)

### About TanStack
- [TanStack Router](https://tanstack.com/router)
- [TanStack Query](https://tanstack.com/query)

## 🤝 Contributing

Found a bug or want to add a day? Open an issue or PR!

## 📄 License

MIT

---

**Built with ❤️ using Motia & TanStack**