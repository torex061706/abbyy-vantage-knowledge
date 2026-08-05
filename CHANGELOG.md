# Changelog

## Unreleased

- Extended the verified Delivery Date normalization script and use case for `dd/MM/yy`, `d MMM yyyy`, and `dd-MMM-yy` source formats.
- Added a Windows Script Host regression check for Delivery Date normalization.

## 0.1.0 — 2026-08-05

- Created initial knowledge-base structure
- Added ABBYY Official Context and Field references
- Added official validation and table patterns
- Added verified Vendor Name validation use case
- Added address normalization use case
- Added ABBYY/SAP responsibility boundary
- Added AI agent routing and evidence rules
- Marked Data Catalog access as conflicting evidence
- Added verified Delivery Date normalization use case and `Change_Delivery_Data.js`
- Added verified Document Date normalization use case and `Change_Document_Data.js`
- Hardened date scripts against missing fields and date formats without a weekday prefix
