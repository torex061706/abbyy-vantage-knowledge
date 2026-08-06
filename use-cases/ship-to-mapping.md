# Ship To Mapping

**Evidence:** `[VERIFIED REAL PROJECT]` for the mapping requirement; `[ABBYY OFFICIAL]` for field access and value assignment.

## Requirement

Map the extracted `Ship To` value as follows:

| Input after whitespace normalization | Output |
|---|---|
| `SSMC Plant1` | `12345` |
| `SSMC Plant2` | `67891` |

## Script

Implementation: `JS_Script/Map_ShipTo.js`

## Behavior

- Reads `Ship To` once with `Context.GetField()`.
- Lowercases the value and removes whitespace.
- Writes the mapped value back to the same field.
- Fails validation for empty or unsupported values.

## Test cases

| Input | Expected result |
|---|---|
| `SSMC Plant1` | Field becomes `12345` |
| `SSMC Plant2` | Field becomes `67891` |
| `SSMCPlant1` | Field becomes `12345` |
| Empty value | Controlled failure |
| Other value | Controlled failure |

## Limitations

- The output values are written as strings; the field data type and downstream export contract must be confirmed.
- This script does not prove SAP/RPA acceptance.

## Rule configuration

Enable the exact `Ship To` field or its full path in the Advanced Script Rule configuration.
