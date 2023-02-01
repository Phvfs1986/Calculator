let mainVisor = document.getElementById('main-visor');

let addButton = document.getElementById('add');
let minusButton = document.getElementById('minus');
let multButton = document.getElementById('mult');
let divisionButton = document.getElementById('division');
let clearButton = document.getElementById('clear');
let equalsButton = document.getElementById('equals');


let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let zero = document.getElementById('zero');

let displayValue = '';
let currentValue = '';
let operand = '';
let operations = '';

document.addEventListener('keydown', e => {
    let selection = e.key;
    console.log(selection);
    calculator(selection);
})
document.addEventListener('click', e => {
    let selection = e.target.id;
    calculator(selection);
})
function updateVisor() {
    mainVisor.innerText = displayValue;
}
function operate(currentValue, otherValue, operand) {
    if (operand == '+') {
        displayValue = +currentValue + +otherValue;
        operand = '';
        updateVisor();
    }
    else if (operand == '-') {
        displayValue = +currentValue - +otherValue;
        operand = '';
        updateVisor();
    }
    else if (operand == '*') {
        displayValue = +currentValue * +otherValue;
        operand = '';
        updateVisor();
    }
    else if (operand == '/') {
        displayValue = +currentValue / +otherValue;
        operand = '';
        updateVisor();
    }
}
function calculator(selection) {
    switch (selection) {
        case 'one':
        case '1':
            displayValue += '1';
            updateVisor();
            break;
        case 'two':
        case '2':
            displayValue += '2';
            updateVisor();
            break;
        case 'three':
        case '3':
            displayValue += '3';
            updateVisor();
            break;
        case 'four':
        case '4':
            displayValue += '4';
            updateVisor();
            break;
        case 'five':
        case '5':
            displayValue += '5';
            updateVisor();
            break;
        case 'six':
        case '6':
            displayValue += '6';
            updateVisor();
            break;
        case 'seven':
        case '7':
            displayValue += '7';
            updateVisor();
            break;
        case 'eight':
        case '8':
            displayValue += '8';
            updateVisor();
            break;
        case 'nine':
        case '9':
            displayValue += '9';
            updateVisor();
            break;
        case 'zero':
        case '0':
            displayValue += '0';
            updateVisor();
            break;
        case 'add':
        case '+':
            if (operand != '') {
                operate(currentValue, displayValue, operand);
            }
            currentValue = displayValue;
            operand = '+';
            updateVisor();
            displayValue = '';
            break;
        case 'minus':
        case '-':
            if (operand != '') {
                operate(currentValue, displayValue, operand);
            }
            currentValue = displayValue;
            operand = '-';
            updateVisor();
            displayValue = '';
            break;
        case 'mult':
        case '*':
            if (operand != '') {
                operate(currentValue, displayValue, operand);
            }
            currentValue = displayValue;
            operand = '*';
            updateVisor();
            displayValue = '';
            break;
        case 'division':
        case '/':
            operations += ' / ';
            if (operand != '') {
                operate(currentValue, displayValue, operand);
            }
            currentValue = displayValue;
            operand = '/';
            updateVisor();
            displayValue = '';
            break;
        case 'equals':
        case '=':
            operations += ' = '
            operate(currentValue, displayValue, operand);
            currentValue = '';
            operand = '';
            break;
        case 'clear':
        case 'backspace':
            displayValue = '';
            currentValue = '';
            operand = '';
            updateVisor();
            break;
    }
}