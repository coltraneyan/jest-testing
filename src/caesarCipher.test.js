const cipher = require("./caesarCipher");

test("throws error on non-letters", () => {
  expect(cipher(2)).toBe("please input a string using letters only");
});

test("encrypts non-z letters", () => {
  expect(cipher("hi")).toBe("ij");
});

test("encrypts z to a", () => {
  expect(cipher("z")).toBe("a");
});

test("does not encrypt punctuation and numbers", () => {
  expect(cipher("I am 2, 2 years old.")).toBe("j bn 2, 2 zfbst pme.");
});
