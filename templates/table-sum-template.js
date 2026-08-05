var totalField = Context.GetField("Total");
var tableField = Context.GetField("Items");

if (!totalField || !tableField) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage = "Total field or Items table not found";
    return;
}

var sum = 0;

for (var i = 0; i < tableField.Instances.length; i++) {
    var amountField =
        tableField.Instances[i].GetChild("Items/Amount");

    if (!amountField || !amountField.Value) {
        Context.CheckSucceeded = false;
        Context.ErrorMessage = "Amount is missing in row " + (i + 1);
        return;
    }

    sum += amountField.Value.Amount;
}

var tolerance = 0.01;

if (Math.abs(sum - totalField.Value.Amount) > tolerance) {
    Context.CheckSucceeded = false;
    Context.ErrorMessage =
        "The sum of item amounts does not match Total";
}
