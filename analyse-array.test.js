const analyseArray = require("./analyse-array.js");


it('Does it filter out non-numbers?', () =>{
  expect(() => analyseArray(["a", 17, false, "another one"]))
      .toThrow("Invalid array: array only accepts variables of type number.")
})

it('Does it accept only numbers?', () =>{
  expect(() => analyseArray([17, 21, 25]))
      .not.toThrow();
})

it("Is it an Array?", () =>{
  expect(() =>analyseArray(21))
      .toThrow("Invalid input: input must be an array.")
})

it("Is it an Array?", () =>{
  expect(() =>analyseArray([]))
      .not.toThrow()
})

it("Properly returns average", () =>{
  expect((analyseArray([10, 20, 30])).average)
      .toBe(20)
})

it("Properly returns min", () =>{
  expect((analyseArray([10, 20, 30])).min)
      .toBe(10)
})

it("Properly returns max", () =>{
  expect((analyseArray([10, 20, 30])).max)
      .toBe(30)
})

it("Properly returns length", () =>{
  expect((analyseArray([10, 20, 30])).length)
      .toBe(3)
})
