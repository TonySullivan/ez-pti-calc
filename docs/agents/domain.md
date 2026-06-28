# Domain Docs

How the engineering skills should consume this repo's domain documentation.

## Before exploring, read these

- **`CONTEXT.md`** at the repo root — project domain glossary and architecture overview
- **`docs/adr/`** — architectural decision records. Read ADRs that touch the area you're about to work in.

If any of these files don't exist, proceed silently.

## File structure

Single-context repo:

```
/
├── CONTEXT.md
├── docs/
│   ├── adr/
│   │   ├── 0001-*.md
│   └── agents/
└── src/
```

## Use the glossary's vocabulary

When your output names a domain concept (in an issue title, a refactor proposal, a hypothesis, a test name), use the term as defined in `CONTEXT.md`. Don't drift to synonyms the glossary explicitly avoids.

## Key domain terms (EZ PTI Calc)

- **Jurisdiction** — a county + optional municipality pair that together determine the combined tax rate
- **Millage rate** / **tax rate** — expressed per $100 of assessed value (NC standard)
- **PITI** — Principal, Interest, Tax, Insurance (the four components of a monthly mortgage payment)
- **PMI** — Private Mortgage Insurance, applied when LTV > 80%
- **LTV** — Loan-to-Value ratio (loan amount / home value)
- **Estimate** — a saved PITI calculation for a specific property, associated with a user account
- **Tax rate cache** — the Firestore collection holding county + municipal rates, seeded from static data and refreshed annually by a Cloud Function
