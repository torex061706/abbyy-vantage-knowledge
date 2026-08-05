var field = Context.GetField("Field Name");

if (!field) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage = 'Field "Field Name" not found';
    return;
}

if (field.Value === null || field.Value === undefined) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage = "Field Name is empty";
    return;
}

// Add business validation here.
