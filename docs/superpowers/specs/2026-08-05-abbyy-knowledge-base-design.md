# ABBYY Vantage Knowledge Base Design

## Goal

Create a public repository that teaches humans and AI agents to write safer ABBYY Vantage Advanced Script Rules using ABBYY official evidence and verified project use cases.

## Architecture

- Root governance files explain authority, routing, and maintenance.
- `official/` contains only ABBYY-supported facts.
- `use-cases/` contains tested project behavior.
- `docs/` contains derived standards and error guidance.
- `prompts/` controls AI workflows.
- `templates/` provides safe starting patterns.

## Evidence model

Official evidence outranks use-case evidence. Use-case evidence outranks derived practice. Conflicts are recorded rather than silently resolved.

## Safety boundaries

The repository must not claim SAP compatibility solely from ABBYY success, and it must not contain customer-sensitive or production secrets.

## Success criteria

- AI can identify the correct document before answering.
- API invention is explicitly prohibited.
- Verified and unverified capabilities are distinguishable.
- Existing use cases include requirements, script, test scope, and limitations.
