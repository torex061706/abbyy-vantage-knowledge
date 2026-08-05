# Agent Workflow for ABBYY Vantage Questions

This workflow keeps generated answers tied to evidence and prevents project-specific assumptions from being presented as ABBYY behavior.

## 1. Classify the request

| Request | Read first | Output emphasis |
|---|---|---|
| Context, Field, property, or method | `official/context.md`, `official/field.md` | Supported API and exact field access |
| Validation or rule failure | `official/validation.md`, `docs/testing.md` | Pass/fail behavior and controlled errors |
| Table or line items | `official/table.md` | Full path, row behavior, and empty-table case |
| Vendor or address matching | Relevant file in `use-cases/` | Requirement-specific normalization and limits |
| SAP/RPA integration | `use-cases/sap-sale-order-boundary.md` | Contract boundary, not guessed SAP behavior |
| Runtime error | `docs/errors.md` | Evidence-based diagnosis and next test |

## 2. Check the evidence boundary

Before writing code, identify each claim as one of:

- `[ABBYY OFFICIAL]`
- `[ABBYY SAMPLE]`
- `[VERIFIED REAL PROJECT]`
- `[DERIVED PRACTICE]`
- `[CONFLICTING EVIDENCE]`
- `[NOT VERIFIED]`

If official documentation and support guidance disagree, preserve both facts and mark the capability as `[CONFLICTING EVIDENCE]`. Do not generate production code that depends on the disputed behavior.

## 3. Confirm the field contract

Ask for, or explicitly state, the exact field path, field type, whether the field is enabled for the rule, and the expected empty/missing behavior. Never silently substitute a similar field name.

For SAP-connected flows, also confirm required keys, field names, data types, date format, and the downstream mapping. A passing ABBYY rule does not prove SAP acceptance.

## 4. Generate a testable answer

Every generated script response must include assumptions, configuration, script, explanation, test cases, limitations, and evidence labels. At minimum test field missing, field empty, valid value, formatting variant, invalid value, and the relevant nested/table case.

## 5. Record new knowledge

Only promote a project observation to `use-cases/` when the requirement, input, expected result, actual result, test environment, and known limitations are recorded. Redact customer documents, personal data, credentials, tokens, production URLs, and unredacted payloads.

## Response rule for gaps

Use this exact statement when the repository does not prove a capability:

> ยังไม่ยืนยันจากข้อมูลใน Repository

Then state what evidence or tenant-level test is needed.
