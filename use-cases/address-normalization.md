# Address Normalization for Comparison

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
