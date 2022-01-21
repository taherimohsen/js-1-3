/*
  Array methods - .join()
  -------------------------
  Complete the capitalise function 
  It should return a string with the first letter in uppercase
  For example, capitailise("hello") should return "Hello"
  Tip: use the string method .split() and the array method .join()
*/

function capitalise(str) {
  let h = str.split("");
  h[0] = [h[0].toUpperCase()];
  return h.join("");
}

/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */
let sampleName = "benyamin";

console.log(capitalise(sampleName));
console.log(capitalise("hello"));

/* 
  EXPECTED RESULT
  ---------------
  Benyamin
  Hello
*/
