# Address Normalization for Comparison

## Confirmed accepted English address patterns

**[VERIFIED REAL PROJECT]** — `Vender Address` is accepted when the normalized value contains at least one of these tokens:

| Source pattern | Required normalized token |
|---|---|
| `570 MOO 4, SUKHUMVIT RD., ...` | `570moo4sukhumvitrd` |
| `570 MOO 4, BANGPOO INDUSTRIAL ESTATE SOL 12, PRAKASA, ...` | `570moo4bangpooindustrialestatesol12prakasa` |
| Short OCR variant `570 M 4 SUKHUMVIT` | `570m4sukhumvit` |

Implementation: `JS_Script/Check_VenderAddress.js`

**Evidence:** `[VERIFIED REAL PROJECT PATTERN]`

## Input example

```text
570 MOO 4, SUKHUMVIT RD.,
PARKASA MUANGSAMUTPRAKARN SAMUTHPRAKA
```

## Script pattern

```javascript
var normalizedAddress = addressField.Text
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
```

## Output

```text
570moo4sukhumvitrdparkasamuangsamutprakarnsamuthpraka
```

## What it normalizes

- Upper/lower case
- Spaces
- Line breaks
- Commas
- Periods
- Hyphens
- Other non-alphanumeric symbols

## What it does not solve

- OCR character substitutions
- Missing words
- Different abbreviations
- Different address ordering
- Thai/English transliteration differences

Use this pattern for formatting tolerance, not semantic address matching.
