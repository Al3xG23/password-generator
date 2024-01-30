// GIVEN I need a new, secure password

// 1 - Create array for special characters, uppercase, lowercase, numeric
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "`", "=", "+", "-", "_", "*", "?", "/", "<", ">", "|"];

var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numerics = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// 2 - Event listener with a function that generates password with user input generatePassword();

function getLength() {

  var characterLength = parseInt(prompt("How many characters do you want the password to contain?"));
  console.log(characterLength);
  if (characterLength < 8 || characterLength > 128) {
    alert("Password must contain 8 to 128 characters.");
    return getLength();
  } else {
    return characterLength;
  }
}

// 3 - Save user input

function userInfo() {
 
  var characterLength = getLength()
  // console.log(characterLength + " hey");
  var includeUppercase = confirm("Do you want to include uppercase letters?")
  var includeLowercase = confirm("Do you want to include lowercase letters?")
  var includeSpecialCharacters = confirm("Do you want to include special characters?")
  var includeNumbers = confirm("Do you want to include numbers?")

  // Storing answers
  
  // These 2 are the same
  var userChoices = {
    characterLength,
    includeUppercase,
    includeLowercase,
    includeSpecialCharacters,
    includeNumbers,
  }
  // var userChoices = {
  //   characterLength: characterLength,
  //   includeUppercase: includeUppercase,
  //   includeLowercase: includeLowercase,
  //   includeSpecialCharacters: includeSpecialCharacters,
  //   includeNumbers: includeNumbers,
  // }
  return userChoices;
}
// 4 - Randomize
// Here I need to do the randomization of arrays and save into a blank array
// I need to use the length chosen by the user, characterLength

// 5 - Generate password
function generatePassword() {
  var userOptions = userInfo();
  console.log(userOptions);




}

generatePassword();


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

