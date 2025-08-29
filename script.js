"use scrict"

let x = 0;
let y = 0;

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

const calculatorBody = document.querySelector("#calculator-body");

// Calculator Display
const display = calculatorBody.firstElementChild;
display.textContent = x;

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
    if (x == 0) {
      x = i;
      display.textContent = x;
    }
    else {
      x = x * 10 + i;
      display.textContent = x;
    }
  };
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


















