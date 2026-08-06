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

    if (shipTo === "ssmcplant1") {
        shipToField.Value = "12345";
    } else if (shipTo === "ssmcplant2") {
        shipToField.Value = "67891";
    } else {
        Context.CheckSucceeded = false;
        Context.ErrorMessage =
            "Unsupported Ship To value. Found: "
            + String(shipToField.Value);
    }
}
