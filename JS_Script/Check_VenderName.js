var vendorField = Context.GetField("Vender Name");

// ตรวจว่า ABBYY หา Field เจอหรือไม่
if (vendorField === null) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage =
        'Field "Vendor Name" not found. Please check the field name or path.';
} else if (vendorField.Value === null || vendorField.Value === "") {
    // Field มีอยู่ แต่ไม่มีค่า
    Context.CheckSucceeded = false;
    Context.ErrorMessage = "Vendor Name is empty";
} else {
    // แปลงค่าเป็นข้อความ ตัวพิมพ์เล็ก
    // แล้วลบช่องว่างและเครื่องหมายทั้งหมด
    var vendor = String(vendorField.Value)
        .toLowerCase()
        .replace(/[^a-z]/g, "");

    // ตรวจว่ามีคำว่า Thai Parkerizing หรือไม่
    if (vendor.indexOf("thaiparkerizing") === -1) {
        Context.CheckSucceeded = false;
        Context.ErrorMessage =
            'Vendor Name should be "THAI PARKERIZING COMPANY LIMITED". Found: '
            + String(vendorField.Value);
    }
}