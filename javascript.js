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

document.addEventListener('click', e => {
    let selection = e.target.id;
    console.log(selection);

    switch (selection) {
        case 'one':
            displayValue += '1';
            updateVisor();
            break;
        case 'two':
            displayValue += '2';
            updateVisor();
            break;
        case 'three':
            displayValue += '3';
            updateVisor();
            break;
        case 'four':
            displayValue += '4';
            updateVisor();
            break;
        case 'five':
            displayValue += '5';
            updateVisor();
            break;
        case 'six':
            displayValue += '6';
            updateVisor();
            break;
        case 'seven':
            displayValue += '7';
            operations += ' 7 ';
            updateVisor();
            break;
        case 'eight':
            displayValue += '8';
            updateVisor();
            break;
        case 'nine':
            displayValue += '9';
            updateVisor();
            break;
        case 'zero':
            displayValue += '0';
            updateVisor();
            break;
        case 'add':
            if (operand != '') {
                operate(currentValue, displayValue, operand);
            }
            currentValue = displayValue;
            operand = '+';
            updateVisor();
            displayValue = '';
            break;
        case 'minus':
            if (operand != '') {
                operate(currentValue, displayValue, operand);
            }
            currentValue = displayValue;
            operand = '-';
            updateVisor();
            displayValue = '';
            break;
        case 'mult':
            if (operand != '') {
                operate(currentValue, displayValue, operand);
            }
            currentValue = displayValue;
            operand = '*';
            updateVisor();
            displayValue = '';
            break;
        case 'division':
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
            operations += ' = '
            operate(currentValue, displayValue, operand);
            currentValue = '';
            operand = '';
            break;
        case 'clear':
            displayValue = '';
            currentValue = '';
            operand = '';
            updateVisor();
            break;
    }
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