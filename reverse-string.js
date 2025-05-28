function reverseString (originalString) {
  let stringArray = originalString.split("");
  stringArray.reverse();
  let reversedString = "";
  for (let i =0; i < stringArray.length; i++) {
    reversedString = reversedString + stringArray[i];
  }
  return reversedString;
}

console.log(reverseString("I am Matei"));

module.exports = reverseString;