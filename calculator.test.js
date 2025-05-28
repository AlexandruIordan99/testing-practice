const Calculator = require("./calculator.js");
const calculator = new Calculator();

it("Calculator addition", () =>{
  expect(calculator.add(1, 5))
      .toBe(6);
})

it("Calculator addition", () =>{
  expect(calculator.add(23, 15))
      .toBe(38);
})

it("Calculator subtraction", () =>{
  expect(calculator.subtract(15, 1))
      .toBe(14);
})


it("Calculator subtraction", () =>{
  expect(calculator.subtract(1, 5))
      .toBe(-4);
})

it("Calculator multiplication", () =>{
  expect(calculator.multiply(1, 5))
      .toBe(5);
})

it("Calculator multiplication", () =>{
  expect(calculator.multiply(23, 13))
      .toBe(299);
})

it("Calculator division", () =>{
  expect(calculator.divide(23, 1))
      .toBe(23);
})

it("Calculator division", () =>{
  expect(calculator.divide(14, 2))
      .toBe(7);
})