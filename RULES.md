# Repository Rules

## Evidence Labels

Every technical claim should use one of these labels:

- `[ABBYY OFFICIAL]`
- `[ABBYY SAMPLE]`
- `[VERIFIED REAL PROJECT]`
- `[DERIVED PRACTICE]`
- `[CONFLICTING EVIDENCE]`
- `[NOT VERIFIED]`

## Documentation Boundaries

### `official/`

May contain only information supported by ABBYY sources.

### `use-cases/`

May contain project-specific logic, but must state:

- Requirement
- Script
- Test status
- Known limitations
- Whether production use has been confirmed

### `docs/`

May contain standards and explanations derived from verified material. It must not introduce new ABBYY APIs.

### `prompts/`

Controls AI behavior. Prompt files are not technical evidence.

### `templates/`

Reusable starting points. Templates are not automatically production-ready.

## Change Policy

Do not rewrite stable official content for stylistic reasons alone. Update it only when accuracy, scope, version, or usability improves.

Use cases should be updated when:

- Field names change
- Data types change
- Business acceptance rules change
- Tests reveal false positives or false negatives
- ABBYY behavior differs between tenants or versions

## Public Repository Safety

Do not commit:

- Customer documents
- Tax IDs
- Personal contact emails
- SAP credentials
- ABBYY tokens
- Production URLs
- Unredacted request/response payloads
