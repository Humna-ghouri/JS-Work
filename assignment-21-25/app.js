
// 1.
// let firstName = prompt( "Enter Your First Name:");
// let lastName = prompt( "Enter Your Last Name:");
// let fullName = firstName + " " + lastName ;
// alert("Hello, " + fullName + " :)  Welcome!");




// 2. 
// let favoriteModel = prompt ("What's Your Favorite Mobile phone Model?");
// let lengthOfInput =  favoriteModel.length;
// document.write("<h2>Length of your favorite mobile phone model input:</h2>");
// document.write("<p>" + lengthOfInput + "</p>");


// 3.
// let word = "Pakistan" ;
// let index = word.indexOf('n');
// document.write("<h2>Index of 'n' in the word 'Pakistani':</h2>");
// document.write("<p>" + index + "</p>");


// 4.
// let word = "Hello World "
// let lastIndex = word.lastIndexOf ("l")
// document.write("<h2>Last Index of 'l' in the word 'hello World';</h2>");
// document.write ("<p>"+ lastIndex +"</p>")



// 5.
// let word = "Pakistan" ;
// let character = word.charAt(3) ;
// document.write("<h2> Character at 3rd Index in 'Pakistan' : </h2>")
// document.write("<p>"  + character + "</p> ")





// 7.
// let word = "Hyderabad" ;
// let replacedWord = word.replace ("Hyder" , "Islam");
// document.write("<h2>Original Word:</h2>");
// document.write("<p>" + word + "</p>");
// document.write("<h2>After Replacement:</h2>");
// document.write("<p>" + replacedWord + "</p>");




// 8.
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var modifiedMessage = message.split("and").join("&");
// document.write ("<h2>Original Message:  </h2> ");
// document.write ("<p>" + message + "</p>");
// document.write ("<h2> Modified Message :</h2>");
// document.write ("<p>"+ modifiedMessage + "</P>")




// // 9.
// let stringNumber = "427" ;
// let numberValue = parseInt(stringNumber);

// document.write("<h2>Converted Values:</h2>");
// document.write("<p>String Value: " + stringNumber + ", Type: " + typeof stringNumber + "</p>");
// document.write("<p>Number Value: " + numberValue + ", Type: " + typeof numberValue + "</p>");




// 10.
// let userInput = prompt("Enter some text :");
// let uppercaseInput = userInput.toUpperCase();
// document.write ("<h2> Orignal Input :</h2>")
// document.write("<h2>Uppercase Input:</h2>");
// document.write("<p>" + uppercaseInput + "</p>");



// 11.
// function toTitleCase(str) {
//     return str.toLowerCase().split(' ').map(function(word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     }).join(' ');
// }

// let userInput = prompt("Enter some text:");

// let titleCaseInput = toTitleCase(userInput);

// document.write("<h2>Original Input:</h2>");
// document.write("<p>" + userInput + "</p>");
// document.write("<h2>Title Case Input:</h2>");
// document.write("<p>" + titleCaseInput + "</p>");






// 12.
// var num = 35.36;
// var numString = num.toString().replace('.','')
// document.write("<h2>Original Number:</h2>");
// document.write("<p>" + num + "</p>");
// document.write("<h2>Converted String:</h2>");
// document.write("<p>" + numString + "</p>");


// 13.
// function isValidUsername (username){
//     let specialSymbols = ['@' , '.',',','!'];

//     for (let i=0 ; i<username.lenght ; i++){
//         if (specialSymbols.includes(username[i])){
//             return false;
//         }

        
//     }
//     return true;
// }

// let username = prompt("Enter your username:");

// while (!isValidUsername(username)){
//     username = prompt ("Please enter avalid username without special symbols (@, ., ,, !):"); 
// }
// document.write("<h2>Valid username:</h2>") ;
// document.write("<p>" + username + "</p>")






// 14.
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];

// function searchItem(arr, userInput) {
//     userInput = userInput.toLowerCase();
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].toLowerCase() === userInput) {
//             return true; 
//         }
//     }
//     return false; 
// }

// let userInput = prompt("Welcome to our bakery! What would you like to search for?");

// let isFound = searchItem(A, userInput);


// if (isFound) {
//     alert("Yes, '" + userInput + "' is available in the bakery!");
// } else {
//     alert("Sorry, '" + userInput + "' is not available in the bakery.");
// }




// 15.
// Function to validate password
// function validatePassword(password) {
 
//     let hasAlphabet = false;
//     let hasNumber = false;

//     for (let i = 0; i < password.length; i++) {
//         let charCode = password.charCodeAt(i);
//         if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//             hasAlphabet = true;
//         } else if (charCode >= 48 && charCode <= 57) {
//             hasNumber = true;
//         }
//     }

 
//     if (!hasAlphabet || !hasNumber) {
//         return false; 
//     } else if (password.length < 6) {
//         return false; 
//     } else if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {
//         return false; 
//     }

//     return true; 
// }

// let password = prompt("Enter your password:");

// while (!validatePassword(password)) {
//     password = prompt("Please enter a valid password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long:");
// }

// alert("Valid password entered: " + password);





// 16.
// var university = "University of Karachi";

// var array = university.split(' ');

// document.write("<h2>Elements of Array:</h2>");
// document.write("<p>");
// for (let i = 0; i < array.length; i++) {
//     document.write(array[i] + "<br>");
// }
// document.write("</p>");




// 17.
// let userInput  = prompt ("Enter a String");
// let lastCharacter = userInput.charAt(userInput.length-1);
// document.write("<h2>Last Character :</h2>");
// document.write("<p> " + lastCharacter + "</p> ");




// 18.

var sentence = "The quick brown fox jumps over the lazy dog";

var count = (sentence.match(/the/gi) || []).length;

document.write("<h2>Occurrences of 'the' in the sentence:</h2>");
document.write("<p>'the' appears <strong>" + count + "</strong> times.</p>");
