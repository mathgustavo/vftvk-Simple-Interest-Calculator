function compute() {
    <!-- check principal input field in every execution of compute -->
    <!-- i.e. in every click on the Compute Interest button -->
    if(!checkPrincipal())
        return;

    <!-- some params given in tutorial -->
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);

    <!-- my way of present the output -->
    <!-- override innerHTML property of element with id="result" -->
    <!-- with a long string -->
    document.getElementById("result").innerHTML =
        "If you deposit "                + "<mark>" + principal + "</mark>" + ","  + "<br>" +
        "at an interest rate of "        + "<mark>" + rate      + "</mark>" + "%." + "<br>" +
        "You will receive an amount of " + "<mark>" + interest  + "</mark>" + ","  + "<br>" +
        "in the year "                   + "<mark>" + year      + "</mark>" +        "<br>";
}

function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

function checkPrincipal() {
    <!-- check if principal has a value equal or less than zero -->
    <!-- and show a message if true -->
    <!-- the boolean returned is to reuse it in compute() function -->
    if(document.getElementById("principal").value <= 0) {
        alert("Enter a positive number");
        return false;
    }
    return true;
}