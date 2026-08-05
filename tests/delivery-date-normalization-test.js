var fileSystem = new ActiveXObject("Scripting.FileSystemObject");
var scriptFile = fileSystem.OpenTextFile("JS_Script/Change_Delivery_Data.js", 1);
var deliveryDateScript = scriptFile.ReadAll();
scriptFile.Close();

if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, "");
    };
}

function runWithValue(input) {
    var field = { Value: input };

    Context = {
        CheckSucceeded: true,
        ErrorMessage: "",
        GetField: function () {
            return field;
        }
    };

    eval(deliveryDateScript);
    return field.Value;
}

function assertEqual(actual, expected, input) {
    if (actual !== expected) {
        WScript.Echo("FAIL: " + input + " expected " + expected + " but got " + actual);
        WScript.Quit(1);
    }
}

assertEqual(runWithValue("Friday, July 10, 2026"), "10.7.2026", "Friday, July 10, 2026");
assertEqual(runWithValue("June 29, 2026"), "29.6.2026", "June 29, 2026");
assertEqual(runWithValue("17/02/26"), "17/02/2026", "17/02/26");
assertEqual(runWithValue("26 Feb 2026"), "26/02/2026", "26 Feb 2026");
assertEqual(runWithValue("19-Sep-25"), "19.9.2025", "19-Sep-25");
assertEqual(runWithValue("17/02/2026"), "17/02/2026", "17/02/2026");
assertEqual(runWithValue("19.9.2025"), "19.9.2025", "19.9.2025");
assertEqual(runWithValue(""), "", "empty value");

Context = {
    CheckSucceeded: true,
    ErrorMessage: "",
    GetField: function () {
        return null;
    }
};
eval(deliveryDateScript);

if (Context.CheckSucceeded !== false || Context.ErrorMessage === "") {
    WScript.Echo("FAIL: missing-field handling");
    WScript.Quit(1);
}

WScript.Echo("PASS: 8 date cases and missing-field handling");
