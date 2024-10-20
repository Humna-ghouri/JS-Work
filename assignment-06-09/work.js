

// 01
// Step 1: Declare a variable with a number
// var number = 10;

// Step 2: Perform arithmetic operations
// var addition = number + 5;        // Adding 5 to the number
// var subtraction = number - 3;     // Subtracting 3 from the number
// var multiplication = number * 2;  // Multiplying the number by 2
// var division = number / 4;        // Dividing the number by 4

// Step 3: Display the results in the console
// console.log("Original Number:", number);
// console.log("Addition (number + 5):", addition);
// console.log("Subtraction (number - 3):", subtraction);
// console.log("Multiplication (number * 2):", multiplication);
// console.log("Division (number / 4):", division);





// 02
// var a = 2, b = 1;
//  var result = --a - --b + ++b + b--;
//  console.log("a =", a);         // Output: a = 1
//  console.log("b =", b);         // Output: b = 0
//  console.log("result =", result);   // Output: result = 3

//  03
// Take input a name from the user
// var name = prompt("Please enter your name:");

// Greet the user
// alert("Hello, " + name + "! Welcome!");
// 04
// Take input a number from the user
// var number = prompt("Enter a number:");

// If the user doesn't enter a number, use 5 as default
// if (number === null || number === "") {
//     number = 5;
// }

// Display multiplication table in the browser
// document.write("<h2>Multiplication Table of " + number + "</h2>");
// for (var i = 1; i <= 10; i++) {
//     document.write(number + " * " + i + " = " + (number * i) + "<br>");
// }


// 05
// Take three subjects' names from the user
// var subject1 = prompt("Enter name of subject 1:");
// var subject2 = prompt("Enter name of subject 2:");
// var subject3 = prompt("Enter name of subject 3:");

// Total marks for each subject is 100
// var totalMarks = 100;

// Take obtained marks for each subject from the user
// var obtainedMarks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
// var obtainedMarks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
// var obtainedMarks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));

// Calculate total marks and percentage
// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

// Display the result in the browser
// document.write("<h2>Result</h2>");
// document.write("<table>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
// document.write("<tr><th>Total</th><th>" + (3 * totalMarks) + "</th><th>" + totalObtainedMarks + "</th></tr>");
// document.write("<tr><th colspan='3'>Percentage: " + percentage.toFixed(2) + "%</th></tr>");
// document.write("</table>");