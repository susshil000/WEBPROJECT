const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");
let currentInput = "";
let previousInput = ""
let operator = "";
const updateDisplay = () => {
  let value = "";

  if (previousInput !== "") value += previousInput + " ";
  if (operator !== "") value += operator + " ";
  if (currentInput !== "") value += currentInput;

  display.value = value || "0";
};
function clearCalculator() {
  currentInput = "";
  previousInput = "";
  operator = "";
  updateDisplay();
}
const appendNumber = (number) => {
  if (number === "." && currentInput.includes(".")) return;
  currentInput += number;
  updateDisplay();
};
const chooseOperator = (op) => {
  if (currentInput === "") return;
  if (previousInput !== "" && operator !== "") {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "";
  updateDisplay();
};
const calculate = () => {
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(curr)) return;
  let result;
  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      result = curr === 0 ? "Error" : prev / curr;
      break;
    case "%":
      result = prev % curr;
      break;
    default:
      return;
  }
  currentInput = result.toString();
  previousInput = "";
  operator = "";
  updateDisplay();
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;
    if (document.activeElement.tagName == "BUTTON") return;
    if (!isNaN(value) || value === ".") {
      appendNumber(value);
    } else if (value === "AC") {
      clearCalculator();
    } else if (value === "=") {
      calculate();
    } else if (value === "×") {
      chooseOperator("*");
    } else if (value === "÷") {
      chooseOperator("/");
    } else if (value === "±") {
      if (currentInput) {
        currentInput = (parseFloat(currentInput) * -1).toString();
        updateDisplay();
      }
    } else if (["+", "-", "%"].includes(value)) {
      chooseOperator(value);
    }
  });
});
document.addEventListener("keydown", (event) => {
  if (event.repeat) return;
  if (event.target.tagName == "BUTTON") return;

  const key = event.key;

  if (/\d/.test(key)) {
    appendNumber(key);
  } else if (key === ".") {
    appendNumber(".");
  } else if (["+", "-", "*", "/", "%"].includes(key)) {
    chooseOperator(key);
  } else if (key === "Enter" || key === "=") {
    calculate();
  } else if (key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
  } else if (key === "Escape") {
    clearCalculator();
  }

});
function toggleMode(){
  let body=document.body;
  let button=document.getElementById("btn");
   body.classList.toggle("dark");
   if(body.classList.contains("dark")){
    button.innerText ="Light ⚡";
   }else{
    button.innerText ="Dark 🌑";
   }
   
}