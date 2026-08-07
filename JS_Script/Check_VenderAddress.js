var vendorField = Context.GetField("Vender Address");

if (vendorField === null) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage =
        'Field "Vender Address" not found. Please check the field name or path.';
} else if (vendorField.Value === null || vendorField.Value === "") {
    Context.CheckSucceeded = false;
    Context.ErrorMessage = "Vender Address is empty";
} else {
    var vendor = String(vendorField.Value)
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    var sukhumvitAddress = "570moo4sukhumvitrd";
    var bangpooAddress = "570moo4bangpooindustrialestatesol12prakasa";
    var shortSukhumvitAddress = "570m4sukhumvit";

    var isValidAddress =
        vendor.indexOf(sukhumvitAddress) !== -1 ||
        vendor.indexOf(bangpooAddress) !== -1 ||
        vendor.indexOf(shortSukhumvitAddress) !== -1;

    if (!isValidAddress) {
        Context.CheckSucceeded = false;
        Context.ErrorMessage =
            'Vender Address should contain a supported address pattern. Found: '
            + String(vendorField.Value);
    }
}
