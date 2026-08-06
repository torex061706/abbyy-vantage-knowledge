var shipToField = Context.GetField("Ship To");

if (!shipToField) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage = 'Field "Ship To" not found.';
} else if (shipToField.Value === null || shipToField.Value === "") {
    Context.CheckSucceeded = false;
    Context.ErrorMessage = "Ship To is empty";
} else {
    var shipTo = String(shipToField.Value)
        .toLowerCase()
        .replace(/\s/g, "");
    var shipToPrefix = shipTo.substring(0, 4);

    if (shipToPrefix === "1500") {
        shipToField.Value = "11103709";
    } else if (shipToPrefix === "9999") {
        shipToField.Value = "11103548";
    } else if (shipTo === "11103709" || shipTo === "11103548") {
        // Keep an already mapped value unchanged.
    } else {
        Context.CheckSucceeded = false;
        Context.ErrorMessage =
            "Unsupported Ship To prefix. Found: "
            + String(shipToField.Value);
    }
}
