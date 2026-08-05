# Rule Verification and Official Validation Patterns

**Evidence:** `[ABBYY OFFICIAL]` and `[ABBYY SAMPLE]`

Rules can validate, modify, and calculate field values. Failed documents can be routed to manual review. When reviewed values change, applicable rules run again.

## Field existence

```javascript
var field = Context.GetField("MyField");

if (!field) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage = "MyField field not found";
} else if (!field.Value) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage = "MyField field empty";
}
```

## Floating-point comparison

```javascript
if (Math.round(value1) !== Math.round(value2)) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage = "The values are different";
}
```

## Money comparison

```javascript
if (Math.abs(value1 - value2) > 0.0001) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage = "The values are different";
}
```

The tolerance must match the business rule. Do not select it without explanation.

## Conditional required fields

A field may be required only when another field contains a particular value.

## Region validation

```javascript
if (!field || !field.HasRegion) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage = "Field is not present on the document image";
}
```

## Rule execution

Rules that reference only repeating fields from the same group become repeating rules and run once per instance.

## Sources

- https://docs.abbyy.com/vantage/documentation/skill-designer/document/rule-verification/rule-verification
- https://docs.abbyy.com/vantage/documentation/skill-designer/document/rule-verification/sample-scripts
