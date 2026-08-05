var field = Context.GetField("Field Name");

if (!field) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage = 'Field "Field Name" not found';
    return;
}

if (!field.Text) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage = "Field Name is empty";
    return;
}

var normalized = String(field.Text)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

// Compare normalized to the expected normalized value.
