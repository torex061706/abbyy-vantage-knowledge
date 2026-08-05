# Testing Standard

Every use case should include:

| Test | Input | Expected |
|---|---|---|
| Field missing | Incorrect name/path | Controlled rule failure |
| Field empty | Null/empty | Controlled rule failure |
| Standard valid | Canonical value | Pass |
| Formatting variant | Case/space/punctuation differences | Expected per requirement |
| Invalid business value | Different company/value | Fail |
| OCR substitution | One or more wrong characters | Record actual behavior |
| Nested field | Full path | Field is found |
| Rule access missing | Field not enabled | Configuration error |
| Numeric zero | `0` | Correct handling |
| Table empty | No rows | Defined behavior |

## Test status labels

- `Not tested`
- `Tested in Skill Designer`
- `Tested in Manual Review`
- `Tested in E2E`
- `Tested in PRD`

A use case is “production verified” only after the appropriate PRD/E2E test, not merely after script compilation.
