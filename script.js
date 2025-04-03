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

// DOM Manipulation

const numberContainer = document.querySelector("#number-container");

// Create grid of numbers

for (let i = 1; i < 10; ++i) {
  const grid = document.createElement("div");
  grid.classList.add("num-" + i);
  grid.textContent = i;
  numberContainer.appendChild(grid);

}



