# 🤖 `AGENTS.md` — OpenAI Codex Agent Guide (for Development)

**Agent Role:** Code Generator / Architect / Refiner for E-Invoicing SaaS (UBL 3.0).  
**Objective:** Assist in building backend API + frontend UI + sandbox integration incrementally.  

---

## 0. System Scope (from SRS)
- Build a multi-tenant e-invoicing SaaS.
- Users can create invoices manually in the UI.
- External systems can POST invoice JSON via API (authenticated by tenant API key).
- The backend transforms invoices into canonical JSON → UBL 3.0 XML → digitally signs the file → submits to EU government sandboxes (Peppol, Digipoort, Mercurius, Chorus Pro).
- Receives approval/rejection feedback and stores results.
- Frontend displays analytics (totals, statuses, charts, rejection reasons).
- Stack: TypeScript + pnpm + Express/Nest + Prisma + Zod + React 19 + React Hook Form + Tailwind + React Router v7 + Redux Toolkit (RTK).
- All rules, entities, and endpoints must comply with the details in `docs/SRS.md`.

---

## 1. Tech Stack Baseline
| Layer | Tools |
|--------|-------|
| Package Manager | pnpm |
| Backend | Express (TypeScript) / optional NestJS |
| Validation | Zod |
| Forms | React Hook Form |
| State Management | Redux Toolkit (RTK) |
| Routing | React Router v7+ |
| Styling | Tailwind (global.css) |
| Lint/Format | Biome |
| Database | Prisma (PostgreSQL) |
| Testing | Jest + Supertest + Playwright |
| Deployment | Render / Netlify |
| CI/CD | GitHub Actions |
| Docs | Markdown + Swagger UI (auto-gen) |

---

## 2. Coding Principles
- Always use **TypeScript** (strict mode).  
- Descriptive variable and function names.  
- Maintain **multi-tenant isolation** (scoped queries).  
- Modularize controllers, services, and routes.  
- Use Zod for validation and integrate with React Hook Form.  
- Use Redux Toolkit for global state management (auth, invoices, metrics).  
- Separate ETL → transform → sign → submit logic into dedicated services.  
- Include unit tests for all utilities and endpoints.  
- Return standardized responses (`ApiResponse<T>`).  
- Graceful error handling with consistent error shape.  
- Document each function with concise JSDoc comments.  

---

## 3. Agent Tasks
1. Scaffold backend routes, controllers, and Zod schemas.  
2. Generate React pages/components (Dashboard, InvoiceForm, Metrics) using RTK for state.  
3. Write Jest/Supertest unit and integration tests.  
4. Implement sandbox submission mock first, real endpoint later.  
5. Build ETL mapping utility using JSONPath or custom resolver.  
6. Configure GitHub Actions pipeline (lint → test → build).  
7. Maintain consistent style and linting via Biome.  

---

## 4. Environment Setup Steps
1. `pnpm create vite@latest client --template react-ts`  
2. `pnpm init server && pnpm add express zod cors`  
3. Configure Biome for lint + format.  
4. Initialize Prisma schema + migrations.  
5. `pnpm add @reduxjs/toolkit react-redux`  
6. `pnpm add jest supertest --save-dev`.  
7. Add `.env` with sandbox URLs and credentials.  

---

## 5. File Structure (Standard)
```
root
├─ server/
│  ├─ src/
│  │  ├─ routes/
│  │  ├─ controllers/
│  │  ├─ services/
│  │  ├─ schemas/
│  │  ├─ utils/
│  │  └─ main.ts
│  └─ tests/
│    └─ invoice.test.ts
│  package.json
├─ client/
│  ├─ src/
│  │  ├─ app/
│  │  │   └─ store.ts
│  │  ├─ features/
│  │  │   ├─ auth/
│  │  │   ├─ invoices/
│  │  │   └─ metrics/
│  │  ├─ hooks/
│  │  ├─ pages/
│  │  ├─ components/
│  │  └─ main.tsx
│  tailwind.config.ts
└─ docs/
    ├─ SRS.md
    └─ AGENTS.md
```

---

## 6. AI Codex Execution Rules
- Generate **runnable code** — no pseudocode.  
- Maintain strict typing, imports, and export consistency.  
- Append to existing structure rather than overwrite unless asked.  
- Favor functional service patterns over classes.  
- Use RTK slices and async thunks for API calls.  
- Deliver atomic, testable modules with small commits.  

---

## 7. Safety & Compliance
- Never commit real certificates or sandbox credentials.  
- Use environment variables for secrets.  
- Mask sensitive data in logs.  
- Keep deployments within EU data jurisdictions.  
- Adhere to GDPR, EN-16931, and PCI DSS SAQ-A (future payments).  

---

## 8. Agent Output Formatting
When generating code:  
````markdown
```ts
// client/src/features/invoices/invoicesSlice.ts
...
```
````

When updating docs, write directly to Markdown.  
Use ✅ emoji to mark completed modules.  

---

**Reminder:** Always reference `docs/SRS.md` for deeper functional scope, data models, or endpoint behavior.

