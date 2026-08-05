# Repository Context

## Product Scope

This repository focuses on:

- ABBYY Vantage
- Document Skill
- Rule Verification
- Advanced Script Rule
- OCR validation for Purchase Orders and Sale Orders

It does not automatically cover:

- Process Skill Custom Activity
- Script Activity
- FlexiCapture scripting
- ABBYY Cloud OCR SDK
- SAP APIs or BAPIs

## Knowledge Classes

### 1. ABBYY Official

Facts copied or paraphrased from ABBYY documentation or ABBYY Support.

Location: `official/`

### 2. ABBYY Official Sample

Patterns demonstrated by ABBYY sample scripts.

Location: `official/validation.md`, `official/table.md`

### 3. Verified Real Project

Use cases tested in the user's OCR Sale Order project.

Location: `use-cases/`

### 4. Derived Practice

Safer coding patterns inferred from official examples and verified behavior.

Location: `docs/`

### 5. Not Verified

Ideas that may be reasonable JavaScript but have not been confirmed in the exact ABBYY runtime.

These must not be presented as supported facts.

## Main Data Flow

```text
Purchase Order / Sale Order document
        ↓
ABBYY extraction
        ↓
Field.Text / Field.Value
        ↓
Advanced Script Rule validation
        ↓
Manual Review when a rule fails
        ↓
Export / RPA mapping
        ↓
SAP
```

Passing an Advanced Script Rule validates ABBYY data only. It does not prove that the exported payload matches SAP requirements.
