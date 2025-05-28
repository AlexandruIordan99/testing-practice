const caesarCipher = require ("./caesar-cipher.js");

it("Caesar cipher by 4", () => {
  expect(caesarCipher("Where are my apples?", 4))
    .toBe("Alivi evi qc ettpiw?");
});


it("Caesar cipher by 7", () => {
  expect(caesarCipher("Where are my apples?", 7))
      .toBe("Dolyl hyl tf hwwslz?");
});