/*
   This program should check if the array `group` contains only students
*/

// const students = ["Haniye", "Alireza", "Benyamin", "Fatemeh"];
const students = ["Hossein", "Jamal", "Mehdi", "Shaden", "Zaynab", "Niloofar"];
const group = ["Haniye", "Alireza", "Benyamin", "Fatemeh"];

let groupIsOnlyStudents; // complete this statement

students.every((st) => {
  for (st = 0; st < group.length; st++) {
    groupIsOnlyStudents = students.includes(group[st]);
  }
});

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
