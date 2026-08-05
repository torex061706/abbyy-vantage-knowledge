var deliveryDateField = Context.GetField("Delivery Date");

if (!deliveryDateField) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage =
        'Field "Delivery Date" not found. Please check the field name or path.';
    return;
}

if (deliveryDateField.Value === null || deliveryDateField.Value === "") {
    // ไม่มีค่าให้แปลง จึงไม่แก้ไขค่า Field
    return;
}

var originalText = String(deliveryDateField.Value).trim();

// หากเป็นรูปแบบ d.m.yyyy หรือ dd.mm.yyyy อยู่แล้ว ให้คงค่าเดิมไว้
var alreadyFormatted = /^\d{1,2}\.\d{1,2}\.\d{4}$/.test(originalText);

if (alreadyFormatted) {
    return;
}

// ตัวอย่าง: Friday, July 10, 2026 → July 10, 2026
var dateText = originalText;
var firstComma = dateText.indexOf(",");

if (firstComma >= 0) {
    dateText = dateText.substring(firstComma + 1).trim();
}

var parts = dateText.split(/\s+/);
var monthMap = {
    january: "1",
    february: "2",
    march: "3",
    april: "4",
    may: "5",
    june: "6",
    july: "7",
    august: "8",
    september: "9",
    october: "10",
    november: "11",
    december: "12"
};

var monthName = parts[0] ? parts[0].toLowerCase() : "";
var month = monthMap[monthName];
var day = parts[1] ? parts[1].replace(",", "") : "";
var year = parts[2] || "";

if (month && /^\d{1,2}$/.test(day) && /^\d{4}$/.test(year)) {
    deliveryDateField.Value = day + "." + month + "." + year;
}
