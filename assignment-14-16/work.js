var studentNamesLiteral = [];
var studentNamesObject = new Array();
var stringsArray = ["apple", "banana", "cherry"];
var numbersArray = [1, 2, 3, 4, 5];
var booleanArray = [true, false, true, true];
var mixedArray = ["apple", 3, true, "banana", 5];
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
for (let i = 0; i < qualifications.length; i++) {
    document.write(qualifications[i] + "<br>");
}



var studentNames = ["John", "Alice", "Bob"];

// Store scores of students in another array
var  scores = [420, 380, 450]; 

// Calculate percentages for each student
var  percentages = [];
for (let i = 0; i < scores.length; i++) {
    let percentage = (scores[i] / 500) * 100;
    percentages.push(percentage);
}

// Display scores & percentages of students
for (let i = 0; i < studentNames.length; i++) {
    document.write("Name: " + studentNames[i] + "<br>");
    document.write("Score: " + scores[i] + "<br>");
    document.write("Percentage: " + percentages[i] + "%<br><br>");
}




// Initialize an array with color names
var colors = ["red", "green", "blue"];

// Display the array elements
console.log("Array elements:", colors);

// Ask the user what color to add to the beginning & add it
var colorToAddBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddBeginning);
console.log("After adding color to the beginning:", colors);

// Ask the user what color to add to the end & add it
var colorToAddEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddEnd);
console.log("After adding color to the end:", colors);

// Add two more colors to the beginning
colors.unshift("yellow", "orange");
console.log("After adding two colors to the beginning:", colors);

// Delete the first color
colors.shift();
console.log("After deleting the first color:", colors);

// Delete the last color
colors.pop();
console.log("After deleting the last color:", colors);

// Ask the user at which index to add a color & color name, then add the color at the desired position/index
let indexToAdd = parseInt(prompt("Enter the index where you want to add a color:"));
let colorToAdd = prompt("Enter the color you want to add:");
colors.splice(indexToAdd, 0, colorToAdd);
console.log("After adding color at index " + indexToAdd + ":", colors);

// Ask the user at which index to delete color(s) & how many colors to delete, then remove the same number of color(s) from the user-defined position/index
let indexToDelete = parseInt(prompt("Enter the index from which you want to delete color(s):"));
let numberOfColorsToDelete = parseInt(prompt("Enter how many colors you want to delete:"));
colors.splice(indexToDelete, numberOfColorsToDelete);











// 10
let studentScores = [85, 70, 95, 80, 65];

// Sort the array in ascending order
studentScores.sort(function(a, b) {
    return a - b;
});

// Display the sorted array
console.log("Sorted student scores:", studentScores);






// 11
// Initialize an array with city names
let cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];

// Initialize an empty array for selected cities
let selectedCities = [];

// Copy three array elements from cities array to selectedCities array
selectedCities.push(cities[0], cities[1], cities[2]);

// Display the selected cities array
console.log("Selected cities:", selectedCities);




// 12
// Initialize an array
var arr = ["This", "is", "my", "cat"];

// Create a single string using the join method
var singleString = arr.join(" ");

// Display the single string
console.log(singleString);




// 13
// Create a new empty array
var fifoArray = [];

// Function to add values to the FIFO array
function addToFIFO(value) {
    fifoArray.push(value); // Add value to the end of the array
}

// Function to remove and return the first value from the FIFO array
function removeFromFIFO() {
    return fifoArray.shift(); // Remove and return the first element from the array
}

// Adding values to the FIFO array
addToFIFO("Value 1");
addToFIFO("Value 2");
addToFIFO("Value 3");

// Removing values from the FIFO array and displaying them
console.log(removeFromFIFO()); // Output: "Value 1"
console.log(removeFromFIFO()); // Output: "Value 2"
console.log(removeFromFIFO()); // Output: "Value 3"



// 14
// Create a new empty array
let lifoArray = [];

// Function to add values to the LIFO array
function addToLIFO(value) {
    lifoArray.push(value); // Add value to the end of the array
}

// Function to remove and return the last value from the LIFO array
function removeFromLIFO() {
    return lifoArray.pop(); // Remove and return the last element from the array
}

// Adding values to the LIFO array
addToLIFO("Value 1");
addToLIFO("Value 2");
addToLIFO("Value 3");

// Removing values from the LIFO array and displaying them
console.log(removeFromLIFO()); // Output: "Value 3"
console.log(removeFromLIFO()); // Output: "Value 2"
console.log(removeFromLIFO()); // Output: "Value 1"







// 15
// Store phone manufacturers in an array
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Start building the select menu
let selectMenu = "<select>";

// Loop through the manufacturers array to create options
for (let i = 0; i < manufacturers.length; i++) {
    selectMenu += "<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>";
}

// Close the select menu
selectMenu += "</select>";

// Display the select menu in the browser
document.write(selectMenu);
