"use scrict"

// Calculator functions
function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}

function operate(x, y, op) {
  switch (op) {
    case '+':
      return add(x, y);
    case '-':
      return subtract(x, y);
    case '*':
      return multiply(x, y);
    case '/':
      return divide(x, y);
    default:
      return "ERROR, OPERATION NOT FOUND.";
  }
}

let firstNum = 0;
let secondNum = 0;
let result = 0;
let opps = '';

const calculatorBody = document.querySelector("#calculator-body");

// Calculator Display
const display = calculatorBody.firstElementChild;
display.textContent = firstNum;

// Function to update display
function updateDisplay() {
  firstNum = 0;
  display.textContent = firstNum;
}



// Select all numbers
const numberContainer = document.querySelectorAll('.number');

// All html numbers as javascript variables
const one = numberContainer[0];
const two = numberContainer[1];
const three = numberContainer[2];
const four = numberContainer[3];
const five = numberContainer[4];
const six = numberContainer[5];
const seven = numberContainer[6];
const eight = numberContainer[7];
const nine = numberContainer[8];

// Adds number to display
function calculatorInput(btn, i) {

  btn.onclick = () => {
    if (firstNum == 0) {
      firstNum = i;
      display.textContent = firstNum;
    }
    else {
      firstNum = firstNum * 10 + i;
      display.textContent = firstNum;
    }

  }
}

// Runs function on button press
calculatorInput(one, 1);
calculatorInput(two, 2);
calculatorInput(three, 3);
calculatorInput(four, 4);
calculatorInput(five, 5);
calculatorInput(six, 6);
calculatorInput(seven, 7);
calculatorInput(eight, 8);
calculatorInput(nine, 9);

// zero
const zero = document.querySelector('.zero');
calculatorInput(zero, 0);

const operatorContainer = document.querySelectorAll('.operator');
const addition = operatorContainer[0];
const subtraction = operatorContainer[1];
const times = operatorContainer[2];
const division = operatorContainer[3];
const equals = operatorContainer[4];

// Calculation
let repeat = false;

addition.onclick = () => {
  if (opps != '') {
    result += operate(secondNum, firstNum, opps);
    opps = '+';
    firstNum = 0;
  }
  else {
    opps = '+';
    secondNum += firstNum;
    firstNum = 0;
  }
}

subtraction.onclick = () => {
  if (opps != '') {
    result += operate(secondNum, firstNum, opps);
    opps = '-';
    firstNum = 0;
  }
  else {
    opps = '-';
    secondNum += firstNum;
    firstNum = 0;
  }
}

times.onclick = () => {
  if (opps != '') {
    result *= operate(secondNum, firstNum, opps);
    opps = '*';
    firstNum = 0;
  }
  else {
    opps = '*';
    secondNum += firstNum;
    firstNum = 0;
  }
}

division.onclick = () => {
  if (opps != '') {
    result /= operate(secondNum, firstNum, opps);
    opps = '/';
    firstNum = 0;
  }
  else {
    opps = '/';
    secondNum = firstNum;
    firstNum = 0;
  }
}

equals.onclick = () => {
  if (repeat == true) {
    result = operate(result, firstNum, opps);
    display.textContent = Math.round(result);
  }
  else {
    result += operate(secondNum, firstNum, opps);
    display.textContent = Math.round(result);
  }

  repeat = true;
}

// Clear button

clearButton = document.querySelector('.clear');
decimalPoint = document.querySelector('.decimal');

clearButton.onclick = () => {
  firstNum = 0;
  secondNum = 0;
  result = 0;
  repeat = false;
  opps = '';
  display.textContent = firstNum;
}





















