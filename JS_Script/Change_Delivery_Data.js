var deliveryDateField = Context.GetField("Delivery Date");

if (!deliveryDateField) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage =
        'Field "Delivery Date" not found. Please check the field name or path.';
} else if (deliveryDateField.Value !== null && deliveryDateField.Value !== "") {
    var originalText = String(deliveryDateField.Value).trim();
    var alreadyDotFormatted = /^\d{1,2}\.\d{1,2}\.\d{4}$/.test(originalText);
    var alreadySlashFormatted = /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(originalText);

    if (!alreadyDotFormatted && !alreadySlashFormatted) {
        var dateText = originalText;
        var dayNames = {
            monday: true, tuesday: true, wednesday: true, thursday: true,
            friday: true, saturday: true, sunday: true
        };
        var monthMap = {
            jan: "1", january: "1", feb: "2", february: "2",
            mar: "3", march: "3", apr: "4", april: "4", may: "5",
            jun: "6", june: "6", jul: "7", july: "7", aug: "8", august: "8",
            sep: "9", sept: "9", september: "9", oct: "10", october: "10",
            nov: "11", november: "11", dec: "12", december: "12"
        };
        var firstWord = dateText.split(/\s+/)[0].replace(",", "").toLowerCase();

        if (dayNames[firstWord]) {
            var firstComma = dateText.indexOf(",");

            if (firstComma >= 0) {
                dateText = dateText.substring(firstComma + 1).trim();
            }
        }

        var monthFirstMatch = /^([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})$/.exec(dateText);
        var dayMonthYearMatch = /^(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})$/.exec(dateText);
        var shortHyphenMatch = /^(\d{1,2})-([A-Za-z]{3})-(\d{2})$/.exec(dateText);
        var slashShortYearMatch = /^(\d{1,2})\/(\d{1,2})\/(\d{2})$/.exec(dateText);

        if (monthFirstMatch) {
            var monthFirst = monthMap[monthFirstMatch[1].toLowerCase()];

            if (monthFirst) {
                deliveryDateField.Value = monthFirstMatch[2] + "." + monthFirst + "." + monthFirstMatch[3];
            }
        } else if (dayMonthYearMatch) {
            var dayMonthYear = monthMap[dayMonthYearMatch[2].toLowerCase()];

            if (dayMonthYear) {
                if (dayMonthYear.length === 1) {
                    dayMonthYear = "0" + dayMonthYear;
                }

                deliveryDateField.Value = dayMonthYearMatch[1] + "/" + dayMonthYear + "/" + dayMonthYearMatch[3];
            }
        } else if (shortHyphenMatch) {
            var shortHyphenMonth = monthMap[shortHyphenMatch[2].toLowerCase()];

            if (shortHyphenMonth) {
                deliveryDateField.Value = shortHyphenMatch[1] + "." + shortHyphenMonth + ".20" + shortHyphenMatch[3];
            }
        } else if (slashShortYearMatch) {
            deliveryDateField.Value = slashShortYearMatch[1] + "/" + slashShortYearMatch[2] + "/20" + slashShortYearMatch[3];
        }
    }
}
