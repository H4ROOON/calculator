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
        return "Error: Div by 0";
    }
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') return add(a, b);
    if (operator === '-') return subtract(a, b);
    if (operator === 'x') return multiply(a, b);
    if (operator === '/') return divide(a, b);
}

const display = document.getElementById('display');
let expression = '';
let justCalculated = false;

function appendNumber(num) {
    if (justCalculated) {
        expression = '';
        justCalculated = false;
    }
    expression += num;
    display.value = expression;
}

function setOperator(op) {
    if (justCalculated) {
        justCalculated = false;
    }
    if (expression === '') return;

    if (/[+\-*/] $/.test(expression)) {
        expression = expression.slice(0, -2);
    }

    expression += ` ${op} `;
    display.value = expression;
}

function calculate() {
    if (justCalculated) return;

    const parts = expression.trim().split(' ');
    if (parts.length < 3) return;

    const a = parseFloat(parts[0]);
    const operator = parts[1];
    const b = parseFloat(parts[2]);

    if (isNaN(a) || isNaN(b)) {
        display.value = 'Error';
        expression = '';
        return;
    }

    let result = operate(operator, a, b);

    if (typeof result === 'number') {
        result = Math.round(result * 1000) / 1000;
    }

    display.value = result;
    expression = result.toString();
    justCalculated = true;
}

function clearDisplay() {
    expression = '';
    display.value = '';
    justCalculated = false;
}

for (let i = 0; i <= 9; i++) {
    document.getElementById(`${i}`).addEventListener('click', () => appendNumber(`${i}`));
}
document.getElementById('.').addEventListener('click', () => appendNumber('.'));

document.getElementById('+').addEventListener('click', () => setOperator('+'));
document.getElementById('-').addEventListener('click', () => setOperator('-'));
document.getElementById('x').addEventListener('click', () => setOperator('x'));
document.getElementById('/').addEventListener('click', () => setOperator('/'));

document.getElementById('clear').addEventListener('click', clearDisplay);
document.getElementById('=').addEventListener('click', calculate);
