# 📘 `SRS.md` — E-Invoicing SaaS (UBL 3.0 / EU Sandbox Integration)

**Project Title:** E-Invoicing SaaS Platform — UBL 3.0 Compliant  
**Version:** v1.0 (Development Spec)  
**Owner:** Oak Techx / Assemblyl Labs  
**License:** Private (Proprietary – Oak Techx / Assemblyl)  
**Date:** November 2025  

---

## 1. Purpose & Scope
To build a cloud-based, multi-tenant invoicing system that allows:
- Users to **create, sign, and submit** invoices to EU e-invoicing sandboxes (Peppol, Digipoort, Mercurius, Chorus Pro).  
- Developers to **integrate via API**, sending invoice JSON → ETL → UBL → signed XML → sandbox approval.  
- Tenants to view **approval/rejection statuses** with real-time analytics.  

---

## 2. System Overview
- **Frontend:** React 19 + TypeScript + Vite + TailwindCSS + React Hook Form + Zod + Recharts for analytics.  
- **Backend:** Node + Express (TypeScript) / optional NestJS modular layer.  
- **Database:** PostgreSQL or MongoDB (multitenant collections).  
- **Auth:** JWT + API Key (for tenant integrations).  
- **Dev Stack Manager:** pnpm + Biome linter + ts-node for scripts.  
- **CI/CD:** GitHub Actions → Render/Netlify for MVP deployment.  
- **Integrations:** EU e-Invoicing Sandboxes (OpenPeppol, Digipoort, Mercurius Test).  

---

## 3. Functional Requirements

### 3.1 Tenant Management
- Register / login / invite users (JWT).  
- Each tenant has own invoices, mappings, and API key.  

### 3.2 Invoice Management
- Create, edit, view invoices from UI.  
- Validate with Zod.  
- Calculate line totals, taxes, currency (€).  
- Export to UBL 3.0 XML.  
- Digitally sign using EU DSS API or local xmlsec.  

### 3.3 External Integration API
- `POST /api/v1/integrations/invoices` accepts any JSON mapped via tenant mapping.  
- ETL: extract → transform (mapping) → load to canonical invoice.  
- Submit to sandbox upon success.  

### 3.4 Government Submission
- Choose sandbox (Peppol/Digipoort/Chorus Pro).  
- Send signed UBL XML → receive ack.  
- Store response (Approved/Rejected).  
- Show error codes and messages in dashboard.  

### 3.5 Analytics & Reporting
- Dashboard: total invoices, sent, approved, rejected, top customers.  
- Chart filters: by status, month, amount.  

### 3.6 Notifications & Webhooks
- Notify tenant when invoice status changes.  
- Support webhooks for approved/rejected events.  

---

## 4. Non-Functional Requirements
| Category | Goal |
|-----------|------|
| Performance | < 500 ms API latency (local demo). |
| Scalability | Multi-tenant DB partitioning. |
| Security | TLS, JWT, API keys, EU PKI for signing. |
| Compliance | UBL 3.0, EN-16931, GDPR. |
| Testing | Unit (Jest), API (Supertest), E2E (Playwright). |
| Deployment | Render/Netlify MVP, Docker later. |

---

## 5. API Design (Sample)

### Public API (v1)
| Endpoint | Method | Description |
|-----------|---------|-------------|
| `/api/v1/auth/login` | POST | Login tenant. |
| `/api/v1/invoices` | GET/POST | List / create invoice (UI). |
| `/api/v1/invoices/:id/submit` | POST | Submit to sandbox. |
| `/api/v1/integrations/invoices` | POST | External invoice via API Key. |
| `/api/v1/mappings` | GET/POST | CRUD for JSON → canonical mapping. |
| `/api/v1/metrics` | GET | Analytics totals. |

---

## 6. Data Models (Simplified)
```ts
Tenant {
  id, name, apiKey, country, createdAt
}
User {
  id, tenantId, email, passwordHash, role
}
Invoice {
  id, tenantId, invoiceNumber, issueDate, supplier, customer,
  currency, lines, total, status
}
InvoiceSubmission {
  id, tenantId, invoiceId, sandbox, sentAt,
  status, govCode, govMessage
}
Mapping {
  id, tenantId, name, mapJson
}
```

---

## 7. Sandbox Integration Flow
1. Validate invoice → UBL XML.  
2. Sign XML (XAdES/CAdES).  
3. POST to selected sandbox endpoint.  
4. Receive ACK / error / rejection XML.  
5. Parse and store result.  

---

## 8. ETL Mapping Engine
- Map custom tenant fields to canonical invoice keys.  
- Support static fields, path expressions (e.g. `buyer.name → customer.name`).  
- Use JSONPath resolver and type checks before submit.  

---

## 9. Security Model
- Passwords → bcrypt.  
- JWT → for UI users.  
- API Key → for external systems.  
- CORS whitelist frontend origin.  
- Signed UBL XML validated with test certs.  

---

## 10. Deployment Plan
- Dev: localhost (Express + Vite).  
- Stage: Render (backend) + Netlify (frontend).  
- CI/CD: GitHub Actions build → lint → test → deploy.  

---

## 11. Testing Plan
- Unit (Jest + Supertest).  
- Integration (API calls). Mock sandbox responses.  
- E2E (Playwright): UI create → sign → submit → receive status.  
- Load tests (k6).  

---

## 12. Future Enhancements
- Real production Peppol AP integration.  
- EU digital signature cert store.  
- Role-based permissions (admin / accountant).  
- Invoice template designer (custom PDF layouts).  
- Payment integration (Mollie / Stripe).

