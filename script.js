"use scrict";

function add(x, y) { return x + y; }
function subtract(x, y) { return x - y; }
function divide(x, y) { return x / y; }
function multiply(x, y) { return x * y; }

function operate(x, y, op) {

  switch (op) {
    case '+':
      return add(x, y);
    case '-':
      return subtract(x, y);
    case '/':
      return divide(x, y);
    case '*':
      return multiply(x, y);
  }
}

let x = 10;
let y = 25;
let op = '*';

console.log(operate(x, y, op));



