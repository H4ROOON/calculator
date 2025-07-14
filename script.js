function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') return add(a, b);
    if (operator === '-') return subtract(a, b);
    if (operator === '*') return multiply(a, b);
    if (operator === '/') return divide(a, b);
}
const display = document.getElementById('display');
let currentInput = '';
let firstNumber = '';
let secondNumber = '';
let operator = '';

function appendNumber(num) {
    currentInput += num;
    display.value = currentInput;
}
function setOperator(op) {
    if (currentInput === '') return;
    firstNumber = currentInput;
    operator = op;
    currentInput = '';
}
function calculate() {
    if (currentInput === '' || firstNumber === '' || operator === '') return;

    secondNumber = currentInput;
    const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    display.value = result;
    currentInput = result.toString();
    firstNumber = '';
    operator = '';
}
function clearDisplay() {
    currentInput = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
    display.value = '';
}

for (let i = 0; i <= 9; i++) {
    document.getElementById(`${i}`).addEventListener('click', () => appendNumber(`${i}`));
}


document.getElementById('clear').addEventListener('click', clearDisplay);
document.getElementById('=').addEventListener('click', calculate);
