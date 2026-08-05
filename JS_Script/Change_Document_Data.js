var documentDateField = Context.GetField("Document Date");

if (!documentDateField) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage =
        'Field "Document Date" not found. Please check the field name or path.';
    return;
}

if (documentDateField.Value === null || documentDateField.Value === "") {
    return;
}

var originalText = String(documentDateField.Value).trim();

// หากเป็น d.m.yyyy หรือ dd.mm.yyyy อยู่แล้ว ให้คงค่าเดิมไว้
if (/^\d{1,2}\.\d{1,2}\.\d{4}$/.test(originalText)) {
    return;
}

var dateText = originalText;
var dayNames = {
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: true,
    sunday: true
};

// ตัดชื่อวันเฉพาะกรณีมีชื่อวันอยู่ด้านหน้า เช่น Friday,
var firstWord = dateText.split(/\s+/)[0].replace(",", "").toLowerCase();
if (dayNames[firstWord]) {
    var firstComma = dateText.indexOf(",");
    if (firstComma >= 0) {
        dateText = dateText.substring(firstComma + 1).trim();
    }
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

var month = monthMap[parts[0] ? parts[0].toLowerCase() : ""];
var day = parts[1] ? parts[1].replace(",", "") : "";
var year = parts[2] || "";

if (month && /^\d{1,2}$/.test(day) && /^\d{4}$/.test(year)) {
    documentDateField.Value = day + "." + month + "." + year;
}
