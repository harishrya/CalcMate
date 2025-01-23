let firstInputScreen = document.getElementById('first-input-screen');
let secondInputScreen = document.getElementById('second-input-screen');
let firstOperand = '';
let secondOperand = '';
let currentOperator = '';

// Focus on the input screen when the page loads
firstInputScreen.focus();

// Clear all inputs and reset the calculator
function allClear() {
    firstOperand = '';
    secondOperand = '';
    currentOperator = '';
    firstInputScreen.value = '';
    secondInputScreen.value = '';
}

// Delete the last character
function deleteOne() {
    if (secondOperand !== '') {
        secondOperand = secondOperand.slice(0, -1);
        firstInputScreen.value = firstOperand + currentOperator + secondOperand;
    } else if (currentOperator !== '') {
        currentOperator = '';
        firstInputScreen.value = firstOperand;
    } else if (firstOperand !== '') {
        firstOperand = firstOperand.slice(0, -1);
        firstInputScreen.value = firstOperand;
    }
}

// Append an operator to the input
function appendOper(operator) {
    if (currentOperator !== '') outputResult();
    currentOperator = operator;
    firstInputScreen.value = firstOperand + currentOperator;
}

// Append a value to the input
function appendValue(value) {
    if (currentOperator === '') {
        firstOperand += value;
        firstInputScreen.value = firstOperand;
    } else {
        secondOperand += value;
        firstInputScreen.value = firstOperand + currentOperator + secondOperand;
    }
}

// Calculate and display the result
function outputResult() {
    let result;
    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);
    
    if (isNaN(num1) || isNaN(num2)) return;
    
    switch (currentOperator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }

    firstInputScreen.value = result;
    secondInputScreen.value = result;
    firstOperand = result.toString();
    secondOperand = '';
    currentOperator = '';
}

// Event listener for key presses
// document.addEventListener('keydown', function(event) {
//     const key = event.key;
//     if ((key >= '0' && key <= '9') || key === '.') { // If the key is a number or decimal point
//         appendValue(key);
//     } else if (key === '+') {
//         appendOper('+');
//     } else if (key === '-') {
//         appendOper('-');
//     } else if (key === '*') {
//         appendOper('*');
//     } else if (key === '/') {
//         appendOper('/');
//     } else if (key === 'Enter' || key === '=') {
//         event.preventDefault(); // Prevent form submission
//         outputResult();
//     } else if (key === 'Backspace') {
//         deleteOne();
//     } else if (key === 'Escape' || key === 'c') {
//         allClear();
//     }
// });
