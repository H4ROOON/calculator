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
    if (b === 0) {
        return "Error: Can't divide by zero!";
    }
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


let justCalculated = false;

function calculate() {
    if (currentInput === '' || firstNumber === '' || operator === '') return;
    secondNumber = currentInput;
    let result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
    if (typeof result === 'number') {
        result = Math.round(result * 1000) / 1000;
    }
    display.value = result;
    currentInput = result.toString();
    firstNumber = '';
    operator = '';
    justCalculated = true;
}

function appendNumber(num) {
    if (justCalculated) {
        currentInput = '';
        justCalculated = false;
    }
    if (num === '.' && currentInput.includes('.')) return;
    currentInput += num;
    display.value = currentInput;
}

function setOperator(op) {
    if (currentInput === '' && firstNumber === '') return;
    if (currentInput === '' && firstNumber !== '') {
        operator = op;
        return;
    }
    if (firstNumber === '') {
        firstNumber = currentInput;
    } else {
        secondNumber = currentInput;
        const result = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
        display.value = result;
        firstNumber = result.toString();
    }
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
document.getElementById('.').addEventListener('click', () => appendNumber('.'));
function appendNumber(num) {
    if (num === '.' && currentInput.includes('.')) return;
    currentInput += num;
    display.value = currentInput;
}

document.getElementById('+').addEventListener('click', () => setOperator('+'));
document.getElementById('-').addEventListener('click', () => setOperator('-'));
document.getElementById('*').addEventListener('click', () => setOperator('*'));
document.getElementById('/').addEventListener('click', () => setOperator('/'));

document.getElementById('clear').addEventListener('click', clearDisplay);
document.getElementById('=').addEventListener('click', calculate);
