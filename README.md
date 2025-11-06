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
| `pnpm dev` | Start every workspace `dev` script in parallel (client + API). |
| `pnpm dev:client` | Start the React development server (port 5173). |
| `pnpm dev:server` | Start the Express API with hot reload (port 4000 by default). |
| `pnpm build` | Run `build` across all workspaces. |
| `pnpm build:client` | Build only the frontend bundle. |
| `pnpm build:server` | Build only the backend TypeScript output. |
| `pnpm test` | Execute tests in every workspace. |
| `pnpm test:client` | Run client-only tests. |
| `pnpm test:server` | Run server-only tests. |
| `pnpm lint` | Run Biome linting in each workspace package. |
| `pnpm lint:workspace` | Lint the entire repository from the workspace root. |

## Project Structure
```
.
├── client/   # React 19 + Vite frontend scaffold (Tailwind, RTK, Router)
├── server/   # Express TypeScript backend scaffold (Zod, structured routing)
└── docs/     # Functional specification (SRS)
```

## Working With the Monorepo
- **Run scripts across all packages:** `pnpm run --recursive <script>` executes the script in each workspace (`pnpm dev`, `pnpm build`, `pnpm test`, `pnpm lint`, etc.).
- **Filter commands to a package:** `pnpm run --filter @e-invoiceza/client <script>` or `pnpm run --filter @e-invoiceza/server <script>`.
- **Mix filters with recursion:** Combine `--recursive`, `--parallel`, and `--filter` to tailor execution (e.g., `pnpm run --recursive --parallel --filter @e-invoiceza/* dev`).
- **Add shared tooling:** Install dev tools (e.g., `@biomejs/biome`) once at the repo root and they will be available in each package via `pnpm exec`.
- **Add package-specific dependencies:** Run `pnpm --filter <package> add <dependency>` to scope dependencies to a single workspace.

## Environment
Copy `.env.example` to `.env` to configure API server values.

```bash
cp .env.example .env
```

## Next Steps
- Implement tenant, user, and invoice Prisma models.
- Add authentication endpoints and UI flows.
- Connect the frontend to the backend API and expand analytics visualizations.
