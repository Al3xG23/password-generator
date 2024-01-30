// GIVEN I need a new, secure password
var userOptions;
var result = [];

// 1 - Create array for special characters, uppercase, lowercase, numeric
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "~", "`", "=", "+", "-", "_", "*", "?", "/", "<", ">", "|"];

var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numerics = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


// 2 - Event listener with a function that generates password with user input generatePassword();
// Maybe add a condition if user doesn't input a character length and just hits cancel
function getLength() {

  var characterLength = parseInt(prompt("How many characters do you want the password to contain?"));
  if (characterLength < 8 || characterLength > 128) {
    alert("Password must contain 8 to 128 characters.");
    return getLength();
  } else {
    return characterLength;
  }
}

// 3 - Save user input
// Maybe change prompts to ask yes or no instead of ok and cancel

function userInfo() {

  var characterLength = getLength()
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

function getRandomNum(n) {
  return Math.floor(Math.random() * (n + 1));
}

function generateMinimumPwReqs() {
  
  if (userOptions.includeLowercase) {
    result.push(lowercaseLetters[getRandomNum(lowercaseLetters.length)]);
    userOptions.characterLength = userOptions.characterLength -= 1;
  }
  
  if (userOptions.includeUppercase) {
    result.push(uppercaseLetters[getRandomNum(uppercaseLetters.length)]);
    userOptions.characterLength = userOptions.characterLength -= 1;
  }
  
  if (userOptions.includeNumbers) {
    result.push(numerics[getRandomNum(numerics.length)]);
    userOptions.characterLength = userOptions.characterLength -= 1;
  }

  if (userOptions.includeSpecialCharacters) {
    result.push(specialCharacters[getRandomNum(specialCharacters.length)]);
    userOptions.characterLength = userOptions.characterLength -= 1;
  }

}

// 5 - Generate password
function generatePassword() {
  userOptions = userInfo();
  result = [];
  generateMinimumPwReqs();
  var comArray = [];
  if (userOptions.includeLowercase) {
   comArray = comArray.concat(lowercaseLetters);
  }
  
  if (userOptions.includeUppercase) {
   comArray = comArray.concat(uppercaseLetters);    
  }
  
  if (userOptions.includeNumbers) {
    comArray = comArray.concat(numerics);
  }

  if (userOptions.includeSpecialCharacters) {
    comArray = comArray.concat(specialCharacters);
  }
  console.log(comArray);
  
  for (let i=0; i<userOptions.characterLength;i++) {
    result.push(comArray[getRandomNum(comArray.length)]);
  }
  
  result = result.join("");
  return result;
}



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

