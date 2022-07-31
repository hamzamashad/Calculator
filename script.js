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

function clearScreen() {
    firstNumber = null; secondNumber = null; outcome = null;
    result = null; operationChoice = ""; displayValue = ""; displayArea.innerText = "";
}
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
            if (secondNumber === 0) {
                alert('Nice try!');
                clearScreen();
            } else {
                outcome = divide(x, y);
                outcome = Math.round(outcome * 100) / 100;    
            }
            break;
        default:
            break;
    }
    firstNumber = outcome; secondNumber = null; operationChoice = "";
    return outcome
}

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === '.' && displayArea.innerText.includes('.')) {
            return
        }
        if (displayValue === '0') {
            displayValue = button.id
          } else {
            displayValue += button.id;
        }
        displayPopulation();
    });
});
operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (firstNumber !== null) {
            secondNumber = parseFloat(displayArea.innerText);
            result = operate(operationChoice, firstNumber, secondNumber);
            displayValue = result;
            operationChoice = button.id;
            displayPopulation();
            displayValue = "";
        } else {
            operationChoice = button.id;
            firstNumber = parseFloat(displayArea.innerText);
            displayValue = "";
        }
    });
});
equalsButton.addEventListener('click', () => {
    if (firstNumber !== null) {
        secondNumber = parseFloat(displayArea.innerText);
        result = operate(operationChoice, firstNumber, secondNumber);
        displayValue = result;
        displayPopulation();
        displayValue = "";
    } else {
        firstNumber = parseFloat(displayArea.innerText, 10);
        displayValue = "";
    }
});
clearButton.addEventListener('click', clearScreen);

document.addEventListener('keypress', (event) => {
    const keyName = event.key;
    if (keyName == '1' || keyName == '2' || keyName == '3' || keyName == '4' || keyName == '5' || keyName == '6' || keyName == '7' || keyName == '8' || keyName == '9' || keyName == '0') {
        displayValue += keyName;
        displayPopulation();
    } else if (keyName == '+') {
        if (firstNumber !== null) {
            secondNumber = parseInt(displayArea.innerText, 10);
            result = operate(operationChoice, firstNumber, secondNumber);
            displayValue = result;
            operationChoice = "add";
            displayPopulation();
            displayValue = "";
        } else {
            operationChoice = "add";
            firstNumber = parseInt(displayArea.innerText, 10);
            displayValue = "";
        }
    } else if (keyName == '-') {
        if (firstNumber !== null) {
            secondNumber = parseInt(displayArea.innerText, 10);
            result = operate(operationChoice, firstNumber, secondNumber);
            displayValue = result;
            operationChoice = "substract";
            displayPopulation();
            displayValue = "";
        } else {
            operationChoice = "substract";
            firstNumber = parseInt(displayArea.innerText, 10);
            displayValue = "";
        }
    } else if (keyName == '*') {
        if (firstNumber !== null) {
            secondNumber = parseInt(displayArea.innerText, 10);
            result = operate(operationChoice, firstNumber, secondNumber);
            displayValue = result;
            operationChoice = "multiply";
            displayPopulation();
            displayValue = "";
        } else {
            operationChoice = "multiply";
            firstNumber = parseInt(displayArea.innerText, 10);
            displayValue = "";
        }
    } else if (keyName == '/') {
        if (firstNumber !== null) {
            secondNumber = parseInt(displayArea.innerText, 10);
            result = operate(operationChoice, firstNumber, secondNumber);
            displayValue = result;
            operationChoice = "divide";
            displayPopulation();
            displayValue = "";
        } else {
            operationChoice = "divide";
            firstNumber = parseInt(displayArea.innerText, 10);
            displayValue = "";
        }
    } else if (keyName == 'Enter') {
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
    } else if (keyName == 'c') {
        firstNumber = null; secondNumber = null; outcome = null;
        result = null; operationChoice = ""; displayValue = ""; displayArea.innerText = "";
    }
}, false);