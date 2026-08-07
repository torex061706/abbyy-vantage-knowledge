function readFile(path) {
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
        WScript.Echo("FAIL: " + label);
        WScript.Quit(1);
    }
}

function checkAddress(input) {
    var field = { Value: input };
    Context = {
        CheckSucceeded: true,
        ErrorMessage: "",
        GetField: function () { return field; }
    };
    eval(readFile("JS_Script/Check_VenderAddress.js"));
    return Context.CheckSucceeded;
}

assertEqual(checkAddress("570 MOO 4, SUKHUMVIT RD., PARKASA"), true, "Sukhumvit address");
assertEqual(checkAddress("570 MOO 4, BANGPOO INDUSTRIAL ESTATE SOL 12, PRAKASA, A.MUANG SAMUTPRAKARN 10280"), true, "Bangpoo address");
assertEqual(checkAddress("570 M 4 SUKHUMVIT"), true, "short OCR variant");
assertEqual(checkAddress("999 OTHER ADDRESS"), false, "unsupported address");

WScript.Echo("PASS: Vender Address patterns");
