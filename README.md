# AWS Student Community Day 2025 Website

A Progressive Web Application (PWA) for the AWS Student Community Day 2025 event in Mega Manila, designed to provide event information, facilitate registration, and engage attendees with offline functionality.

## 📅 Event Information

AWS Cloud Clubs Philippines is excited to host the first AWS Student Community Mega Manila this August 2025. Join us to learn from the story and advocacy of the community, industry, and academe experts, and many more AWSomeness.

## 🚀 Tech Stack

- **Frontend:** Next.js 14+
- **Styling:** Tailwind CSS

## ✨ Key Features

### Features

- 📋 **Event Information** - Centralized event details and updates
- 🗓️ **Program Flow** - Full agenda with session descriptions
- 📍 **Venue Information** - Map integration and travel guidance
- ✅ **Registration Link** - External registration redirect
- 🎤 **Speaker Lineup** - Profile and information
- 🤝 **Sponsors & Partners** - Event supporters showcase
- 👥 **Team Recognition** - Organizers and contributors credits
- ❓ **FAQs** - Common inquiries

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- bun
- ESLint and Prettier VSCode extension (for auto-formatting and auto-fixing)

### Installation

```bash
# Clone the repository
git clone https://github.com/Student-Community-Day-Mega-Manila-2025/scd-manila-2025.git

# Navigate to project directory
cd scd-manila-2025

# Install bun
npm install -g bun
# or
curl -fsSL https://bun.com/install | bash

# Install dependencies
bun install
```

For auto-formatting and auto-fixing of some linting errors, install **Prettier** and **ESLint** extensions in your machine.

### Environment Variables

Create a `.env.local` file for any external API keys:

```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-maps-key
```

### Development

```bash
# Start development server
bun run dev

# Build for production
bun run build

# To manually run lint with --fix
bun eslint --fix
# or with no --fix
bun run lint

# To manually format and check types
bun run format && bun run check-types
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   ├── layout/         # Layout components
│   └── sections/       # Page sections
├── app/                # Next.js pages
├── styles/             # Global styles and Tailwind config
├── public/             # Static assets
│   ├── icons/          # PWA icons
│   └── images/         # Event images
├── lib/                # Utilities and configurations
├── hooks/              # Custom React hooks
├── context/            # React context providers
└── types/              # TypeScript type definitions
```

## 🔄 Development Workflow

### Branch Naming Convention

- `feature/feature-name` - New features
- `bugfix/issue-description` - Bug fixes
- `hotfix/critical-fix` - Critical production fixes
- `docs/update-description` - Documentation updates

### Commit Message Convention

```
type(scope): description

feat(registration): add QR code generation
fix(ui): resolve mobile navigation issue
docs(readme): update setup instructions
```

### Code Style

- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Use Tailwind CSS utility classes
- Component names in PascalCase
- File names in kebab-case

## 🔀 Pull Request Process

### Before Creating a PR

- [ ] Ensure your branch is up to date with `main`
- [ ] Build successfully: `bun run build`
- [ ] Follow code style guidelines

### PR Template

Use our pull request template located in `.github/PULL_REQUEST_TEMPLATE.md`

### Review Process

1. At least one reviewer approval required
2. All CI checks must pass
3. No merge conflicts
4. Test coverage maintained

## 👥 Team

- **Project Lead:** Marie Criz Zaragoza
- **Frontend Developers:** Ken Velano, Renz Carlo Caritativo, Rodney Milay Maisog
- **UI/UX Designer:** Eijay Palpatoc, Lucky Silo, Joemar Lagat

**AWS Student Community Day 2025** - Building the future of cloud computing education in the Philippines 🇵🇭☁️
