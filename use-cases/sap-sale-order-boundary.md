# ABBYY–SAP Sale Order Boundary

**Evidence:** `[VERIFIED PROJECT CONTEXT]`

## Critical distinction

A script that succeeds in ABBYY proves only that the ABBYY validation logic ran successfully.

It does not prove that SAP will accept the exported data.

## SAP acceptance depends on

- Exact exported key names
- Data types
- Required fields
- Date and money formats
- Table structure
- RPA mapping
- BAPI/API contract
- Null and missing-key behavior

## Project evidence

The OCR Sale Order project has encountered downstream failures where ABBYY Field Names and Data Types did not match the RPA/PRD expectations.

Therefore:

1. ABBYY validation rules should validate content.
2. Export/mapping tests should validate payload structure.
3. PRD end-to-end tests should validate SAP acceptance.

## Documentation rule

Do not place unverified SAP payloads in this public repository.

For every SAP-facing use case, record:

- ABBYY Field Name
- ABBYY Data Type
- Export key
- Downstream expected type
- Required/optional status
- Verified environment
- Test result and date
