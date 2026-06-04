# Asistentes IA

> A web application for creating and managing custom AI assistants with configurable behavior, tone, language, and response parameters.

## Features

- **Create custom AI assistants** with configurable name, language, tone, and rules
- **Response length control** — distribute short, medium, and long response ratios per assistant
- **Audio toggle** — enable or disable audio output per assistant
- **Full CRUD** — create, view, edit, and delete assistants from the dashboard
- **Persistent storage** — assistants saved in localStorage with 4 pre-loaded examples
- **Chat simulation** — individual assistant page with a simulated conversation interface

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| UI | React 19 |
| Styling | Tailwind CSS 4 |
| Icons | Lucide React |
| State | React Context + localStorage |

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/JuanP60/AsistentesIA.git
cd AsistentesIA
npm install
```

### Running

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Dashboard — list of assistants
│   └── agents/[id]/page.tsx  # Individual assistant chat view
├── components/
│   ├── IACards/              # Assistant card grid
│   ├── Modals/               # Create and edit modals
│   ├── Header/ & Footer/     # App shell
│   ├── Card/ & Loader/ & Toast/
├── context/
│   └── LocalStorageContext.tsx  # Global CRUD state
├── data/
│   ├── asistentes.json       # Default assistant presets
│   └── responses.json        # Generic response templates
└── types/
    ├── Assistant.tsx          # Assistant and response interfaces
    ├── Context.tsx & Modals.tsx
```

## Pre-loaded Assistants

| Name | Language | Tone |
|------|----------|------|
| Asistente de Ventas | Spanish | Professional |
| Soporte Tecnico | English | Friendly |
| Agendador | Spanish | Friendly |
| Digitador | Spanish | Professional |

## License

MIT