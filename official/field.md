# Field Object

**Evidence:** `[ABBYY OFFICIAL]`

The `Field` object represents an extracted document field.

## Verified Core Properties

| Property | Meaning |
|---|---|
| `Children` | Child fields of a group |
| `DataType` | Field data type |
| `FieldType` | Field type |
| `FullName` | Full path |
| `HasRegion` | Whether the value has a region on the image |
| `Instances` | Repeating instances |
| `IsConfirmed` | Verified by operator/rule |
| `IsRepeatable` | Repeating field status |
| `IsSuspicious` | Low-confidence recognition |
| `IsValid` | Text converted to Value successfully |
| `IsVisible` | Visible on document |
| `Name` | Field name |
| `Parent` | Parent field |
| `ReadOnly` | Manual-review editability flag |
| `Symbols` | Recognized symbols |
| `Text` | Original recognized text |
| `Value` | Normalized value |

## Text vs Value

- `Text` is original recognized text.
- `Value` is normalized according to the configured data type.
- Money examples use `field.Value.Amount`.

## Verified Methods

### `AddSuggestion`

```javascript
field.AddSuggestion("Suggested value");
```

### `CopyTo`

```javascript
sourceField.CopyTo(targetField);
```

The data types must match.

### `GetChild`

```javascript
var amount = row.GetChild("Items/Amount");
```

The child path must be a string literal.

## Source

- https://docs.abbyy.com/vantage/documentation/skill-designer/document/rule-verification/field
