// Define Variables
// Get the display element and set operands to empty strings
const display = document.getElementById('display');
let currentOperand = "";
let previousOperand = "";
let operation = "";

// ---- Helper Functions ----

// Update the display:
function updateDisplay() {
    display.value = currentOperand;
}

// append number to the current operand
function appendNumber(number) {
    currentOperand += number;
    updateDisplay();
}

// set the chosen operand and reset the current
function chooseOperation(op) {
    previousOperand = currentOperand;
    currentOperand = "";
    operation = op;
}

// calculate
function calculate() {
    let result;
    switch (operation) {
        case "+":
            //What happens if the case is true
            result = parseFloat(previousOperand) + parseFloat(currentOperand);
            break;
        case "-":
            result = parseFloat(previousOperand) - parseFloat(currentOperand);
            break;
        case "*":
            result = parseFloat(previousOperand) * parseFloat(currentOperand);
            break;
        case "/":
            result = parseFloat(previousOperand) / parseFloat(currentOperand);
            break;
    }
    currentOperand = result.toString();
    updateDisplay();
}

// ---- EVENT LISTENERS ----
// need to attach number button - run the append number function on each number button:
document.querySelectorAll(".number").forEach(function(button) {
    button.addEventListener("click", function () {
        appendNumber(button.textContent);
    })
});

// Operator - +,-,/,* 
document.querySelectorAll(".operator").forEach(function (button) {
    button.addEventListener("click", function() {
        chooseOperation(button.textContent);
    })
})

// Clear button
document.getElementById("clear").addEventListener("click", function () {
    currentOperand = "";
    previousOperand = "";
    operation = "";
    updateDisplay();
});

// Decimal point
document.getElementById("decimal").addEventListener("click", function () {
    if(!currentOperand.includes(".")) {
        appendNumber(".");
    }
});

// Calculate
document.getElementById("calculate").addEventListener("click", function () {
    calculate();
})