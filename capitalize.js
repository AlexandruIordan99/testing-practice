function capitalizeFirstIndex(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalizeFirstIndex("john is here."));


module.exports = capitalizeFirstIndex;