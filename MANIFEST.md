# Knowledge Manifest

| Path | Purpose | Authority | Update frequency |
|---|---|---|---|
| `README.md` | Entry point and scope | Internal | When structure changes |
| `AGENTS.md` | Instructions for AI agents | Internal policy | When agent behavior changes |
| `CONTEXT.md` | Product and knowledge boundaries | Internal | Rare |
| `RULES.md` | Evidence and maintenance rules | Internal policy | Rare |
| `official/context.md` | Context object API | ABBYY Official | When ABBYY docs change |
| `official/field.md` | Field object API | ABBYY Official | When ABBYY docs change |
| `official/validation.md` | Rule verification patterns | ABBYY Official/Sample | When ABBYY docs change |
| `official/table.md` | Table and repeating rule patterns | ABBYY Official/Sample | When ABBYY docs change |
| `official/references.md` | Source index | ABBYY Official/Support | When sources change |
| `use-cases/vendor-validation.md` | Thai Parkerizing validation | Verified project | When requirement/test changes |
| `use-cases/address-normalization.md` | Address comparison normalization | Verified pattern | When test coverage changes |
| `use-cases/sap-sale-order-boundary.md` | ABBYY-to-SAP responsibility boundary | Project evidence | When integration contract changes |
| `docs/errors.md` | Known failures and fixes | Official + project | As errors are confirmed |
| `docs/coding-standard.md` | Safe coding conventions | Derived practice | When standards improve |
| `docs/testing.md` | Test requirements | Derived practice | When test process changes |
| `docs/limitations.md` | Unsupported/unverified areas | Mixed | As evidence changes |
| `docs/agent-workflow.md` | Evidence-first workflow for AI answers | Internal policy | When agent workflow changes |
| `prompts/generate-script.md` | AI script generation prompt | Internal | When output needs change |
| `prompts/review-script.md` | AI review prompt | Internal | When review needs change |
| `prompts/debug-script.md` | AI debugging prompt | Internal | When error catalog grows |
| `templates/*.js` | Reusable script skeletons | Derived from verified patterns | When patterns improve |
