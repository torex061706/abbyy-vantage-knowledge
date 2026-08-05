# Limitations and Unverified Areas

## Not fully documented in this repository

- Complete JavaScript runtime compatibility matrix
- Every `Document` property
- Every `Transaction` property
- Every `Record` and `SkillParameter` property
- Script Activity object model
- Process Skill Custom Activity object model
- SAP BAPI/API schemas
- ABBYY version differences

## Data Catalog

The official Context page lists `GetCatalogRecord()`, but an ABBYY Support article describes a limitation involving External ID availability.

Status: `[CONFLICTING EVIDENCE]`

## Cross-context examples

Do not reuse code from Custom Activity documentation in Advanced Script Rule unless the same API is independently confirmed for Advanced Script Rule.
