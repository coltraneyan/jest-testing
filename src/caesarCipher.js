let alphabet = "abcdefghijklmnopqrstuvwxyz";

function cipher(inputString) {
  const newString = [];
  if (typeof inputString !== "string") {
    return "please input a string using letters only";
  } else {
    inputString.split("").forEach((letter) => {
      if (letter == "z") {
        newString.push("a");
      } else if (!alphabet.includes(letter.toLowerCase())) {
        newString.push(letter);
      } else {
        e = alphabet.split("").indexOf(letter.toLowerCase());
        newString.push(alphabet.split("")[e + 1]);
      }
    });
    return newString.join("");
  }
}

module.exports = cipher;
