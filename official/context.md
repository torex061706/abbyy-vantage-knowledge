# Context Object

**Evidence:** `[ABBYY OFFICIAL]`

`Context` is the global object used by Advanced Script Rules to access fields, the current document, transaction information, skill parameters, and rule results.

## Verified Properties

| Property | Type | Access | Meaning |
|---|---|---|---|
| `CheckSucceeded` | `bool` | Read-write | Whether the rule passed; defaults to `true` |
| `CurrentField` | `Field` | Read-only | Current field instance; may be `null` for document-level rules |
| `Document` | `Document` | Read-only | Current document |
| `ErrorMessage` | `string` | Read-write | Custom validation error |
| `Transaction` | `Transaction` | Read-only | Current transaction |

## Verified Methods

### `GetField`

```javascript
Field Context.GetField(string fieldName);
```

- Use a full path for nested fields.
- Pass the name as a string literal.
- Check the result before using it.

```javascript
var field = Context.GetField("BusinessUnit/Address");

if (!field) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage = "Address field not found";
    return;
}
```

### `GetFields`

```javascript
Field[] Context.GetFields(string fieldName);
```

Returns all instances with the given name, such as every cell in a table column.

```javascript
var amounts = Context.GetFields("Items/Amount");
```

### `GetCatalogRecord`

```javascript
Record Context.GetCatalogRecord(string catalogId, string externalId);
```

The current Context documentation lists this method. However, an ABBYY Support article states that querying Data Catalog from Advanced Script Rule may be impractical when the External ID is unavailable.

**Status:** `[CONFLICTING EVIDENCE]`

Do not use in production without a tenant/version-specific test.

### `SkillParameter`

```javascript
SkillParameter Context.SkillParameter(string parameterName);
```

```javascript
var threshold = Context.SkillParameter("Threshold").Value;
```

## Sources

- https://docs.abbyy.com/vantage/documentation/skill-designer/document/rule-verification/context
- https://support.abbyy.com/hc/en-us/articles/23156726604435-Is-it-possible-to-use-Vantage-Data-Catalog-in-Advanced-Script-Rule
