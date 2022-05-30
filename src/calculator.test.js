const calculator = require("./calculator");

test("detects non-number argument", () => {
  expect(calculator.add(1, "b")).toBe("non-number argument given");
});

test("adds two numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("finds difference between two numbers", () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
});

test("divides two numbers", () => {
  expect(calculator.divide(1, 2)).toBe(0.5);
});

test("multiplies two numbers", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});
