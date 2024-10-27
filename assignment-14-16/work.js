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

var  scores = [420, 380, 450]; 

var  percentages = [];
for (let i = 0; i < scores.length; i++) {
    let percentage = (scores[i] / 500) * 100;
    percentages.push(percentage);
}

for (let i = 0; i < studentNames.length; i++) {
    document.write("Name: " + studentNames[i] + "<br>");
    document.write("Score: " + scores[i] + "<br>");
    document.write("Percentage: " + percentages[i] + "%<br><br>");
}




// 09 start
// 09 end 







// 10
let studentScores = [85, 70, 95, 80, 65];

studentScores.sort(function(a, b) {
    return a - b;
});

// Display the sorted array
console.log("Sorted student scores:", studentScores);






// 11
// Initialize an array with city names
let cities = ["New York", "London", "Paris", "Tokyo", "Sydney"];

let selectedCities = [];

selectedCities.push(cities[0], cities[1], cities[2]);

console.log("Selected cities:", selectedCities);




// 12
var arr = ["This", "is", "my", "cat"];

var singleString = arr.join(" ");

console.log(singleString);




// 13
var fifoArray = [];

function addToFIFO(value) {
    fifoArray.push(value); 
}

function removeFromFIFO() {
    return fifoArray.shift(); 
}

addToFIFO("Value 1");
addToFIFO("Value 2");
addToFIFO("Value 3");

console.log(removeFromFIFO()); 
console.log(removeFromFIFO());
console.log(removeFromFIFO()); 



// 14
// Create a new empty array
let lifoArray = [];


function addToLIFO(value) {
    lifoArray.push(value); 
}

function removeFromLIFO() {
    return lifoArray.pop(); 

}addToLIFO("Value 1");
addToLIFO("Value 2");
addToLIFO("Value 3");

console.log(removeFromLIFO()); 
console.log(removeFromLIFO()); 
console.log(removeFromLIFO()); 







// 15
let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

let selectMenu = "<select>";

for (let i = 0; i < manufacturers.length; i++) {
    selectMenu += "<option value='" + manufacturers[i] + "'>" + manufacturers[i] + "</option>";
}

selectMenu += "</select>";

document.write(selectMenu);
