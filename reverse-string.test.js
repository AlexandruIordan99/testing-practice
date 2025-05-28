const reverseString = require("./reverse-string.js");

it("Reverses string", () => {
  expect(reverseString("john")).
  toBe("nhoj")
});

it("Reverses string", () => {
  expect(reverseString("I am Matei")).
  toBe("ietaM ma I");
})