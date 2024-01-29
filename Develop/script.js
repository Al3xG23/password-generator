// GIVEN I need a new, secure password

// 1 - Create array for special characters, uppercase, lowercase, numeric
var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","~","`","=","+","-","_","*","?","/","<",">","|"];

var uppercaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var lowercaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var numerics = ["0","1","2","3","4","5","6","7","8","9"];

// WHEN I click the button to generate a password


// 2 - Event listener with a function that generates password with user input generatePassword();
// const passwordLength = Number(prompt("How long do you want the password to be?"));




// THEN I am presented with a series of prompts for password criteria

// 3 - Create a function ( userOptions(); ) for a series of prompts of conditional statements. parseInt(),  prompt(), alert(), confirm()
// Prompt for criteria
// function will prompt for the number of characters and other criteria, i have to store the user input and call it later


// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// alert(generatePassword)

  
function userInfo() {
 
  var characterLength = parseInt(prompt("How many characters do you want the password to contain?"));
    if (characterLength < 8 || characterLength > 128) { 
    alert("Password must contain 8 to 128 characters.");
    parseInt(prompt("How many characters do you want the password to contain?"));
    if (characterLength < 8 || characterLength > 128) { 
      alert("Password must contain 8 to 128 characters.");
      parseInt(prompt("How many characters do you want the password to contain?"));
    }
  }
  // it's asking the right questions but storing the first number and not the number that satisfies the conditions, need to figure it out
  
  var includeUppercase = confirm("Do you wan to include uppercase letters?")
  var includeLowercase = confirm("Do you want to include lowercase letters?")
  var includeSpecialCharacters = confirm("Do you want to include special characters?")
  var includeNumbers = confirm("Do you want to include numbers?")
  
 //Storing answers

  var userChoices = {
    characterLength: characterLength,
    includeUppercase: includeUppercase,
    includeLowercase: includeLowercase,
    includeSpecialCharacters: includeSpecialCharacters,
    includeNumbers: includeNumbers,
  }
  return userChoices;
}

function generatePassword() {
  var userOptions = userInfo();
console.log(userOptions)



}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// generateBtn.addEventListener("click")
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

