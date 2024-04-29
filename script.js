let display = document.querySelector(".display");
let numbers = document.querySelectorAll(".taster.number");
let clear = document.querySelector(".taster.clear");
let operators = document.querySelectorAll(".taster.operator");
let equals = document.querySelector(".taster.equals");

let numbersArray = [];
let targetNumber1 = 0;
let targetNumber2 = 0;
let operator;

const updateDisplay = () => {
  display.innerText = targetNumber1;
};
updateDisplay();

const displayNumber = (e) => {
  const number = parseFloat(e.target.innerText);
  numbersArray.push(number);
  targetNumber1 = numbersArray.join("");
  updateDisplay();
};

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", displayNumber);
}

const clearNumber = () => {
  numbersArray = [];
  targetNumber1 = 0;
  targetNumber2 = 0;
  operator = null;
  updateDisplay();
};

clear.addEventListener("click", clearNumber);

const setOperator = (e) => {
  let condition = e.target.innerText;
  switch (condition) {
    case "+":
      operator = "sum";
      break;
    case "-":
      operator = "substraction";
      break;
    case "x":
      operator = "multiplication";
      break;
    case "/":
      operator = "divide";
      break;
    default:
  }
  numbersArray = [];
  targetNumber2 = targetNumber1;
  targetNumber1 = 0;
};

for (let i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", setOperator);
}

const result = () => {
  switch (operator) {
    case "sum":
      targetNumber1 = parseFloat(targetNumber1) + parseFloat(targetNumber2);
      break;
    case "substraction":
      targetNumber1 = parseFloat(targetNumber2) - parseFloat(targetNumber1);
      break;
    case "multiplication":
      targetNumber1 = parseFloat(targetNumber1) * parseFloat(targetNumber2);
      break;
    case "divide":
      targetNumber1 = parseFloat(targetNumber2) / parseFloat(targetNumber1);
      break;
    default:
  }
  updateDisplay();
  numbersArray = [];
};

equals.addEventListener("click", result);
