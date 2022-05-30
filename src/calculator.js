const isNumber = (a, b) => {
  return typeof a === "number" && typeof b === "number";
};

const add = (a, b) => {
  return isNumber(a, b) ? a + b : "non-number argument given";
};

const subtract = (a, b) => {
  return isNumber(a, b) ? a - b : "non-number argument given";
};

const divide = (a, b) => {
  return isNumber(a, b) ? a / b : "non-number argument given";
};

const multiply = (a, b) => {
  return isNumber(a, b) ? a * b : "non-number argument given";
};

const calculator = {
  add,
  subtract,
  divide,
  multiply,
};

module.exports = calculator;
