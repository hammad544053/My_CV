alert("Hammad Ullah")

// table for the number 2
for (let i = 1; i <= 10; i++) {
  const result = 2 * i;
  console.log(`2 * ${i} = ${result}`);
}

let physics = 80;
let chemistry = 75;
let math = 90;
let english = 85;

let totalMarks = physics + chemistry + math + english;
let percentage = (totalMarks / 400) * 100;

console.log("Total Marks: " + totalMarks);
console.log("Percentage: " + percentage + "%");

let age = 20;

if (age <= 18) {
  console.log("Cradle is running");
} else {
  console.log("Overaged");
}

