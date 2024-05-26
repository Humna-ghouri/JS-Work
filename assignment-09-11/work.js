// Program to welcome user if the city entered is "Karachi"
let city = prompt("Enter city name:");

if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
} else {
    alert("Welcome to " + city);
}



// Program to greet user based on their gender
let gender = prompt("Enter your gender (male/female):");

if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am");
} else {
    alert("Good Morning");
}





// Program to show message based on traffic signal color
let signalColor = prompt("Enter the color of the road traffic signal (red/yellow/green):");

switch (signalColor.toLowerCase()) {
    case "red":
        alert("Must Stop");
        break;
    case "yellow":
        alert("Ready to move");
        break;
    case "green":
        alert("Move now");
        break;
    default:
        alert("Invalid color");}





        // Program to check remaining fuel in car and display a message if it's less than 0.25 litres
let remainingFuel = parseFloat(prompt("Enter remaining fuel in car (in litres):"));

if (remainingFuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// Outputs for the conditions:

// a.
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
} // Output: "given condition for variable a is true"

// b.
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
} // No output

// c.
var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
} // Output: "condition 2 is true"
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
} // Output: "condition 4 is true"

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
} // Output: "The cost equals"

// e.
if (true){
    alert("True");
} // Output: "True"
if (false){
    alert("False");
} // No output

// f.
if("car" < "cat"){
    alert("car is smaller than cat");
} // Output: "car is smaller than cat"






function calculateGrade(percentage) {
    let grade, remarks;

    if (percentage >= 80) {
        grade = 'A';
        remarks = 'Excellent';
    } else if (percentage >= 70) {
        grade = 'B';
        remarks = 'Good';
    } else if (percentage >= 60) {
        grade = 'C';
        remarks = 'You need to improve';
    } else if (percentage >= 50) {
        grade = 'D';
        remarks = 'Poor';
    } else {
        grade = 'F';
        remarks = 'Fail';
    }

    return { grade, remarks };
}

// Taking input from the user
const subject1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
const subject2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
const subject3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));
const totalMarks = parseFloat(prompt("Enter total marks:"));

// Calculate marks obtained and percentage
const marksObtained = subject1 + subject2 + subject3;
const percentage = (marksObtained / totalMarks) * 100;

// Get grade and remarks
const { grade, remarks } = calculateGrade(percentage);

// Display the result
alert(`
    Total Marks: ${totalMarks}
    Marks Obtained: ${marksObtained}
    Percentage: ${percentage.toFixed(2)}%
    Grade: ${grade}
    Remarks: ${remarks}
`);


// 

// Guess game: Store a secret number and prompt user to guess
let secretNumber = Math.floor(Math.random() * 10) + 1;  // Secret number between 1 and 10
let userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Try again!");
}


// 
// Program to check whether the given number is divisible by 3
let number = parseInt(prompt("Enter a number:"));

if (number % 3 === 0) {
    alert("The number is divisible by 3");
} else {
    alert("The number is not divisible by 3");
}


// 

// Program to check whether the given input is an even number or an odd number
let num = parseInt(prompt("Enter a number:"));

if (num % 2 === 0) {
    alert("The number is even");
} else {
    alert("The number is odd");
}


// 
// Program to take temperature as input and show a message based on criteria
let temperature = parseFloat(prompt("Enter the temperature:"));

if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The Weather today is Normal.");
} else if (temperature > 20) {
    alert("Today’s Weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
} else {
    alert("The temperature is very low.");
}






// 
// Program to create a calculator for +, -, *, /, % using if statements
let firstNumber = parseFloat(prompt("Enter the first number:"));
let secondNumber = parseFloat(prompt("Enter the second number:"));
let operation = prompt("Enter the operation (+, -, *, /, %):");

let result;
if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
    if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
    } else {
        alert("Cannot divide by zero");
        result = null;
    }
} else if (operation === "%") {
    if (secondNumber !== 0) {
        result = firstNumber % secondNumber;
    } else {
        alert("Cannot find modulus by zero");
        result = null;
    }
} else {
    alert("Invalid operation");
    result = null;
}

if (result !== null) {
    alert("The result is: " + result);
}