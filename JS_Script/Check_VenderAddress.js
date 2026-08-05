var vendorField = Context.GetField("Vender Address");

// ตรวจว่า ABBYY หา Field เจอหรือไม่
if (vendorField === null) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage =
        'Field "Vender Address" not found. Please check the field name or path.';
} else if (vendorField.Value === null || vendorField.Value === "") {
    // Field มีอยู่ แต่ไม่มีค่า
    Context.CheckSucceeded = false;
    Context.ErrorMessage = "Vender Address is empty";
} else {
    // แปลงค่าเป็นข้อความ ตัวพิมพ์เล็ก
    // แล้วลบช่องว่างและเครื่องหมายทั้งหมด
    var vendor = String(vendorField.Value)
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    // ตรวจว่ามีคำว่า 570moo4sukhumvitrd หรือไม่
    if (vendor.indexOf("570moo4sukhumvitrd") === -1) {
        Context.CheckSucceeded = false;
        Context.ErrorMessage =
            'Vendor Address should be "570 MOO 4 SUKHUMVIT RD PARKASA MUANGSAMUTPRAKARN SAMUTHPRAKA". Found: '
            + String(vendorField.Value);
    }
}