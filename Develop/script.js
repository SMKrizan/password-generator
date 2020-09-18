// ##ACCEPTANCE CRITERIA
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

//GLOBAL VARIABLES
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = alphaLower.toUpperCase();
var numeric = "0123456789";
var special = "!@#$%^&*()?";
var length = 0;
var library = "";

//  a prompt asking user for password length (8 <= pwd <= 128), stored as a variable.
var pwLength = function () {
  var userInput_pwLength = window.prompt("Your password must contain at least 8 characters, and no more than 128. Please enter a number between 0 and 129.");
  if (userInput_pwLength >= 1 && userInput_pwLength <= 128) {
    window.alert("A random password will be generated for you.");
    length += parseInt(userInput_pwLength)
    return length
  } else {
    window.alert("Please enter a number between 0 and 129.")
    return
  };
};
pwLength()

//  a series of prompts to confirm desired character types with user as boolean operators (lower, upper, numeric, and/or special characters)
// START LOWER-CASE ALPHA CHARACTER PROMPT
var charLower = function () {
  var userInput_charLower = window.confirm("Would you like the password to contain lowercase letters?");
  if (userInput_charLower) {
    library += alphaLower;
    window.alert("Your password will contain at least 1 lowercase a-z.");
    console.log("adding alphaLower: " + library);
    return library;
  } else {
    userInput_charLower = ""
    window.alert("Your password will contain NO LOWERCASE letters.");
    return
  };
};
charLower()

// START UPPER-CASE ALPHA CHARACTER PROMPT
var charUpper = function () {
  var UserInput_charUpper = window.confirm("Would you like the password to contain uppercase letters?");
  if (UserInput_charUpper) {
    library += alphaUpper
    window.alert("Your password will contain at least 1 uppercase A-Z.");
    console.log("adding alphaUpper: " + library);
    return library;
  } else {
    userInput_charUpper = ""
    window.alert("Your password will contain NO UPPERCASE letters.");
    return
  };
};
charUpper()

// START NUMERIC CHARACTER PROMPT
var charNumeric = function () {
  var userInput_charNumeric = window.confirm("Should the password contain numeric characters?");
  if (userInput_charNumeric) {
    library += numeric;
    window.alert("Your password will contain at least 1 numeric character 0-9.");
    console.log("adding numeric: " + library);
    return library;
  } else {
    userInput_charNumeric = "";
    window.alert("Your password will contain NO NUMERIC characters.")
    return;
  };
};
charNumeric()

// START SPECIAL CHARACTER PROMPT
var charSpecial = function () {
  var userInput_charSpecial = window.confirm("Should the password contain special characters?");
  if (userInput_charSpecial) {
    library += special
    window.alert("Your password will contain at least 1 special character.");
    console.log("adding special: " + library);
    return library;
  } else {
    userInput_charSpecial = ""
    window.alert("Your password will contain NO SPECIAL characters.")
    return
  };
};
charSpecial()

// START ERROR RESPONSE FUNCTION - create error response if no character types are selected
var error = function (library) {
  if (library = "") {
    window.alert("Please select at least one character type.");
  }
  charLower()
}

console.log("library complete: " + library)
console.log("password length: " + length)

// START RANDOMIZER & PASSWORD GENERATOR
// create function to generate password using selected criteria
generatePassword = function(length, library) {
  const lib = library.split("");
  let password = "";
  for(let i=0; i < length; i++) {
    password += lib[Math.floor(Math.random() * library.length)]
  }
  return password;
};
console.log(generatePassword(length, library));

  

  // display password generated EITHER to the page or in an alert



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(length, library);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
