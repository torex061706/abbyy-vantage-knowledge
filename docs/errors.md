# Error Catalog

## Cannot read property 'Text' of null

### Cause

`Context.GetField()` returned `null`, but the script accessed `.Text`.

### Fix

```javascript
var field = Context.GetField("Field Name");

if (!field) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage = "Field not found";
    return;
}
```

Also check:

- Exact field name
- Full path
- Rule configuration access

## Cannot read property 'Value' of null

Same root cause as the `.Text` error.

## Attempt to read data from inaccessible field

### Cause

The field or table/group is not enabled for the rule.

### Fix

Enable the referenced field and relevant parent group/table in the Edit Rule configuration.

## Money value mismatch

A money field may require:

```javascript
field.Value.Amount
```

Do not assume `field.Value` is a number.

## Zero incorrectly treated as empty

This condition can reject valid numeric zero:

```javascript
if (!field.Value)
```

Use an explicit null/undefined check when zero is valid:

```javascript
if (field.Value === null || field.Value === undefined) {
    // missing
}
```
