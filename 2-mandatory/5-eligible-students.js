/*
  Only students who have attended enough classes are eligible to sit an exam.

  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing only the names of the who have attended AT LEAST 8 classes
*/

let kf = [
  ["Atena", 8],
  ["Fereshte", 10],
  ["Kosar", 6],
  ["Javad", 7],
  ["Mahya", 11],
  ["Sarah", 10],
];

function getEligibleStudents(arr) {
  let score = arr.filter((el) => el[1] >= 8);
  let person = score.map((elem) => elem[0]);
  // console.log(person);
  return person;
}

/* ======= TESTS - DO NOT MODIFY ===== */

test("getEligibleStudents function works", () => {
  const attendance = [
    ["Atena", 8],
    ["Fereshte", 10],
    ["Kosar", 6],
    ["Javad", 7],
    ["Mahya", 11],
    ["Sarah", 10],
  ];
  expect(getEligibleStudents(attendance)).toEqual([
    "Atena",
    "Fereshte",
    "Mahya",
    "Sarah",
  ]);
});

test("getEligibleStudents function can return empty array", () => {
  const attendance = [["Jacob", 7]];
  expect(getEligibleStudents(attendance)).toEqual([]);
});
