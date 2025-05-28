const capitalizeFirstIndex = require("./capitalize.js");


it("Capitalizes string", () => {
  expect(capitalizeFirstIndex("john is here."))
      .toBe("John is here.")
});

it("Capitalizes string", () => {
  expect(capitalizeFirstIndex("matei"))
      .toBe("Matei");
});
