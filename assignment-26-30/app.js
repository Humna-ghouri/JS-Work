// 1.
// let userInput = prompt ("Enter a Positive integer")
// let number =  parseInt (userInput);

// if (isNaN(number) ||  number <=0){
//     alert("<p>Please enter a valid positive number. </p>");
    
// }
// else {
// let roundValue = Math.round(number);
//    let floorValue = Math.floor(number);
//    let ceiValue  = Math.ceil(number);
// }

// let message = `
// <h2>Number Operations</h2>
// <p>a. Number: ${number}</p>
// <p>b. Round off value: ${roundValue}</p>
// <p>c. Floor value: ${floorValue}</p>
// <p>d. Ceil value: ${ceilValue}</p>
// `;


// 2.
// let userInput = prompt("Enter a negative floating number:");
// let number = parseFloat(userInput);

// if (isNaN(number) || number >= 0) {
//    alert("Please enter a valid negative floating number.");
   
// }

// let roundValue = Math.round(number);
//   let floorValue = Math.floor(number);
//   let ceilValue = Math.ceil(number);

//   console.log("Number: " + number);
//   console.log("Round off value: " + roundValue);
//   console.log("Floor value: " + floorValue);
//   console.log("Ceil value: " + ceilValue);


//   3.
// let userInput = prompt ("Enter a Number");
// let number = parseFloat(userInput);
// let  absoluteValue = Math.abs(number) ;

// console.log("Absolute value of ${number} is $ {absoluteValue}");


// 4.
// let diceValue = Math.floor (Math.random()* 6) + 1;
// document.write("<h2> Dice Roll Simulation</h2>");
//  document.write(`<p>The dice rolled: ${diceValue}</p>`);




// 5.
// let randomNumber = Math.random( );
// let coinResult = randomNumber < 0.5 ? "Heads" : "Tails";
// document.write(`<h2>Coin Toss Simulation</h2>`);
// document.write(`<p>The coin landed on: ${coinResult}</p>`);



// 6.
// let randomNumber = Math.floor (Math.random () * 100 +1);
// document.write(`<h2>Random Number Generator</h2>`);
// document.write(`<p>Random number between 1 and 100: ${randomNumber}</p>`);


// 7.
// let userInput = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):").toLowerCase();
// let weight;

//   if (userInput.includes("kgs")) {
//     weight = parseFloat(userInput.replace("kgs", "").trim());
//   } else if (userInput.includes("kilograms")) {
//     weight = parseFloat(userInput.replace("kilograms", "").trim());
//   } else {
//     weight = parseFloat(userInput);
//   }

//   if (isNaN(weight)) {
//     document.write("<p>Please enter a valid weight.</p>");
//   } else {
//     document.write("<h2>Weight Display</h2>");
//     document.write(`<p>Your weight is: ${weight} kgs</p>`);
//   }


// 8.
let secretNumber = Math.floor(Math.random() * 10) + 1;

let userInput = prompt("Guess the secret number (between 1 and 10):");
let userGuess = parseInt(userInput);

if (userGuess === secretNumber) {
  document.write("<h2>Congratulations!</h2>");
  document.write(`<p>You guessed the secret number ${secretNumber} correctly!</p>`);
} else {
  document.write("<h2>Sorry!</h2>");
  document.write(`<p>You guessed ${userGuess}, but the secret number was ${secretNumber}.</p>`);
}








// It's done 






















