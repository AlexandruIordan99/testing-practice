const caesarCipher = require ("./caesar-cipher.js");

it("Caesar cipher by 4", () => {
  expect(caesarCipher("Where are my apples?"))
    .toBe("Alivi evi qc ettpiw?");
});


it("Caesar cipher by 7", () => {
  expect(caesarCipher("Where are my apples?"))
      .toBe("Dolyl hyl tf hwwslz?");
});