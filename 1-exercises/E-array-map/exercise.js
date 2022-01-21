// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

let multipleNum = numbers.map((num) => num * 100);
console.log(multipleNum);

let numMul = numbers.map((number) => {
  return number * 100;
});
console.log(numMul);

let multi100 = numbers.map(function (zarb) {
  return zarb * 100;
});
console.log(multi100);

let numbersZarb = numbers.map(function Multi(numb) {
  return numb * 100;
});
console.log(numbersZarb);
