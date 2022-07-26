const displayArea = document.querySelector('#display'),
numberButtons = document.querySelectorAll('.numbers'),
operationButtons = document.querySelectorAll('.operations'),
equalsButton = document.querySelector('#equals'),
clearButton = document.querySelector('#clear');

let firstNumber = null,
secondNumber = null,
outcome = null,
result = null,
displayCorrection = true,
operationChoice = "";

function add(x, y) {
    outcome = x + y;
    firstNumber = outcome; secondNumber = null;
    return outcome
}
function substract(x, y) {
    outcome = x - y;
    firstNumber = outcome; secondNumber = null;
    return outcome
}
function multiply(x, y) {
    outcome = x * y;
    firstNumber = outcome; secondNumber = null;
    return outcome
}
function divide (x, y) {
    outcome = x / y;
    firstNumber = outcome; secondNumber = null;
    return outcome
}
function displayPopulation(value) {    
    return displayArea.innerText += value;
}
function operate(operationChoice, firstNumber, secondNumber) {
    switch (operationChoice) {
        case "add":
            outcome = add(firstNumber, secondNumber);
            break;
        case "substract":
            outcome = substract(firstNumber, secondNumber);
            break;
        case "multiply":
            outcome = multiply(firstNumber, secondNumber);
            break;
        case "divide":
            outcome = divide(firstNumber, secondNumber);
            break;
        default:
            break;
    }
    firstNumber = outcome; secondNumber = null;
    return outcome
}

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (firstNumber !== null && displayCorrection === false) {
            displayArea.innerText = "";
            displayCorrection = true;
        }
        displayPopulation(button.id);
    });
});

operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        displayCorrection = false;
        if (firstNumber !== null) {
            secondNumber = parseInt(displayArea.innerText, 10);
            result = operate(operationChoice, firstNumber, secondNumber);
            displayArea.innerText = result;
            operationChoice = button.id;
        } else {
            operationChoice = button.id;
            firstNumber = parseInt(displayArea.innerText, 10);
            displayArea.innerText = "";
        }
    });
});

equalsButton.addEventListener('click', () => {
    secondNumber = parseInt(displayArea.innerText, 10);
    result = operate(operationChoice, firstNumber, secondNumber);
    displayArea.innerText = result;
});

clearButton.addEventListener('click', () => {
    firstNumber = null; secondNumber = null; outcome = null;
    result = null; operationChoice = ""; displayArea.innerText = "";
});