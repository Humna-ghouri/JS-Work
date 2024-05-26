// Program to check if the input is a number, uppercase letter, or lowercase letter
let char = prompt("Enter a character:");

if (char.length === 1) {
    let charCode = char.charCodeAt(0);
    if (charCode >= 48 && charCode <= 57) {
        console.log("The character is a number.");
    } else if (charCode >= 65 && charCode <= 90) {
        console.log("The character is an uppercase letter.");
    } else if (charCode >= 97 && charCode <= 122) {
        console.log("The character is a lowercase letter.");
    } else {
        console.log("Invalid input.");
    }
} else {
    console.log("Please enter only one character.");
}



// Program to accept two integers and display the larger
let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));

if (num1 === num2) {
    console.log("Both integers are equal.");
} else if (num1 > num2) {
    console.log("The first integer is larger.");
} else {
    console.log("The second integer is larger.");
}



// Program to take input a number and state whether it is positive, negative, or zero
let number = parseFloat(prompt("Enter a number:"));

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}




// Program to check if a character is a vowel
let character = prompt("Enter a character:").toLowerCase();

if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
    console.log("The character is a vowel.");
} else {
    console.log("The character is not a vowel.");
}




// Program to validate password
let correctPassword = "Secret123";
let userPassword = prompt("Enter your password:");

if (!userPassword) {
    console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
} else {
    console.log("Incorrect password.");
}



var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);




var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);




// Program to take time as input and display greeting
var time = parseInt(prompt("Enter the time in 24-hour clock format (e.g., 1900 for 7pm):"));

if (time >= 0 && time <= 1200) {
    console.log("Good morning");
} else if (time > 1200 && time <= 1700) {
    console.log("Good afternoon");
} else if (time > 1700 && time <= 2100) {
    console.log("Good evening");
} else if (time > 2100 && time <= 2359) {
    console.log("Good night");
} else {
    console.log("Invalid time format");
}
