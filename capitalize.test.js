const capitalizeFirstIndex = require("./capitalize.js");

// const caesarCipher = require ("./caesar-cipher.js");
// const analyzeArray = require("analyze-array.js");

it("Capitalizes string", () => {
  expect(capitalizeFirstIndex("john is here."))
      .toBe("John is here.")
});

it("Capitalizes string", () => {
  expect(capitalizeFirstIndex("matei"))
      .toBe("Matei");
});
