var vendorAddressField = Context.GetField("Vender Address");

if (!vendorAddressField) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage =
        'Field "Vender Address" not found. Please check the field name or path.';
} else if (
    vendorAddressField.Value === null ||
    vendorAddressField.Value === ""
) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage = "Vender Address is empty";
} else {
    var actualAddress = String(vendorAddressField.Value)
        .toLowerCase()
        .replace(/\s/g, "")
        .replace(/[,.\/-]/g, "");

    var requiredAddressPrefix = "570หมู่4ตําบลแพรกษา";

    if (actualAddress.indexOf(requiredAddressPrefix) !== 0) {
        Context.CheckSucceeded = false;
        Context.ErrorMessage =
            'Vender Address should start with "570 หมู่ 4 ตําบลแพรกษา". Found: '
            + String(vendorAddressField.Value);
    }
}
