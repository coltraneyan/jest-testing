const capitalize = require("./capitalize");

test("capitalizes first letter in string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("capitalizes when input is already capitalized", () => {
  expect(capitalize("HI")).toBe("HI");
});
