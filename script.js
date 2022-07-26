const displayArea = document.querySelector('#display'),
numberButtons = document.querySelectorAll('.numbers'),
operationButtons = document.querySelectorAll('.operations'),
equalsButton = document.querySelector('#equals'),
clearButton = document.querySelector('#clear');

let firstNumber = null,
secondNumber = null,
outcome = null,
result = null,
operationChoice = "",
displayValue = "";

function add(x, y) {
    outcome = x + y;
    return outcome
}
function substract(x, y) {
    outcome = x - y;
    return outcome
}
function multiply(x, y) {
    outcome = x * y;
    return outcome
}
function divide (x, y) {
    outcome = x / y;
    return outcome
}
function displayPopulation() {
    displayArea.innerText = displayValue;
    if(displayValue.length > 9) {
        displayArea.innerText = displayValue.substring(0, 9);
    }
}
function operate(operationChoice, x, y) {
    switch (operationChoice) {
        case "add":
            outcome = add(x, y);
            break;
        case "substract":
            outcome = substract(x, y);
            break;
        case "multiply":
            outcome = multiply(x, y);
            break;
        case "divide":
            outcome = divide(x, y);
            outcome = Math.round(outcome * 100) / 100 ;
            break;
        default:
            break;
    }
    firstNumber = outcome; secondNumber = null; operationChoice = "";
    return outcome
}

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        displayPopulation();
        displayValue += button.id;
        displayPopulation();
    });
});

operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (firstNumber !== null) {
            secondNumber = parseInt(displayArea.innerText, 10);
            result = operate(operationChoice, firstNumber, secondNumber);
            displayValue = result;
            operationChoice = button.id;
            displayPopulation();
            displayValue = "";
        } else {
            operationChoice = button.id;
            firstNumber = parseInt(displayArea.innerText, 10);
            displayValue = "";
        }
    });
});

equalsButton.addEventListener('click', () => {
    if (firstNumber !== null) {
        secondNumber = parseInt(displayArea.innerText, 10);
        result = operate(operationChoice, firstNumber, secondNumber);
        displayValue = result;
        displayPopulation();
        displayValue = "";
    } else {
        firstNumber = parseInt(displayArea.innerText, 10);
        displayValue = "";
    }
});

clearButton.addEventListener('click', () => {
    firstNumber = null; secondNumber = null; outcome = null;
    result = null; operationChoice = ""; displayValue = ""; displayArea.innerText = "";
});