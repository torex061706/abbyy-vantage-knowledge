function readUtf8(path) {
    var stream = new ActiveXObject("ADODB.Stream");
    stream.Type = 2;
    stream.Charset = "utf-8";
    stream.Open();
    stream.LoadFromFile(path);
    var content = stream.ReadText(-1);
    stream.Close();
    return content;
}

function assertEqual(actual, expected, label) {
    if (actual !== expected) {
        WScript.Echo("FAIL: " + label + " expected " + expected + " but got " + actual);
        WScript.Quit(1);
    }
}

function runAddress(input) {
    var field = { Value: input };
    Context = {
        CheckSucceeded: true,
        ErrorMessage: "",
        GetField: function () { return field; }
    };
    eval(readUtf8("JS_Script/Check_VenderAddress_Thai.js"));
    return Context.CheckSucceeded;
}

function runShipTo(input) {
    var field = { Value: input };
    Context = {
        CheckSucceeded: true,
        ErrorMessage: "",
        GetField: function () { return field; }
    };
    eval(readUtf8("JS_Script/Map_ShipTo.js"));
    return { value: field.Value, succeeded: Context.CheckSucceeded };
}

var thaiPrefix = "570\u0e2b\u0e21\u0e39\u0e48\u0034\u0e15\u0e4d\u0e32\u0e1a\u0e25\u0e41\u0e1e\u0e23\u0e01\u0e29\u0e32";
var thaiFullAddress = thaiPrefix + " \u0e2d\u0e4d\u0e32\u0e40\u0e20\u0e2d\u0e40\u0e21\u0e37\u0e2d\u0e07\u0e2a\u0e21\u0e38\u0e17\u0e23\u0e1b\u0e23\u0e32\u0e01\u0e32\u0e23 10280";

assertEqual(runAddress(thaiPrefix), true, "Thai address prefix");
assertEqual(runAddress(thaiFullAddress), true, "Thai full address");
assertEqual(runAddress("570 MOO 4 SUKHUMVIT"), false, "non-Thai address");

var plant1 = runShipTo("1500 ABC");
assertEqual(plant1.value, "11103709", "1500 mapping");
assertEqual(plant1.succeeded, true, "1500 status");

var plant2 = runShipTo("9999 XYZ");
assertEqual(plant2.value, "11103548", "9999 mapping");
assertEqual(plant2.succeeded, true, "9999 status");

var mapped = runShipTo("11103709");
assertEqual(mapped.value, "11103709", "already mapped value");
assertEqual(mapped.succeeded, true, "already mapped status");

var unsupported = runShipTo("Other Plant");
assertEqual(unsupported.succeeded, false, "unsupported Ship To status");

WScript.Echo("PASS: Thai address and Ship To mapping cases");
