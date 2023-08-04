"use strict";
const operationDisplay = document.getElementById("operation");
const resultDisplay = document.getElementById("result");
const buttons = document.querySelectorAll(".number, .operator");
let currentOperation = "";
let currentResult = "0";
buttons.forEach(button => {
    button.addEventListener("click", () => handleButtonClick(button));
});
function handleButtonClick(button) {
    const value = button.getAttribute("value");
    if (value === "=") {
        try {
            currentResult = eval(currentOperation).toString();
            operationDisplay.textContent = currentOperation;
            resultDisplay.textContent = currentResult;
        }
        catch (error) {
            operationDisplay.textContent = "Error";
            resultDisplay.textContent = "0";
        }
        currentOperation = "";
    }
    else if (value === "C") {
        currentOperation = "";
        currentResult = "0";
        operationDisplay.textContent = "";
        resultDisplay.textContent = "0";
    }
    else {
        currentOperation += value;
        operationDisplay.textContent = currentOperation;
    }
}
