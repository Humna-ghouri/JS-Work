
// /01
// var number2 = parseFloat(prompt("Enter the first number:"));

        // Add the two numbers
        var sum = number1 + number2;

        // Display the result in the browser
        document.write("The sum of " + number1 + " and " + number2 + " is " + sum);


// 02
// Prompt the user to enter two numbers
var number1 = parseFloat(prompt("Enter the first number:"));
var number2 = parseFloat(prompt("Enter the second number:"));

// Perform arithmetic operations
var sum = number1 + number2;
var difference = number1 - number2;
var product = number1 * number2;
var quotient = number1 / number2;
var modulus = number1 % number2;

// Display the results in the browser
document.write("The sum of " + number1 + " and " + number2 + " is " + sum + "<br>");
document.write("The difference of " + number1 + " and " + number2 + " is " + difference + "<br>");
document.write("The product of " + number1 + " and " + number2 + " is " + product + "<br>");
document.write("The quotient of " + number1 + " and " + number2 + " is " + quotient + "<br>");
document.write("The modulus of " + number1 + " and " + number2 + " is " + modulus + "<br>");


// 03

 // a. Declare a variable
 var number;

 // b. Show the value of the variable in the browser
 document.write("Value after variable declaration is: " + number + "<br>");

 // c. Initialize the variable with some number
 number = 5;

 // d. Show the initial value
 document.write("Initial value: " + number + "<br>");

 // e. Increment the variable
 number++;

 // f. Show the value after increment
 document.write("Value after increment is: " + number + "<br>");

 // g. Add 7 to the variable
 number += 7;

 // h. Show the value after addition
 document.write("Value after addition is: " + number + "<br>");

 // i. Decrement the variable
 number--;

 // j. Show the value after decrement
 document.write("Value after decrement is: " + number + "<br>");

 // k. Show the remainder after dividing the variable's value by 3
 var remainder = number % 3;

 // l. Output the remainder
 document.write("The remainder is: " + remainder + "<br>");



//  04
  // Cost of one movie ticket (in PKR)
  var ticketPrice = 600;

  // Number of tickets to buy
  var numberOfTickets = 5;

  // Calculate the total cost
  var totalCost = ticketPrice * numberOfTickets;

  // Display the result in the browser
  document.write("The cost of buying " + numberOfTickets + " movie tickets is: " + totalCost + " PKR");



//   05
  // Prompt the user to enter a number
  var number = parseInt(prompt("Enter a number to display its multiplication table:"));

  // Display the multiplication table in the browser
  document.write("<h2>Multiplication Table of " + number + "</h2>");
  for (var i = 1; i <= 10; i++) {
      document.write(number + " × " + i + " = " + (number * i) + "<br>");
  }



//   06
 // Celsius temperature
 var celsiusTemperature = 30;

 // Convert Celsius to Fahrenheit
 var fahrenheitTemperature = (celsiusTemperature * 9 / 5) + 32;

 // Output the result
 document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");

 // Fahrenheit temperature
 var fahrenheitTemp = 86;

 // Convert Fahrenheit to Celsius
 var celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;

 // Output the result
 document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C");



//  07
 // Store the prices of item 1 and item 2
 var item1Price = 500;
 var item2Price = 700;

 // Store the ordered quantities of item 1 and item 2
 var item1Quantity = 2;
 var item2Quantity = 3;

 // Store the shipping charges
 var shippingCharges = 100;

 // Calculate the total cost
 var totalCost = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;

 // Display the receipt in the browser
 document.write("<h2>Shopping Cart Receipt</h2>");
 document.write("<p>Price of Item 1: " + item1Price + " PKR</p>");
 document.write("<p>Quantity of Item 1: " + item1Quantity + "</p>");
 document.write("<p>Price of Item 2: " + item2Price + " PKR</p>");
 document.write("<p>Quantity of Item 2: " + item2Quantity + "</p>");
 document.write("<p>Shipping Charges: " + shippingCharges + " PKR</p>");
 document.write("<h3>Total Cost: " + totalCost + " PKR</h3>");


//  08
 // Store total marks and marks obtained by the student
 var totalMarks = 500;
 var marksObtained = 425;

 // Calculate the percentage
 var percentage = (marksObtained / totalMarks) * 100;

 // Display the result in the browser
 document.write("<h2>Percentage Calculation</h2>");
 document.write("<p>Total Marks: " + totalMarks + "</p>");
 document.write("<p>Marks Obtained: " + marksObtained + "</p>");
 document.write("<h3>Percentage: " + percentage.toFixed(2) + "%</h3>");




//  09
// Total amount in US dollars and Saudi Riyals
var usDollars = 10;
var saudiRiyals = 25;

// Exchange rates
var usdToPkrRate = 104.80;
var sarToPkrRate = 28;

// Convert the total currency to Pakistani Rupees in a single expression
var totalPkr = (usDollars * usdToPkrRate) + (saudiRiyals * sarToPkrRate);

// Display the result in the browser
document.write("<h2>Currency Conversion</h2>");
document.write("<p>Total amount in US dollars: " + usDollars + "</p>");
document.write("<p>Total amount in Saudi Riyals: " + saudiRiyals + "</p>");
document.write("<h3>Total amount in Pakistani Rupees: " + totalPkr.toFixed(2) + " PKR</h3>");





// 10
// Initialize a variable with some number
var num = 10;

// Perform arithmetic operations in a single expression
var result = ((num + 5) * 10) / 2;

// Display the result in the browser
document.write("<h2>Arithmetic Sequence</h2>");
document.write("<p>Initial Number: " + num + "</p>");
document.write("<p>Result after arithmetic operations: " + result + "</p>");



// 11
 // Store the current year and birth year in variables
 var currentYear = new Date().getFullYear();
 var birthYear = 1990; // Replace with actual birth year

 // Calculate their possible ages
 var age1 = currentYear - birthYear;
 var age2 = age1 - 1;

 // Display the result in the browser
 document.write("<h2>Age Calculator</h2>");
 document.write("They are either " + age1 + " or " + age2 + " years old");




//  12
// Store the radius into a variable
var radius = 5;

// Calculate the circumference and area
var circumference = 2 * Math.PI * radius;
var area = Math.PI * Math.pow(radius, 2);

// Display the results in the browser
document.write("<h2>Geometrizer</h2>");
document.write("The circumference is " + circumference.toFixed(2) + "<br>");
document.write("The area is " + area.toFixed(2));



// 13
  // Store your favorite snack, current age, maximum age, and estimated amount per day
  var favoriteSnack = "Chocolate";
  var currentAge = 25;
  var maxAge = 80;
  var amountPerDay = 2;

  // Calculate the total amount needed for the rest of your life
  var yearsRemaining = maxAge - currentAge;
  var totalAmountNeeded = yearsRemaining * 365 * amountPerDay;

  // Display the result in the browser
  document.write("<h2>Lifetime Supply Calculator</h2>");
  document.write("You will need " + totalAmountNeeded + " " + favoriteSnack + "(s) to last you until the ripe old age of " + maxAge);







