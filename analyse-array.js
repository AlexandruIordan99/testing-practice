function analyseArray(arr) {
  if(!Array.isArray(arr)){
    throw new Error("Invalid input: input must be an array.");
  }

  if(!arr.every(item => typeof item === "number")){
    throw new Error("Invalid array: array only accepts variables of type number.");
  }

  let sum = 0
  for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }

  let average = sum/arr.length.toFixed(2)

  if (Math.floor(average) === average){
    average = Math.floor(average)
  }

  let result= {
    average: average,
    min: Math.min.apply(null, arr),
    max: Math.max.apply(null, arr),
    length: arr.length
  };

  return result;
}

module.exports = analyseArray;