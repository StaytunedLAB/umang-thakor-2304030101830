//PRINT EVEN NUMBERS USING WHILE LOOP

let num = 2;

while (num <= 20) {
    console.log(num);
    num += 2;
}



// here is the for loop code
// A list of students with their marks
let students = [
  { name: "Aarav", marks: 85 },
  { name: "Riya", marks: 72 },
  { name: "Kabir", marks: 91 },
  { name: "Meera", marks: 66 },
  { name: "Arjun", marks: 45 }
];

// Loop through each student
for (let i = 0; i < students.length; i++) {
  
  let student = students[i];
  let grade = "";

  // Assign grade based on marks
  if (student.marks >= 90) {
    grade = "A";
  } else if (student.marks >= 75) {
    grade = "B";
  } else if (student.marks >= 60) {
    grade = "C";
  } else if (student.marks >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  console.log("Name:", student.name);
  console.log("Marks:", student.marks);
  console.log("Grade:", grade);
  console.log("-------------------------");
}

console.log("Student grading completed!");

// do while loop
let numb = 1;

do {
  console.log("Current Number:", numb);

  if (num % 2 === 0) {
    console.log(numb + " is EVEN");
  } else {
    console.log(numb + " is ODD");
  }

  let stars = "";
  for (let i = 0; i < numb; i++) {
    stars += "*";
  }
  console.log("Stars:", stars);

  console.log("-----------------------");

  numb++; 

} while (numb<= 5); 

console.log("Loop Complete!");

