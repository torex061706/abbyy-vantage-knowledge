# Prompt — Review ABBYY Script

Review the supplied script against `AGENTS.md` and repository evidence.

Check:

- ABBYY API validity
- Field null guards
- `.Text` vs `.Value`
- Money handling
- Table paths
- Rule configuration access
- Zero/empty behavior
- Error messages
- Unsupported JavaScript assumptions
- SAP claims that exceed ABBYY validation scope

Return findings by severity, then provide a corrected script only where necessary.
