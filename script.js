let display = document.querySelector(".display");
let numbers = document.querySelectorAll(".pad.number");
let clear = document.querySelector(".pad.clear");
let operators = document.querySelectorAll(".pad.operator");
let equals = document.querySelector(".pad.equals");

let numbersArray = [];
let targetNumber1 = 0;
let targetNumber2 = 0;
let operator;

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", displayNumbers);
}

clear.addEventListener("click", clearNumber);

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", setOperator);
}

equals.addEventListener("click", performOperation);

function updateDisplay() {
  display.innerText = targetNumber1;
}
updateDisplay();

function displayNumbers(event) {
  const number = parseFloat(event.target.innerText);
  numbersArray.push(number);
  targetNumber1 = numbersArray.join("");
  updateDisplay();
}

function clearNumber() {
  numbersArray = [];
  targetNumber1 = 0;
  targetNumber2 = 0;
  operator = null;
  updateDisplay();
}

function setOperator(event) {
  let condition = event.target.innerText;
  if (condition === "+") {
    operator = "sum";
  } else if (condition === "-") {
    operator = "substraction";
  } else if (condition === "x") {
    operator = "multiplication";
  } else if (condition === "/") {
    operator = "divide";
  }
  numbersArray = [];
  targetNumber2 = targetNumber1;
  targetNumber1 = 0;
}

function performOperation() {
  if (operator === "sum") {
    targetNumber1 = parseFloat(targetNumber1) + parseFloat(targetNumber2);
  } else if (operator === "substraction") {
    targetNumber1 = parseFloat(targetNumber2) - parseFloat(targetNumber1);
  } else if (operator === "multiplication") {
    targetNumber1 = parseFloat(targetNumber1) * parseFloat(targetNumber2);
  } else if (operator === "divide") {
    targetNumber1 = parseFloat(targetNumber2) / parseFloat(targetNumber1);
  }
  updateDisplay();
  numbersArray = [];
}
