# Ship To Mapping

**Evidence:** `[VERIFIED REAL PROJECT]` for the mapping requirement; `[ABBYY OFFICIAL]` for field access and value assignment.

## Requirement

Use only the first four characters of the extracted `Ship To` value after lowercasing and removing whitespace:

| First four characters | Output |
|---|---|
| `1500` | `11103709` |
| `9999` | `11103548` |
| `11103709` | Keep unchanged |
| `11103548` | Keep unchanged |

## Script

Implementation: `JS_Script/Map_ShipTo.js`

## Behavior

- Reads `Ship To` once with `Context.GetField()`.
- Lowercases the value and removes whitespace.
- Extracts the first four characters with `substring(0, 4)`.
- Writes the mapped value back to the same field.
- Keeps already mapped values unchanged.
- Fails validation for empty or unsupported prefixes.

## Test cases

| Input | Expected result |
|---|---|
| `1500 ABC` | Field becomes `11103709` |
| `9999 XYZ` | Field becomes `11103548` |
| `11103709` | Field remains `11103709` |
| `11103548` | Field remains `11103548` |
| Empty value | Controlled failure |
| Other value | Controlled failure |

## Limitations

- The output values are written as strings; the field data type and downstream export contract must be confirmed.
- This script does not prove SAP/RPA acceptance.

## Rule configuration

Enable the exact `Ship To` field or its full path in the Advanced Script Rule configuration.
