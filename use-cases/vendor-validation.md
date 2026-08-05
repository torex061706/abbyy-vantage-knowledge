# Vendor Name Validation — Thai Parkerizing

**Evidence:** `[VERIFIED REAL PROJECT]`

## Requirement

The OCR value must refer to:

```text
THAI PARKERIZING COMPANY LIMITED
```

The validation ignores:

- Letter case
- Spaces and line breaks
- Commas
- Periods
- Hyphens
- Company suffix format

The required identity token is:

```text
thaiparkerizing
```

## Script

```javascript
var vendorField = Context.GetField("Vendor Name");

if (!vendorField) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage = 'Field "Vendor Name" not found';
    return;
}

if (!vendorField.Value) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage = "Vendor Name is empty";
    return;
}

var vendor = String(vendorField.Text)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

if (vendor.indexOf("thaiparkerizing") === -1) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage =
        'Vendor Name should refer to "THAI PARKERIZING COMPANY LIMITED". Found: '
        + vendorField.Text;
}
```

## Accepted examples

- `THAI PARKERIZING COMPANY LIMITED`
- `Thai Parkerizing Co., Ltd.`
- `THAI-PARKERIZING`
- `thai    parkerizing`

## Rejected examples

- `Thai Parker`
- `Parkerizing Company Limited`
- Another company name

## Limitations

This is containment matching, not fuzzy matching.

OCR errors such as:

- `THAl` instead of `THAI`
- `PARKERIZlNG` instead of `PARKERIZING`

may fail validation. Adding fuzzy matching requires a separate false-positive test set.

## Rule configuration

Enable the exact `Vendor Name` field or its correct full path in the rule configuration.
