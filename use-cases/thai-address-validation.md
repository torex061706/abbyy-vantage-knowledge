# Thai Vendor Address Prefix Validation

**Evidence:** `[VERIFIED REAL PROJECT]`

## Requirement

The `Vender Address` field must start with the normalized Thai address prefix:

```text
570 หมู่ 4 ตําบลแพรกษา
```

The complete confirmed address may continue with:

```text
อําเภอเมืองสมุทรปราการ จังหวัดสมุทรปราการ 10280
```

## Normalization

The script lowercases the value, removes whitespace, and removes `.`, `,`, `/`, and `-`. Thai characters are preserved. It then checks that the normalized value starts with:

```text
570หมู่4ตําบลแพรกษา
```

## Script

Implementation: `JS_Script/Check_VenderAddress_Thai.js`

## Test cases

| Input | Expected result |
|---|---|
| `570 หมู่ 4 ตําบลแพรกษา` | Pass |
| `570 หมู่ 4 ตําบลแพรกษา อําเภอเมืองสมุทรปราการ จังหวัดสมุทรปราการ 10280` | Pass |
| `570 MOO 4 SUKHUMVIT` | Fail; use the English address rule separately |
| Empty value | Fail |

## Limitations

- This is prefix matching, not semantic address matching.
- Thai Unicode composition variants such as `ตําบล` and `ตำบล` have not been normalized and require tenant-level testing.
- OCR substitutions and alternate Thai spellings may fail.

## Rule configuration

Enable the exact `Vender Address` field or its full path in the Advanced Script Rule configuration.
