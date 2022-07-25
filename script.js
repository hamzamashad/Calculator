const displayArea = document.querySelector('#display'),
numberButtons = document.querySelectorAll('.numbers'),
operationButtons = document.querySelectorAll('.operations'),
equalsButton = document.querySelector('#equals'),
clearButton = document.querySelector('#clear');

let firstNumber = null,
secondNumber = null,
outcome = null,
result = null,
operationChoice = "";

function add(x, y) {
    return x + y
}
function substract(x, y) {
    return x - y
}
function multiply(x, y) {
    return x * y
}
function divide (x, y) {
    return x / y
}
function displayPopulation(value) {    
    return displayArea.innerHTML += value;
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
    return outcome
}

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        displayPopulation(button.id);
    });
});

operationButtons.forEach((button) => {
    button.addEventListener('click', () => {
        firstNumber = parseInt(displayArea.innerText, 10);
        displayArea.innerHTML = "";
        operationChoice = button.id;
    });
});

equalsButton.addEventListener('click', () => {
    secondNumber = parseInt(displayArea.innerText, 10);
    result = operate(operationChoice, firstNumber, secondNumber);  
    displayArea.innerHTML = result;
});

clearButton.addEventListener('click', () => {
    firstNumber = null; secondNumber = null; outcome = null;
    result = null; operationChoice = ""; displayArea.innerHTML = "";
});