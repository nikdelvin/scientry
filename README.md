# 🧬 Scientry

> Build beautiful dashboards with compact, easy-to-use, and fully customizable CMS for Data Management

Self-hosted, all-in-one Data Management & Visualization solution for scientific researchers.

[![Live Website](https://img.shields.io/badge/🌐_Live-scientry.by.nikdelv.in-success)](https://scientry.by.nikdelv.in)
[![App](https://img.shields.io/badge/🚀_App-scientry.app.nikdelv.in-primary)](https://scientry.app.nikdelv.in)
[![GitHub](https://img.shields.io/badge/GitHub-nikdelvin/scientry-blue)](https://github.com/nikdelvin/scientry)

## 🌟 Overview

Scientry is a powerful self-hosted data management and visualization platform designed specifically for scientific researchers and data analysts. It combines:

- 📊 **Data Management** - Fast relational SQLite database for efficient data storage
- 📈 **Visualization Core** - Advanced charts and graphs powered by D3.js library
- 🎨 **Accessible UI** - Clean, intuitive interface designed for productivity
- 🔓 **100% Free SDK** - Open-source solution for complete self-hosting control

## ✨ Features

### Sci-Fi CMS

Content Management System for any research and data analysis:

- **Fast Database**: Powered with fast relational SQLite database for reliable data storage
- **Advanced Visualization**: Data visualization core based on D3.js library for complex charts and graphs
- **Accessible Design**: UI designed for accessibility and ease of use
- **Self-Hosted**: 100% free SDK for self-hosting with complete data ownership

### Under the Hood

- **Fast Relational Database**: Efficient data storage and retrieval with SQLite
- **Visualization Core**: Complex visualization capabilities for scientific data
- **Accessible UI**: Designed with user experience and accessibility in mind
- **Free SDK**: Complete freedom for self-hosting and customization

## 🗺️ Project Roadmap

### Phase I: Core Data Management (Current)

Foundation for scientific data storage and management:

- Fast relational SQLite database for efficient data operations
- Basic CRUD operations for research data
- Data import/export capabilities
- User authentication and authorization

### Phase II: Advanced Visualization (Coming Soon)

Comprehensive data visualization toolkit:

- D3.js-powered interactive charts and graphs
- Customizable dashboard layouts
- Real-time data updates and streaming
- Export visualizations in multiple formats (PNG, SVG, PDF)

### Phase III: Collaboration Features

Multi-user research environment:

- Team collaboration tools and shared workspaces
- Version control for datasets and visualizations
- Comment and annotation system
- Role-based access control

### Phase IV: AI-Powered Analytics

Intelligent data analysis and insights:

- Automated pattern recognition and anomaly detection
- Predictive analytics and forecasting
- Natural language queries for data exploration
- AI-assisted report generation

## 🛠️ Tech Stack

- **Framework**: [Next.JS](https://nextjs.org/) - The React Framework for the Web
- **Styling**: [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- **UI Library**: [TailyUI](https://tailyui.by.nikdelv.in) - Pure Tailwind CSS UI components
- **Language**: TypeScript - Type-safe JavaScript
- **Deployment**: Firebase Hosting

## 🚀 Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/nikdelvin/scientry.git
cd scientry

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build

```bash
# Build for production (includes linting and type checking)
npm run build

# Preview production build
npm start
```

## 📁 Project Structure

```text
scientry/
├── public/                     # Static assets (favicons, images)
│   ├── favicon.svg
│   └── mockup.png
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   ├── main.tsx            # Main page component
│   │   ├── page.tsx            # Home page
│   │   └── admin/              # Admin routes
│   │       └── page.tsx
│   ├── components/             # React components
│   │   ├── forms/              # Form components
│   │   │   ├── SchemaForm.tsx
│   │   │   └── fields/         # Form field components
│   │   ├── icons/              # Icon components
│   │   └── menu/               # Menu components
│   ├── pages/                  # API routes
│   │   └── api/
│   │       └── ws/             # WebSocket API
│   ├── types/                  # TypeScript type definitions
│   │   └── Field.d.ts
│   ├── utils/                  # Utility functions
│   │   └── configs/
│   └── state.ts                # State management
├── apphosting.yaml             # Firebase App Hosting config
├── next.config.mjs             # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
├── scientry.db                 # SQLite database
└── package.json                # Dependencies and scripts
```

## 📜 Available Scripts

| Command            | Description                                            |
| ------------------ | ------------------------------------------------------ |
| `npm run dev`      | Formats, lints, and starts dev server                  |
| `npm run build`    | Formats, lints, type-checks, and builds for production |
| `npm run start`    | Preview production build locally                       |
| `npm run lint`     | Run ESLint on TypeScript and Astro files               |
| `npm run prettier` | Format all files with Prettier                         |

## 👨‍💻 Creator

Created by [Nikita Stadnik](https://nikdelv.in) - Passionate Fullstack Web Developer

- 📧 Email: [the@nikdelv.in](mailto:the@nikdelv.in)
- 🐙 GitHub: [@nikdelvin](https://github.com/nikdelvin)
- 💼 LinkedIn: [@nikdelvin](https://www.linkedin.com/in/nikdelvin)

## 🔗 Related Projects

- [TailyUI](https://tailyui.app.nikdelv.in) - Modern UI Library built with pure Tailwind CSS
- [Brodly](https://brodly.app.nikdelv.in) - High-secure anonymous live-streaming platform
- [Feelicy](https://feelicy.app.nikdelv.in) - Self-improvement platform with meditation and habit tracking
- [Scripty](https://scripty.app.nikdelv.in) - Practice-oriented educational platform to learn JavaScript
- [Neuroly](https://neuroly.app.nikdelv.in) - STT and voice synthesis AI chatbot

## 📄 License

This project is licensed under the terms specified in the [LICENSE](./LICENSE) file.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/nikdelvin/scientry/issues).

---

**Start managing your research data today!** 🧬 Visit [scientry.app.nikdelv.in](https://scientry.app.nikdelv.in)
