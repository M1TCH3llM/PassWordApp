//declaring vars

// Assignment Code
var generateBtn = document.querySelector("#generate");

// all input variables for password generation
var specialChars = ["+", "$", "~", "!", "@", "#", "%", "&"];
var numericChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCaseChars = [
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

// this function uses map to identify elements in array, then apply an uppercase to them.
var upperCaseChars = lowerCaseChars.map(function (upperCase) {
  return upperCase.toUpperCase();
});


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); //storing a reference to the text area

  passwordText.value = password;
}

// this function uses variables give to the user to generate a password
function generatePassword() {
  // capture user length
  var userCharLength = prompt(
    "How many characters would you like your password to contain"
  );
// prompts user if password length is insufficient 
  if (userCharLength < 8 || userCharLength > 128) {
    userCharLength = prompt("Please select value between 8 - 128");
  }

  // allows user to select desired variables in password 
  var specialCharacters = confirm("Click ok to confirm special characters");
  var numericCharacters = confirm("Click ok to confirm numeral characters");
  var lowerCaseCharacters = confirm("Click ok to confirm lowercase characters");
  var upperCaseCharacters = confirm("Click ok to confirm uppercase characters");

// object that contains all the user input data
  var userOptions = {
  
  // numeric data
    length: userCharLength,

  //Boolien data
    willHaveSpecial: specialCharacters,
    willHaveNumChar: numericCharacters,
    willHaveLowChar: lowerCaseCharacters,
    willHaveUpChar: upperCaseCharacters,
  };

  // creates an array of all data types given user inputs
  var allChars = [];

  if (userOptions.willHaveSpecial) {
    allChars = allChars.concat(specialChars);
  }
  if (userOptions.willHaveNumChar) {
    allChars = allChars.concat(numericChars);
  }
  if (userOptions.willHaveLowChar) {
    allChars = allChars.concat(lowerCaseChars);
  }
  if (userOptions.willHaveUpChar) {
    allChars = allChars.concat(upperCaseChars);
  }

// establishes password as a blank variable 
  var password = "";

// runs loop randomizing the allChars array, and uses user length input to determent length
  for (let i = 0; i < userOptions.length; i++) {
    var randomChar = allChars[Math.floor(Math.random() * allChars.length)];
    password += randomChar;
  }

  // me testing outputs
  console.log(allChars);
  console.log(randomChar);

// ends function and stores variable password
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// My item list of tasks that needed to get done * = finished

// Building a Password Generator

// VARIABLES - passwordLength,for the confirms

// CONFIRMS STORE BO0LEAN VALUES
// * propmt user for how many chars they would like in their password *

// * confirm to ask user if they would like special char *

// * confirm to ask user if they would like numeric char *

// * confirm to ask user if they would like lowercase char *

// * confirm to ask user if they would like uppercase char *

// * How to build?

//      collect user data, combine data, randomize arrays, out put information based on user length

// * need the use Math.random, Math.floor
