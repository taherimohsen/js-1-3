/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

let names = [
  "Vajihe",
  "Alireza",
  "AmirMostafa",
  "AmirMehdi",
  "Alie",
  "Sarah",
  "MohammadHosein",
  "Fatemeh",
  "Mahjan",
];

function findLongNameThatStartsWithA(check) {
  let tw = check.find((hi) => {
    return hi[0] === "A" && hi.length > 7;
  });
  return tw;
}

let longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "AmirMostafa"
