# Coding Standard

## 1. Retrieve once

```javascript
var field = Context.GetField("Field Name");
```

Do not repeatedly retrieve the same field.

## 2. Guard before access

```javascript
if (!field) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage = "Field not found";
    return;
}
```

## 3. Treat zero correctly

For numeric fields where zero is valid, do not use only `!field.Value`.

## 4. Normalize text intentionally

```javascript
var normalized = String(field.Text)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
```

State what differences are intentionally ignored.

## 5. Use explicit tolerance

```javascript
if (Math.abs(actual - expected) > tolerance) {
    // fail
}
```

Record why the tolerance was chosen.

## 6. Make error messages actionable

Prefer:

```text
Vendor Name is invalid. Found: ABC COMPANY
```

over:

```text
Error
```

## 7. Avoid unsupported assumptions

Do not assume support for Node.js, DOM, external libraries, or arbitrary modern JavaScript syntax without an exact source or tenant test.
