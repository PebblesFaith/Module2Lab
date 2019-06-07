
function buttonFunction2() {
    var userInput1 = document.getElementById("input1").value;
    document.getElementById("outputText1").innerHTML = userInput1;

    var userInput2 = document.getElementById("input2").value;
    document.getElementById("outputText2").innerHTML = userInput2;

    var userInput3 = document.getElementById("input3").value;
    document.getElementById("outputText3").innerHTML = userInput3;
}


let today = new Date().toISOString().substr(0, 10);
document.querySelector("#today").value = today;
document.querySelector("#input3").valueAsDate = new Date();

    