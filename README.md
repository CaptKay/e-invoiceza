# e-invoiceza

Cloud-based multi-tenant e-invoicing SaaS platform targeting EU sandbox integrations (Peppol, Digipoort, Mercurius, Chorus Pro). The repository is structured as a pnpm workspace with a TypeScript Express backend and a React 19 + Vite frontend scaffold.

## Getting Started

### Prerequisites
- Node.js 18+
- pnpm 9+

### Installation
```bash
pnpm install
```

### Available Scripts
| Command | Description |
| --- | --- |
| `pnpm dev:server` | Start the Express API with hot reload (port 4000 by default). |
| `pnpm dev:client` | Start the React development server (port 5173). |
| `pnpm build` | Build all workspace packages. |
| `pnpm lint` | Run Biome linting across the workspace. |

## Project Structure
```
.
├── client/   # React 19 + Vite frontend scaffold (Tailwind, RTK, Router)
├── server/   # Express TypeScript backend scaffold (Zod, structured routing)
└── docs/     # Functional specification (SRS)
```

## Environment
Copy `.env.example` to `.env` to configure API server values.

```bash
cp .env.example .env
```

## Next Steps
- Implement tenant, user, and invoice Prisma models.
- Add authentication endpoints and UI flows.
- Connect the frontend to the backend API and expand analytics visualizations.
