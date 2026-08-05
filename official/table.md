# Tables and Repeating Rules

**Evidence:** `[ABBYY OFFICIAL]` and `[ABBYY SAMPLE]`

## Column access

```javascript
var taxRateFields = Context.GetFields("MyTable/TaxRate");
```

## Row access

```javascript
var table = Context.GetField("MyTable");

for (var i = 0; i < table.Instances.length; i++) {
    var amount =
        table.Instances[i].GetChild("MyTable/Total Price");
}
```

## Sum a money column

```javascript
var totalField = Context.GetField("Total");
var tableField = Context.GetField("MyTable");

if (!totalField || !tableField) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage = "Required field or table not found";
    return;
}

var sum = 0;

for (var i = 0; i < tableField.Instances.length; i++) {
    var rowAmount =
        tableField.Instances[i].GetChild("MyTable/Total Price");

    sum += rowAmount.Value.Amount;
}

if (Math.abs(sum - totalField.Value.Amount) > 0.02) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage =
        "The sum of Total Price does not match Total";
}
```

## Per-row product

When a rule references columns from the same table, ABBYY can run it once per row.

```javascript
var quantityField = Context.GetField("MyTable/Quantity");
var unitPriceField = Context.GetField("MyTable/Unit Price");
var totalField = Context.GetField("MyTable/Total Price");
```

## Configuration warning

Access to the relevant fields and table/group must be enabled in the rule configuration. Otherwise ABBYY may raise:

```text
Access error: Attempt to read data from inaccessible field
```

## Sources

- https://docs.abbyy.com/vantage/documentation/skill-designer/document/rule-verification/sample-scripts
- https://docs.abbyy.com/vantage/documentation/skill-designer/document/rule-verification/rule-verification
- https://support.abbyy.com/hc/en-us/articles/8170391831827-Script-rule-doesn-t-work-for-the-repeating-group-table-Line-items-in-Vantage
